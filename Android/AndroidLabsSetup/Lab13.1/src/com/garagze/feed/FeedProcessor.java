package com.garagze.feed;

import java.io.InputStream;
import java.util.ArrayList;

public interface FeedProcessor<T> {

	public abstract ArrayList<T> processEventFeed(InputStream inputStream);

}
