Title: Easy caching in Android
Date: 2014-06-11 21:26
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: Android
Slug: easy-caching-in-android

<div dir="ltr" style="text-align: left;">
<div class="wmd-preview-section preview-content" id="wmd-preview-section-151" style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px;">
<div class="wmd-preview-section preview-content" id="wmd-preview-section-463">
<div style="margin-bottom: 15px;">
<span style="background-color: white;">Recently I found a better way to
cache data in Android. It can also be used to save preferences of users.
I was using SQLite before and it was cumbersome. I had to make a table
to save just few key-value pairs.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">Android SDK comes with an API
called `android.content.SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
A`SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} object
points to a file containing key-value pairs and provides simple methods
to read and write them.
Each `SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} file
is managed by the framework and can be private or shared. You’ll not
lose your data even when the device restarts. It has one more advantage,
you can also use to share data among different activities.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">It supports primitive data types
only. You can not save objects
in `SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
Although you can serialize your object and store the raw string in
it.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">To get a private handle of
the `SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} use
following command:</span>

</div>
</div>
<div class="wmd-preview-section preview-content" id="wmd-preview-section-1442">
<div class="se-section-delimiter">
</div>
~~~~ {.prettyprint .prettyprinted}
SharedPreferences myPrefs = getActivity().getSharedPreferences(        getString("YOUR_PREFERENCE_FILE_NAME"), Context.MODE_PRIVATE);
~~~~

<div style="margin-bottom: 15px;">
<span style="background-color: white;">**Note**: `YOUR_PREFERENCE_FILE_NAME`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} can
be any valid string allowed for a file name in UNIX environment.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">Private data will be available to
your application only, it can not be accessed by other applications
installed on the device. To make it public you just need to
replace `Context.MODE_PRIVATE`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} with
either `MODE_WORLD_READABLE`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} or `MODE_WORLD_WRITABLE`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.</span>

</div>
</div>
<div class="wmd-preview-section preview-content" id="wmd-preview-section-1371">
<div class="se-section-delimiter">
</div>
~~~~ {.prettyprint .prettyprinted}
SharedPreferences myPrefs = getSharedPreferences(    "YOUR_PREFERENCE_FILE_NAME", Context.MODE_WORLD_WRITABLE);
~~~~

<div style="margin-bottom: 15px;">
<span style="background-color: white;">Publicly shared prefences are
available to other apps and if they know the file identifier, they may
perform read/write operations on it.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">Once you’ve got the handle you
can read data using following code:</span>

</div>
</div>
<div class="wmd-preview-section preview-content" id="wmd-preview-section-1558">
<div class="se-section-delimiter">
</div>
~~~~ {.prettyprint .prettyprinted}
String strData = myPrefs.getString("mStrData", DEFAULT_STRING);boolean boolData = myPrefs.getBoolean("mBoolData", DEFAULT_BOOLEAN);int intData = myPrefs.getInt("mIntData", DEFAULT_INTEGER);
~~~~

<div style="margin-bottom: 15px;">
<span style="background-color: white;">**Note**: If there isn’t any data
associated with the passed key, it will return the passed default
value.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">For a complete list of methods
see [this](http://developer.android.com/reference/android/content/SharedPreferences.html).</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">To save data in
the `SharedPreferences`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} you
need to add one more line:</span>

</div>
</div>
<div class="wmd-preview-section preview-content" id="wmd-preview-section-1607">
<div class="se-section-delimiter">
</div>
~~~~ {.prettyprint .prettyprinted}
SharedPreferences.Editor editor = myPrefs.edit();
~~~~

<div style="margin-bottom: 15px;">
<span style="background-color: white;">Now you can easily save data in
the memory</span>

</div>
</div>
<div class="wmd-preview-section preview-content" id="wmd-preview-section-1932">
<div class="se-section-delimiter">
</div>
~~~~ {.prettyprint .prettyprinted}
editor.putBoolean("cacheAvailable", true);editor.putInt("pingCount", myPrefs.getInt("pingCount")++);editor.putString("mResponse", response); // A web response in my case.editor.commit(); // This is important to commit changes
~~~~

<div style="margin-bottom: 15px;">
<span style="background-color: white;">**Update:**Use editor.apply() for
asynchronous call.</span>  
<span style="background-color: white;">  
</span><span style="background-color: white;">This API made my life
easy. Now I do not need to write queries to do these small
things.</span>

</div>
<div style="margin-bottom: 15px;">
<span style="background-color: white;">If you have suggestions, please
comment below. I’ll be happy to get feedback.</span>

</div>
</div>
</div>
</div>
</p>

