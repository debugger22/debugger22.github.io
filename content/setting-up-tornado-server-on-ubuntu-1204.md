Title: Setting up Tornado server on Ubuntu 12.04
Date: 2014-04-05 06:42
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: BinPy, Server, Ubuntu
Slug: setting-up-tornado-server-on-ubuntu-1204

<div dir="ltr" style="text-align: left;">
 {#setting-up-tornado-server-on-ubuntu-12-04 style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 36px; margin: 0px;"}

<div style="font-size: 13px; font-weight: normal; line-height: 18px; margin-bottom: 9px;">
<div class="separator" style="clear: both; text-align: center;">
[![Tornado](http://www.tornadoweb.org/en/stable/_images/tornado.png)](http://www.tornadoweb.org/en/stable/_images/tornado.png)

</div>
Lately I was looking at Tornado which has been open sourced by Facebook.
It was originally developed at FriendFeed. It has a great capability to
handle tens of thousands on live connections at a time making it ideal
for   
long polling, WebSockets, and other applications that require a
long-lived connection to each user. This server is written in Python
which follows a non blocking methodology of coding. Just like Node.js it
also works on a similar concept of callbacks.

</div>
</h1>
<span style="font-size: large;">Prerequisites</span> {#setting-up-tornado-server-on-ubuntu-12-04 style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 36px; margin: 0px;"}
====================================================

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Tornado runs on Python 2.6, 2.7, 3.2, and 3.3. On Python 2, the
backports.ssl\_match\_hostname package must be installed (This will be
installed automatically when using pip or easy\_install); on Python 3
there are no strict dependencies outside the standard library. Some
Tornado features may require one of the following optional libraries:

</div>
-   <div style="margin-bottom: 9px;">
    [unittest2](https://pypi.python.org/pypi/unittest2) is needed to run
    Tornado’s test suite on Python 2.6 (it is unnecessary on more recent
    versions of Python)
    </div>
-   <div style="margin-bottom: 9px;">
    [concurrent.futures](https://pypi.python.org/pypi/futures) is the
    recommended thread pool for use with Tornado and enables the use
    of [ThreadedResolver](http://www.tornadoweb.org/en/stable/netutil.html#tornado.netutil.ThreadedResolver).
    It is needed only on Python 2; Python 3 includes this package in the
    standard library.
    </div>
-   <div style="margin-bottom: 9px;">
    [pycurl](http://pycurl.sourceforge.net/) is used by the optional
    tornado.curl\_httpclient. Libcurl version 7.18.2 or higher is
    required; version 7.21.1 or higher is recommended.
    </div>
-   <div style="margin-bottom: 9px;">
    [Twisted](http://www.twistedmatrix.com/) may be used with the
    classes
    in [tornado.platform.twisted](http://www.tornadoweb.org/en/stable/twisted.html#module-tornado.platform.twisted).
    </div>
-   <div style="margin-bottom: 9px;">
    [pycares](https://pypi.python.org/pypi/pycares) is an alternative
    non-blocking DNS resolver that can be used when threads are not
    appropriate.
    </div>
-   <div style="margin-bottom: 9px;">
    [Monotime](https://pypi.python.org/pypi/Monotime) adds support for a
    monotonic clock, which improves reliability in environments where
    clock adjustments are frequent. No longer needed in Python 3.3.
    </div>

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Tornado works on almost all platforms including unix, BSD, Mac OS X and
windows though it is advised to use it only on Unix for production
purpose.

</div>
<span style="font-size: large;">Installation</span> {#installation style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 36px; margin: 0px;"}
===================================================

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Tornado is listed in [PyPi](https://pypi.python.org/pypi/tornado) so it
can be installed very easily with the following command:

</div>
    sudo pip install tornado

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
For backports it will automatically
install [backports.ssl\_match\_hostname](https://pypi.python.org/pypi/backports.ssl_match_hostname).

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
You can also install the latest development version from source code
using following command:

</div>
    sudo pip install https://github.com/facebook/tornado/zipball/master

<span style="font-size: large;">Running a simple program using tornado</span> {#running-a-simple-program-using-tornado style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 36px; margin: 0px;"}
=============================================================================

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Following is a simple hello world program using tornado.

</div>
    import tornado.httpserverimport tornado.ioloopimport tornado.optionsimport tornado.webfrom tornado.options import define, optionsdefine("port", default=8888, help="run on the given port", type=int)class MainHandler(tornado.web.RequestHandler):    def get(self):        self.write("Hello, world")def main():    tornado.options.parse_command_line()    application = tornado.web.Application([        (r"/", MainHandler),    ])    http_server = tornado.httpserver.HTTPServer(application)    http_server.listen(options.port)    tornado.ioloop.IOLoop.instance().start()if __name__ == "__main__":    main()

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
The above written program will start the server on port 8888. You can
check it out by
visiting [http://www.yourdomain.com:8888](http://www.yourdomain.com:8888/).

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
  

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
I will write more on tornado in future. I'm planning to use this as
computing server for online version of [Binpy](http://www.binpy.org/).

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Cheers!

</div>
</div>
</p>

