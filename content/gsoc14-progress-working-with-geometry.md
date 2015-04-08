Title: GSoC'14 Progress: Working with geometry
Date: 2014-07-08 17:24
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: gsoc, physics, sympy
Slug: gsoc14-progress-working-with-geometry

<div dir="ltr" style="text-align: left;">
<div class="markdown-body">
<div style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 15px;">
<span style="background-color: white;">This week I
completed `refraction_angle`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
Now it also works
with `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} and `Plane`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
This function calculates transmitted vector after
refraction. `medium1`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} and `medium2`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} can
be `Medium`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}or
any sympifiable object.
If`incident`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} is
an object
of `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}, `normal`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} also
has to be an instance
of `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} in
order to get the output as
a `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
If plane of separation is not provided and normal is an instance
of `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"},
normal will be assumed to be intersecting incident ray at the plane of
separation. This will not be the case
when `normal`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} is
a `Matrix`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} or
any other sequence.   
If `incident`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} is
an instance
of `Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} and `plane`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} has
not been provided
and `normal`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} is
not`Ray3D`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"},
output will be
a `Matrix`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"}.
It is dependent
on `Plane`{style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; font-family: Menlo, Consolas, 'Courier New', monospace; font-size: 12px !important; padding: 2px 4px; white-space: nowrap;"} so
I haven’t added tests for it.</span>

</div>
<div style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 15px;">
<span style="background-color: white;">Here’s the link to the
PR <https://github.com/sympy/sympy/pull/7626></span>

</div>
<div style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 15px;">
<span style="background-color: white;">This week I also worked on making
spherical mirrors in SymPy. There are few issues that I am facing.
Currently I’m working(stuck) on locating mirrors in space. It’s an
amalgamation of 2D and 3D geometry. I still have to subclass Ray of
geometry and make it useful for this. I’ve sent a [WIP
PR](https://github.com/sympy/sympy/pull/7686).</span>

</div>
<div style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 15px;">
<span style="background-color: white;">I’m waiting for Sean to
merge [this](https://github.com/sympy/sympy/pull/7607) long waited PR
for moving Gaussian optics module.</span>

</div>
<div style="color: #162029; font-family: 'Open Sans', 'Trebuchet MS', Helvetica, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 15px;">
That's all for now.

</div>
</div>
</div>
</p>

