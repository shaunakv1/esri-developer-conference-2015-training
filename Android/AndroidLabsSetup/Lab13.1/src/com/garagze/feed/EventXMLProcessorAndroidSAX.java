package com.garagze.feed;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import android.util.Xml;
import android.util.Xml.Encoding;

import com.garagze.domain.Event;

public class EventXMLProcessorAndroidSAX implements EventXMLProcessor {

	public List<Event> processEventFeed(InputStream inputStream) {
		EventHandler handler = null;
		try {
			handler = new EventHandler();
			Xml.parse(inputStream, Encoding.UTF_8, handler);
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return handler.getEvents();
	}

	class EventHandler extends DefaultHandler {

		private List<Event> events;
		private Event currentEvent;
		private StringBuilder builder;

		public List<Event> getEvents() {
			return this.events;
		}

		@Override
		public void characters(char[] ch, int start, int length) throws SAXException {
			super.characters(ch, start, length);
			builder.append(ch, start, length);
		}

		@Override
		public void endElement(String uri, String localName, String name) throws SAXException {
			super.endElement(uri, localName, name);
			if (this.currentEvent != null) {
				if (localName.equalsIgnoreCase(ID)) {
					currentEvent.setId(builder.toString());
				} else if (localName.equalsIgnoreCase(DATE)) {
					Date date = null;
					try {
						String dateString = builder.toString().trim();
						//dateString = "Mon 2010-10-18 10:45 AM CST";
						System.out.println("Parsing date string: " + dateString);
						date = new SimpleDateFormat("EEE yyyy-MM-dd hh:mm aa zzz").parse(dateString);
					} catch (ParseException e) {
						e.printStackTrace();
					}
					currentEvent.setDate(date);
				} else if (localName.equalsIgnoreCase(TITLE)) {
					currentEvent.setTitle(builder.toString());
				} else if (localName.equalsIgnoreCase(STREET)) {
					currentEvent.setStreet(builder.toString());
				} else if (localName.equalsIgnoreCase(CITY)) {
					currentEvent.setCity(builder.toString());
				} else if (localName.equalsIgnoreCase(STATE)) {
					currentEvent.setState(builder.toString());
				} else if (localName.equalsIgnoreCase(ZIP)) {
					currentEvent.setZip(builder.toString());
				} else if (localName.equalsIgnoreCase(LATITUDE)) {
					currentEvent.setLatitude(Double.parseDouble(builder.toString()));
				} else if (localName.equalsIgnoreCase(LONGITUDE)) {
					currentEvent.setLongitude(Double.parseDouble(builder.toString()));
				} else if (localName.equalsIgnoreCase(DESCRIPTION)) {
					currentEvent.setDescription(builder.toString());
				} else if (localName.equalsIgnoreCase(RATING)) {
					currentEvent.setRating(Double.parseDouble(builder.toString()));
				} else if (localName.equalsIgnoreCase(DISTANCE)) {
					currentEvent.setDistance(Double.parseDouble(builder.toString()));
				}else if (localName.equalsIgnoreCase(EVENT)) {
					events.add(currentEvent);
				}
				builder.setLength(0);
			}
		}

		@Override
		public void startDocument() throws SAXException {
			super.startDocument();
			events = new ArrayList<Event>();
			builder = new StringBuilder();
		}

		@Override
		public void startElement(String uri, String localName, String name, Attributes attributes) throws SAXException {
			super.startElement(uri, localName, name, attributes);
			if (localName.equalsIgnoreCase(EVENT)) {
				this.currentEvent = new Event();
			}
		}
	}

}
