package com.garagze;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import com.garagze.domain.Event;
import com.garagze.service.EventService;

public class MainActivity extends ListActivity {

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		// Retrieve items from server and get count
		int eventCount = getEventCount();

		// Build text field and display on activity page
		String displayText = "Number of events: " + eventCount;
		TextView textField = (TextView) findViewById(R.id.textField);
		textField.setText(displayText);

		// Build list view for address
		displayListView();

	}

	private void displayListView() {
		// Get the event data
		List<Event> events = EventService.getAllEvents();

		List<HashMap<String, String>> fillMaps = new ArrayList<HashMap<String, String>>();
		int rowid = 0;
		for (Event event : events) {
			HashMap<String, String> map = new HashMap<String, String>();
			rowid++;

			map.put("item_rowid", "" + event.getId().trim());
			map.put("item_street", event.getStreet().trim());
			map.put("item_distance", Double.toString(event.getDistance()));
			map.put("item_rating", Double.toString(event.getRating()));
			map.put("item_title", Double.toString(event.getRating()));
			map.put("item_description", event.getDescription().trim());
			fillMaps.add(map);
		}

		// create the grid item mapping
		String[] from = new String[] { "item_rowid", "item_street", "item_distance", "item_rating" };
		int[] to = new int[4];
		to[0] = R.id.item_rowid;
		to[1] = R.id.item_street;
		to[2] = R.id.item_distance;
		to[3] = R.id.item_rating;

		// fill in the grid_item layout
		SimpleAdapter simpleAdapter = new SimpleAdapter(this, fillMaps, R.layout.event_list_item, from, to);

		// Bind the array adapter to the listview.
		// ListView listView = (ListView)findViewById(R.id.eventlistview);
		// listView.setAdapter(simpleAdapter);
		setListAdapter(simpleAdapter);

	}

	private int getEventCount() {
		return EventService.getAllEvents().size();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		MenuInflater inflater = getMenuInflater();
		inflater.inflate(R.menu.main_menu, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle item selection
		switch (item.getItemId()) {
		case R.id.mi_add_event:
			addEvent();
			return true;
		case R.id.mi_show_map:
			showMap();
			return true;
		case R.id.mi_prefs:
			showPrefs();
			return true;
		default:
			return super.onOptionsItemSelected(item);
		}
	}

	private void showPrefs() {
		Log.v("ShowEventActivity", "Running showPrefs method.");
	}

	private void showMap() {
		Log.v("ShowEventActivity", "Runnomg showMap method.");
	}

	private void addEvent() {
		Log.v("ShowEventActivity", "Running addEvent method.");
		Intent intent = new Intent(this, AddEventActivity.class);
		startActivity(intent);  
	}

	private void showEventDetail(HashMap dataMap) {
		Log.v("ShowEventActivity", "Running showEventDetail method for: " + dataMap.get("item_street").toString());
		Intent intent = new Intent(this, EventDetailActivity.class);
		intent.putExtra("item_street", dataMap.get("item_street").toString());
		intent.putExtra("item_description", dataMap.get("item_description").toString());
		intent.putExtra("item_rating", dataMap.get("item_rating").toString());
		intent.putExtra("item_distance", dataMap.get("item_distance").toString());
		startActivity(intent);  
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		Log.v("MainActivity", "Running onDestroy method");
	}

	@Override
	protected void onPause() {
		super.onPause();
		Log.v("MainActivity", "Running onPause method");
	}

	@Override
	protected void onRestart() {
		super.onRestart();
		Log.v("MainActivity", "Running onRestart method");
	}

	@Override
	protected void onResume() {
		super.onResume();
		Log.v("MainActivity", "Running onResume method");
		// Retrieve items from server and get count
		int eventCount = getEventCount();

		// Build text field and display on activity page
		String displayText = "Number of events: " + eventCount;
		TextView textField = (TextView) findViewById(R.id.textField);
		textField.setText(displayText);

		// Build list view for address
		displayListView();
	}

	@Override
	protected void onStart() {
		super.onStart();
		Log.v("MainActivity", "Running onStart method");
	}

	@Override
	protected void onStop() {
		super.onStop();
		Log.v("MainActivity", "Running onStop method");
	}
	
	@Override
	protected void onListItemClick(ListView listView, View view, int position, long id) {
	    // TODO Auto-generated method stub
	    super.onListItemClick(listView, view, position, id);
	    Log.v("onListItemClick", "Position: " + position);
	    Log.v("onListItemClick", "Id:       " + id);
	    
	    HashMap dataMap = (HashMap) listView.getItemAtPosition(position);
	    
	    // start new activity and pass event 
	    showEventDetail(dataMap);
	}
}