Title: Two things: Dockerizing Applications and AWS' on the house services
Date: 2015-01-08 18:25
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: aws, cloud, docker, Server
Slug: two-things-dockerizing-applications-and-aws-on-the-house-services

<div dir="ltr" style="text-align: left;">
Lately I migrated my app from DigitalOcean to AWS and encountered the
pain of setting up similar environment.(Documenting everything is very
important!)  

<div>
<div>
  

</div>
<div>
I heard long ago about [Docker](https://docker.io/) but never bothered
to tinker with it. If you don't know, Docker is a platform for
developers and sysadmins to develop, ship, and run applications. Docker
lets you quickly assemble applications from components and eliminates
the friction that can come when shipping code.

</div>
<div>
  

</div>
<div class="separator" style="clear: both; text-align: center;">
[![](http://blog.docker.com/wp-content/uploads/2013/08/KuDr42X_ITXghJhSInDZekNEF0jLt3NeVxtRye3tqco.png)](http://blog.docker.com/wp-content/uploads/2013/08/KuDr42X_ITXghJhSInDZekNEF0jLt3NeVxtRye3tqco.png)

</div>
<div>
  

</div>
<div>
It's just like a \`git pull\` for your custom OS.
[https://docker.io](https://docker.io/) manages repositories of docker
images, public and private. A docker image is just a set of layers where
layers are changes to its file system as results of commands. It uses
same commit system like git. Once you've established an image you can
run your applications on it. Docker calls them containers. Each
container runs a single process. Even when containers run on same
environment, they are sandboxed to themselves. There's a 'sophisticated'
way in which containers talk to each
other. [Here's](https://docs.docker.com/userguide/dockerizing) a great
article on dockerizing your applications.

</div>
</div>
<div>
  

</div>
<div>
So yeah, I had to set up the same environment but just for once! Now I
can easily automate spawning new instances and adding them under
Amazon's ELB. It also made the development easier.

</div>
<div>
  

</div>
<div>
I'm amazingly happy with Amazon's great products. Things like Elastic
IP, Elastic Load Balancer, Elastic Block Storage, S3, VPC, etc. can be
done with just few clicks. Setting up such infrastructure manually is a
nightmare. One thing which I miss here is MongoDB. Although there is
Amazon's own DynamoDB but I really don't want to learn another NoSQL DB.
I'm using few EC2 instances for that.

</div>
<div>
  

</div>
<div>
We're accepting beta testers for this app.
[https://getwaeo.com](https://getwaeo.com/)

</div>
<div>
  

</div>
<div>
I'm really excited about it and will be putting it in production in few
weeks! Cheers!

</div>
<div>
  

</div>
</div>
</p>

