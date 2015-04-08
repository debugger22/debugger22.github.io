Title: Managing commits and working with git diff
Date: 2014-04-14 13:48
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: git, github
Slug: managing-commits-and-working-with-git-diff

<div dir="ltr" style="text-align: left;">
<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-bottom: 15px;">
**tl;dr**: This post assumes that you have basic knowledge of git. It's
just about managing commits and minimizing their numbers by having only
meaningful ones.

</div>
<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-bottom: 15px; margin-top: 15px;">
I've been working on a PR for around thirteen days which aims to fix a
bug related to mathematical assumptions for inverse trigonometric
functions in sympy. In order to do that I kept on committing changes
randomly and number of commits went on increasing. As of now sympy has
two types of mathematical assumptions we call it **new** and **old** so
genuinely there should have been only two commits referring changes to
respective types.

</div>
<div dir="ltr" style="text-align: left;">
<div>
  

</div>
<div>
<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-bottom: 15px; margin-top: 15px;">
I had two
branches `master`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} and `arctrigo`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
I followed following steps to separate the changes done in both the
assumptions:

</div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    First pull the changes from the remote to
    your `master`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} and
    merge it to your feature branch. In my case it
    was `arctrigo`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Make sure that you are no your feature branch and not
    on `master`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Create a diff with respect
    to `master`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}. `git diff master > diff`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}\`
    (latter diff is just the filename, it could be anything)
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Create a new temporary branch
    of `master`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}. `git checkout master; git branch -b tmp`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Apply the patch
    . `git apply diff`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Use `git add -p`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} and
    you'll be prompted change by change as to whether that change should
    be staged for committal.
    Say `y`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} to
    all changes involving one part
    and `n`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} to
    the others.
    </div>

<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-bottom: 15px; margin-top: 15px;">
Here git has staged a set of changes for your next commit command.

</div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Commit the changes for the first part, for which you
    said `y`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} in
    the prompts,
    by `git commit -m "your message for the first part"`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    And then
    do `git commit -am "your message for the other part"`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} for
    which you
    said `n`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} in
    the prompts.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Delete your feature branch. In my case it
    was `arctrigo`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} with `git branch -D arctrigo`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Create the same feature branch
    from `tmp`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"} and
    switch to
    it. `git branch tmp; git checkout tmp`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>
-   <div style="margin-bottom: 15px; margin-top: 15px;">
    Update your PR
    with `git push -f <your_remote_name> <your_branch_name>`{style="background-color: #f8f8f8; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid rgb(221, 221, 221); display: inline-block; font-family: Consolas, 'Liberation Mono', Courier, monospace; font-size: 12px; line-height: 1.3; margin: 0px; overflow: auto; padding: 0px; vertical-align: middle; white-space: nowrap;"}.
    </div>

<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-bottom: 15px; margin-top: 15px;">
Now navigate to your PR and you'll see two clean commits. I just learned
these things from [Christopher](https://github.com/smichr) and decided
to write a blog post about it.

</div>
<div style="background-color: white; color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 15px; line-height: 25.5px; margin-top: 15px;">
Cheers!

</div>
</div>
</div>
</div>
</p>

