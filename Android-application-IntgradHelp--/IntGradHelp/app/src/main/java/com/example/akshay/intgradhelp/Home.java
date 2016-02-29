package com.example.akshay.intgradhelp;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.RectF;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;


public class Home extends Activity {

    LinearLayout allServices, comboServices, individualServices;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        Bitmap bm = BitmapFactory.decodeResource(getResources(), R.drawable.allservices);
        ImageView mImage = (ImageView) findViewById(R.id.imgAllServices);
        mImage.setImageBitmap(getCircleBitmap(bm));

        bm = BitmapFactory.decodeResource(getResources(), R.drawable.combo);
        mImage = (ImageView) findViewById(R.id.imgIndiServices);
        mImage.setImageBitmap(getCircleBitmap(bm));

        bm = BitmapFactory.decodeResource(getResources(), R.drawable.individual);
        mImage = (ImageView) findViewById(R.id.imgComboServices);
        mImage.setImageBitmap(getCircleBitmap(bm));

        allServices = (LinearLayout)findViewById(R.id.layoutAll);
        comboServices = (LinearLayout)findViewById(R.id.layoutCombo);
        individualServices = (LinearLayout)findViewById(R.id.layoutIndividual);

        allServices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent allIntent = new Intent(Home.this,allServices.class);
                startActivity(allIntent);
            }
        });

        comboServices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent allIntent = new Intent(Home.this,comboServices.class);
                startActivity(allIntent);
            }
        });

        individualServices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent allIntent = new Intent(Home.this,individualServices.class);
                startActivity(allIntent);
            }
        });

    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.home, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
    public Bitmap getCircleBitmap(Bitmap bitmap) {
        final Bitmap output = Bitmap.createBitmap(bitmap.getWidth(),
                bitmap.getHeight(), Bitmap.Config.ARGB_8888);
        final Canvas canvas = new Canvas(output);

        final int color = Color.RED;
        final Paint paint = new Paint();
        final Rect rect = new Rect(0, 0, bitmap.getWidth(), bitmap.getHeight());
        final RectF rectF = new RectF(rect);

        paint.setAntiAlias(true);
        canvas.drawARGB(0, 0, 0, 0);
        paint.setColor(color);
        canvas.drawOval(rectF, paint);

        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
        canvas.drawBitmap(bitmap, rect, rect, paint);

        bitmap.recycle();

        return output;
    }
}
