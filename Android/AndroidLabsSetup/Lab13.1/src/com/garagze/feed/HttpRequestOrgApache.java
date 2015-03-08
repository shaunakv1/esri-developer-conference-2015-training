package com.garagze.feed;

import java.io.IOException;
import java.io.InputStream;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import android.util.Log;

import com.garagze.utils.Constants;


public class HttpRequestOrgApache implements XmlHttpRequest {

	public InputStream getUrlResponse(String urlString) {
		Log.v(Constants.LOGTAG, "Retrieving URL: " + urlString);
		InputStream in = null;
		try {
			DefaultHttpClient httpclient = new DefaultHttpClient();
			HttpGet httpget = new HttpGet(urlString);
			HttpResponse response = httpclient.execute(httpget);
			HttpEntity entity = response.getEntity();
			if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
				in = entity.getContent();
			}
		} catch (IOException e) {
			Log.v(Constants.LOGTAG, "Unable to retrieve URL");
			e.printStackTrace();
		}

		return in;
	}

}
