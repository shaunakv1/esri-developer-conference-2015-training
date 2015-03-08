package com.garagze.service;

import java.io.InputStream;
import java.util.List;

import android.util.Log;

import com.garagze.domain.Event;
import com.garagze.feed.EventXMLProcessor;
import com.garagze.feed.EventXMLProcessorAndroidSAX;
import com.garagze.feed.HttpRequestOrgApache;
import com.garagze.feed.XmlHttpRequest;
import com.garagze.utils.Constants;

public class EventService {
	
	private static List<Event> events = null;
	
	private static final String CLASSTAG = EventService.class.getSimpleName();

	private static XmlHttpRequest request = new HttpRequestOrgApache();
	private static EventXMLProcessor parser = new EventXMLProcessorAndroidSAX();

	public static List<Event> processEventFeed(String urlString) {
		InputStream inputStream = request.getUrlResponse(urlString);
		return parser.processEventFeed(inputStream);
	}

	public static List<Event> getAllEvents() {
		
		if (events != null) {
			Log.v("EventService", "Return existing events");
			return events;
		}
		
		Log.v("EventService", "Running refreshEvents");
		
		String FEED_URL = null;
		//FEED_URL = getString(R.string.event_feed;)
		FEED_URL = "http://10.0.2.2:8080/garagze/naper_events.xml";
		FEED_URL = "http://192.168.0.197:8080/garagze/naper_events.xml";

		events = EventService.processEventFeed(FEED_URL);
		
		return events;
	}
	
	public static void addEvent(Event event) {
		Log.v(Constants.LOGTAG, " " + CLASSTAG + " addEvent: " + event.getTitle());
		Log.v(Constants.LOGTAG, "Number of events before add:" + events.size());
		events.add(0, event);
	}

	public static Event getEventById(long id) {
	    // TODO Auto-generated method stub
	    return null;
    }

}
