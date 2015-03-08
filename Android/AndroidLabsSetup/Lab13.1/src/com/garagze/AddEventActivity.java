package com.garagze;

import android.app.Activity;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.garagze.domain.Event;
import com.garagze.service.EventService;

public class AddEventActivity extends Activity {

	private LocationManager locationManager;
	LocationListener locationListener;
	
	View eventView;
	View dialogView;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.add_event);

//		eventView = findViewById(R.layout.add_event);
//
//		locationListener = new LocationListener() {
//
//			public void onLocationChanged(Location location) {
//			}
//
//			public void onProviderDisabled(String provider) {
//				// required for interface, not used
//			}
//
//			public void onProviderEnabled(String provider) {
//				// required for interface, not used
//			}
//
//			public void onStatusChanged(String provider, int status, Bundle extras) {
//				// required for interface, not used
//			}
//		};
//
//		this.locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
//		locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);
//		Location location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
//
//		Geocoder geocoder = new Geocoder(this, Locale.getDefault());
//		String addressText = "";
//		try {
//			if (location != null) {
//				List<Address> addresses = geocoder.getFromLocation(location.getLatitude(), location.getLongitude(), 1);
//				for (Address address : addresses) {
//					System.out.println(address.getAddressLine(0));
//					addressText = addressText + address.getAddressLine(0) + "\n";
//					System.out.println("================");
//				}
//			}
//
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

		LayoutInflater inflater = LayoutInflater.from(this);
//		dialogView = inflater.inflate(R.layout.event_selected, null);

//		TextView title = (TextView) dialogView.findViewById(R.id.event_title);
//		title.setText(addressText);
//		title.setText("assigned value");

		final Button addButton = (Button) findViewById(R.id.add_button);
		System.out.println(addButton);

		addButton.setOnClickListener(new View.OnClickListener() {
			public void onClick(View view) {
				// Perform action on click
				Log.v("AddEventActivity", "Add button clicked.");
				
				final EditText viewStreet = (EditText) findViewById(R.id.event_address);
				String textStreet = viewStreet.getText().toString();
				
				Event event = new Event();
				event.setTitle("New Garage Sale");
				event.setDescription("Lots of great stuff");
				event.setStreet(textStreet);
				event.setRating(4.5);
				event.setDistance(3.8);
				
				EventService.addEvent(event);
				
				finish();
			}
		});

		final Button cancelButton = (Button) findViewById(R.id.cancel_button);
		System.out.println(cancelButton);

		cancelButton.setOnClickListener(new View.OnClickListener() {
			public void onClick(View view) {
				// Perform action on click
				System.out.println("Cancel button clicked");
				
				finish();
			}
		});

//		new AlertDialog.Builder(this).setView(dialogView).setPositiveButton("More Detail", new DialogInterface.OnClickListener() {
//			public void onClick(DialogInterface di, int what) {
//
//			}
//		}).setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
//			public void onClick(DialogInterface di, int what) {
//				di.dismiss();
//			}
//		}).show();

	}
}