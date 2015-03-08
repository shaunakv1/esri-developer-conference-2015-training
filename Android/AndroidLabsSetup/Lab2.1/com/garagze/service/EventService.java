package com.garagze.service;

import java.io.InputStream;
import java.util.List;

import android.content.Context;
import android.util.Log;

import com.garagze.R;
import com.garagze.domain.Event;
import com.garagze.feed.EventXMLProcessor;
import com.garagze.feed.EventXMLProcessorAndroidSAX;

public class EventService {

	private static List<Event> events = null;

	private static final String TAG = "EventService";

	private static EventXMLProcessor parser = new EventXMLProcessorAndroidSAX();

	public static List<Event> getAllEvents(Context context) {

		if (events != null) {
			Log.v("EventService", "Return existing events");
			return events;
		}

		Log.d(TAG,"Running EventService.getAllEvents");
		InputStream inputStream = context.getResources().openRawResource(R.raw.naper_events);
		events = parser.processEventFeed(inputStream);
		return events;
	}

	public static void addEvent(Event event) {
		Log.v(TAG, "addEvent: " + event.getTitle());
		Log.v(TAG, "Number of events before add:" + events.size());
		events.add(0, event);
	}

	public static Event updateEvent(Long id, Event event) {
		return events.set(id.intValue(), event);
	}
	
	public static Event getEvent(Long id) {
		return events.get(id.intValue());
	}
}
