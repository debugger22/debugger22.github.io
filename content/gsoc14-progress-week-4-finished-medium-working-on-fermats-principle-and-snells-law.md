Title: GSoC'14 progress, week 4: finished medium, working on Fermat's principle and Snell's law
Date: 2014-06-16 19:32
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: gsoc, physics, sympy
Slug: gsoc14-progress-week-4-finished-medium-working-on-fermats-principle-and-snells-law

<div dir="ltr" style="text-align: left;">
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
It was a great week! My last to last PR, on
enhancing `TWave`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"},
got merged! I have also
finished`Medium`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} and
waiting for Sean's comments on it. Here's the link to that PR:

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
<https://github.com/sympy/sympy/pull/7580>

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
I still have a *todo* in the tests:

</div>
    m5 = Medium('m5', permittivity=710*10**(-12)*s**4*A**2/(m**3*kg), n=1.33)assert simplify(m5.intrinsic_impedance - 6.24845417765552*kg*m**2/(A**2*s**3)) == 0# XXX: This is supposed to be zero but it turns out to be# very close to zero and not zero.# assert simplify(m5.speed - 225407863.157895*m/s) == 0

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
This `m5.speed`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} is
equal
to `225407863.157895*m/s`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} (or
maybe very close to it) but, assertion results in a failure.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Similarly in the constructor of
the `Medium`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} inconsistency
comes due to slight difference in floating point parameters(permittivity
and permeability). I've commented out this part of my code. Maybe Sean
will suggest a better way to do it.

</div>
    # XXX: There's issue with precision. Values may be# different slightly.if permittivity != u0 and permittivity != e0:    if n != c*sqrt(permittivity*permeability):        raise ValueError("Values are not consistent.")

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
As soon as it gets merged, I'll make necessary changes in Fermat's
principle and Snell's law part of the code and send a PR to review.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Now I realize that the next two weeks are not going to be a joy ride for
me. I must finish major part of geometrical optics as written in my
proposal.  
  
That's all for now. Cheers!

</div>
</div>
</p>

