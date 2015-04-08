Title: GSoC'14: Third week
Date: 2014-06-10 10:08
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: gsoc, physics, sympy
Slug: gsoc14-third-week

<div dir="ltr" style="text-align: left;">
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
It was another not so productive week but I learnt a lot regarding how
to write new classes by extending classes
like `Basic`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}, `Symbol`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} and `Expr`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Last week I got stuck with the rewrite expression mechanism which turned
out to be a bug in
the `core`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}.
Thanks to [Sean](https://github.com/flacjacket) for the fix! I need to
do some more cleanup to get my last PR merged.

</div>
-   <https://github.com/sympy/sympy/pull/7546>

<div>
<span style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px;">I
also tried to fix an issue related to assumptions
in </span>`Function`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; line-height: 18px; padding: 3px 4px;"}<span style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px;"> but
the complex behaviour
of </span>`__new__`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; line-height: 18px; padding: 3px 4px;"}<span style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px;"> constructor
makes it difficult to follow the inheritance. I also need to understand
the working of SymPy's
 </span>`@cacheit`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; line-height: 18px; padding: 3px 4px;"}<span style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px;"> 
decorator.</span>

</div>
<div>
<span style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px;">  
</span>

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Lately I've been working on the implementation of optical medium. The
motivation behind defining
a`Medium`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} came
from the laziness of passing constants like electric permittivity and
magnetic permeabhility of the medium everywhere. It will help carry out
operations(events) very easily in optics.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
With the merger
of `Point3D`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} by [Akshay](https://github.com/akshayah3) I
planned to implement Fermat's principle and thus felt the need
of `Medium`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} first.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
I've already sent a WIP pull request
for `Medium`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}.
Here's the link:

</div>
-   <https://github.com/sympy/sympy/pull/7580>

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
I also took a quick glance at variational calculus to solve the problem
involving Fermat's principle. I'm planning to start this as following:

</div>
    class FermatsPrinciple(Expr):    def __init__(self, p1, p2, v=Symbol('c')):        if isinstance(p1, type(())) and isinstance(p2, type(())):            if len(p1) == 2 and len(p2) == 2:                self.p1 = Point(*p1)                self.p2 = Point(*p2)            elif len(p1) == 3 and len(p2) == 3:                self.p1 = Point3D(*p1)                self.p2 = Point3D(*p2)        elif isinstance(p1, Point) and isinstance(p2, Point):            self.p1 = Point3D(p1.x, p1.y, 0)            self.p2 = Point3D(p2.x, p2.y, 0)        elif isinstance(p1, Point3D) and isinstance(p2, Point3D):            self.p1 = p1            self.p2 = p2        else:            raise TypeError("p1 and p2 can only be tuple, Point or Point3D")

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
It's not a very good API and needs more refining which I'll discuss with
Sean once I get it working.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
My work in this week(*fourth week as I am writing this post very late*)
will be to complete the above discussed things.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
On a lighter note, the temperature here is 46 degrees and no sign of
rains yet. :(

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
*That's all for now. Cheers!*

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
If you have some feedback or questions regarding this post, please add
comments. I would be happy to get some feedback.

</div>
</div>
</p>

