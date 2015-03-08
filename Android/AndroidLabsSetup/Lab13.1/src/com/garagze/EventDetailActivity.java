package com.garagze;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.TypedArray;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemLongClickListener;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.Gallery;
import android.widget.ImageView;
import android.widget.TextView;

public class EventDetailActivity extends Activity {

	protected static final String TAG = "EventDetailActivity";
	private TextView street;
	private TextView description;
	private TextView rating;
	private TextView distance;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.event_detail);

		street = (TextView) findViewById(R.id.item_street);
		description = (TextView) findViewById(R.id.item_description);
		rating = (TextView) findViewById(R.id.item_rating);
		distance = (TextView) findViewById(R.id.item_distance);

		Intent intent = getIntent();

		street.setText(intent.getStringExtra("item_street"));
		description.setText(intent.getStringExtra("item_description"));
		// rating.setText( intent.getStringExtra("item_rating") );
		// distance.setText( intent.getStringExtra("item_distance") );

		// System.out.println(rating.getText());

		Gallery g = (Gallery) findViewById(R.id.gallery);
		g.setAdapter(new ImageAdapter(this));

		g.setOnItemClickListener(new OnItemClickListener() {
			public void onItemClick(AdapterView parent, View v, int position, long id) {
				//
				System.out.println("on click gallery");
			}
		});
		

		// Long click for displaying picture
//		g.setOnItemLongClickListener(new OnItemLongClickListener() {
//			public AdapterView onItemLongClick(AdapterView parent, View v, int position, long id) {
//				//
//				System.out.println("on click gallery");
//				return null;
//			}
//		});

		final Context context = this;
		
		final Button addButton = (Button) findViewById(R.id.picture_button);
		addButton.setOnClickListener(new OnClickListener() {
			public void onClick(View v) {
				Log.v("EventDetailActivity", "Take Picture button clicked.");
				Intent intent = new Intent(context, CameraActivity.class);
				startActivity(intent);
			}
		});

	}

	public class ImageAdapter extends BaseAdapter {
		int mGalleryItemBackground;
		private Context mContext;

		private Integer[] mImageIds = {
		        R.drawable.sample_1,
		        R.drawable.sample_2,
		        R.drawable.sample_3,
		        R.drawable.sample_4,
		        R.drawable.sample_5,
		        R.drawable.sample_6,
		        R.drawable.sample_7
		};

		public ImageAdapter(Context c) {
			mContext = c;
			TypedArray a = obtainStyledAttributes(R.styleable.HelloGallery);
			mGalleryItemBackground = a.getResourceId(
			        R.styleable.HelloGallery_android_galleryItemBackground, 0);
			a.recycle();
		}

		public int getCount() {
			return mImageIds.length;
		}

		public Object getItem(int position) {
			return position;
		}

		public long getItemId(int position) {
			return position;
		}

		public View getView(int position, View convertView, ViewGroup parent) {
			ImageView i = new ImageView(mContext);

			i.setImageResource(mImageIds[position]);
			i.setLayoutParams(new Gallery.LayoutParams(150, 100));
			i.setScaleType(ImageView.ScaleType.FIT_XY);
			i.setBackgroundResource(mGalleryItemBackground);

			return i;
		}
	}
}
