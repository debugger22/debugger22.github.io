Title: Battery Status API in Chrome
Date: 2014-10-13 12:20
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: Chrome, JavaScript
Slug: battery-status-api-in-chrome

<div dir="ltr" style="text-align: left;">
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Implementation of HTML battery status API is a bit different in webkit.
It has not been exposed
with `navigator.battery`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}.
This works fine in Gecko(Firefox) but you might have hard time if you
try it on Chrome.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
After banging my head for few days against some chromium issues I
figured out that the API
is `navigator.getBattery()`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} instead
of `navigator.battery`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} which
returns a promise. It works from [Google Chrome
v38.0.2125.92](https://chromium.googlesource.com/chromium/src/+/38.0.2125.92/content/browser/battery_status/).

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Here's an example code for this:

</div>
    var battery = navigator.battery || navigator.mozBattery;if (battery) {    // This works in Firefox    console.log(battery.level * 100 + '%');} else if (navigator.getBattery) {    // This works in Google Chrome    navigator.getBattery().then(function(battery) {        console.log(battery.level * 100 + '%');    });}

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Once you have the battery, the sub API is same for both.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Cheers!

</div>
</div>
</p>

