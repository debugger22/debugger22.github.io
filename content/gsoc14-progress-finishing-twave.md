Title: GSoC'14 Progress: Finishing TWave
Date: 2014-06-02 02:02
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: gsoc, physics, sympy
Slug: gsoc14-progress-finishing-twave

<div dir="ltr" style="text-align: left;">
<div style="margin-bottom: 9px;">
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
This last week most of the coding I did was only related to transverse
wave. It has already been merged into the master.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
<https://github.com/sympy/sympy/pull/7518>

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Here is the class structure of
the `TWave`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}:

</div>
    Inherits========ExprArguments=========amplitude : Sympifyable    Amplitude of the wave.frequency : Sympifyable    Frequency of the wave.phase : Sympifyable    Phase angle of the wave.time_period : Sympifyable    Time period of the wave.n : Sympifyable    Refractive index of the medium.Raises=======ValueError : When niether frequency nor time period is provided.    or they are not consistent.TypeError : When anyting other than TWave objects is added.Methods=======frequencytime_periodwavelengthamplitudephasespeedangular_velocitywavenumber

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
Till now it has been very easy to implement this but these days I'm
stuck on writing functions to rewrite an expression using different
functions. This is supposed to work like this as I feel from the code:

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
When you
call `expr.rewrite('sin')`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"},
the following code written
in `sympy.core.basic`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"}should
make a call to
function `_eval_rewrite_as_sin(self, *args)`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} defined
in the object class.

</div>
    if not args:    return selfelse:    pattern = args[:-1]    if isinstance(args[-1], string_types):        rule = '_eval_rewrite_as_' + args[-1]    else:        rule = '_eval_rewrite_as_' + args[-1].__name__    if not pattern:        return self._eval_rewrite(None, rule, **hints)    else:        if iterable(pattern[0]):            pattern = pattern[0]        pattern = [ p.__class__ for p in pattern if self.has(p) ]        if pattern:            return self._eval_rewrite(tuple(pattern), rule, **hints)        else:            return self

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
But this is not the case with me. It always ends up
calling `__str__`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} method.
This is the PR for the same.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
<https://github.com/sympy/sympy/pull/7546>

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
By the way, I had never used any debugger for Python before and now I
feel it makes your life much easier. [Winpdb](http://winpdb.org/) is a
great Python debugger which is platform independent.

</div>
<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
I've also been working on SHM and will submit a PR soon for that.
Besides my project, I also closed two issues this week related to
printing
in `sympy.logic`{style="background-color: #f7f7f9; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(225, 225, 232); color: #dd1144; font-family: Consolas, 'Liberation Mono', Courier, monospace !important; font-size: 12px; padding: 3px 4px;"} and
helped to review few PRs.

</div>
-   <https://github.com/sympy/sympy/issues/7179>
-   <https://github.com/sympy/sympy/issues/7180>
-   PR: <https://github.com/sympy/sympy/pull/7541>

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
We have a public channel(<https://gitter.im/sympy/sympy/optics>) to
discuss about my project. You are welcome to join us, we would be more
than happy to get feedback about the work. It'll help us refine it and
cover a wider range of use cases.

</div>
#### Weeklog {#weeklog style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; margin: 0px;"}

###### MERGED {#merged style="color: #999999; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; line-height: 18px; margin: 0px;"}

-   Add tests for pretty printer
-   Remove unnecessary if block
-   Add IPython Notebook Checkpoints to .gitignore
-   Remove double wrapping with u
-   Add tests for printing Equivalent. fixes \#7180
-   Wrap unicode chars with u and fix a bug in latex printer
-   Fix a typo in manipulation.rst [skip ci]
-   Make equivalence symbol same for pretty printer and \* latex printer
    and change not equivalent symbol to u+2262 [skip ci]
-   Fix latex printing for Not(Equivalent) and Not(Implies).
-   Fix pretty printing for Not(Equivalent) and Not(Implies). fixes
    \#7179

###### PENDING {#pending style="color: #999999; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; line-height: 18px; margin: 0px;"}

-   Change arg to \*args [skip ci]
-   Add rewrite expression methods [skip ci]
-   Add wavenumber property

<div style="color: #444444; font-family: Arvo, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 18px; margin-bottom: 9px;">
This is all for now. Cheers!

</div>
</div>
</div>
</p>

