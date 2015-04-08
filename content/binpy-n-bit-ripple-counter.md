Title: BinPy: N Bit Ripple Counter
Date: 2014-03-13 17:36
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: BinPy, Circuit Design, Electronics
Slug: binpy-n-bit-ripple-counter

<div dir="ltr" style="text-align: left;">
<div dir="ltr" style="text-align: left;">
<div class="separator" style="clear: both; text-align: center;">
[![](http://binpy.github.io/images/logo.png)](http://binpy.github.io/images/logo.png)

</div>
  
[BinPy](http://binpy.github.io) is almost ready to create things. This
post focuses on building a ripple counter using it.  
  
**Theory**  
  
A ripple counter is an asynchronous counter where only the first
flip-flop is clocked by an external clock. All subsequent flip-flops are
clocked by the output of the preceding flip-flop. Asynchronous counters
are also called ripple-counters because of the way the clock pulse
ripples it way through the flip-flops.  
  
The MOD of the ripple counter or asynchronous counter is 2n if n
flip-flops are used. For a 4-bit counter, the range of the count is 0000
to 1111 (24-1). A counter may count up or count down or count up and
down depending on the input control. The count sequence usually repeats
itself. When counting up, the count sequence goes from 0000, 0001, 0010,
... 1110 , 1111 , 0000, 0001, ... etc. When counting down the count
sequence goes in the opposite manner: 1111, 1110, ... 0010, 0001, 0000,
1111, 1110, ... etc.  
  
**Implementation**  
  
The following code is using BinPy's internal NBitRippleCounter.  
  
Following is the output of the above code.  
  
  
  
**Under the hood**  
  
When we are initializing the counter with specified number of bits, it
is actually creating those many T Flip Flops and connecting them in
order to get the result. The actual implementation is shown in the
following code.  
  
  
Try connecting some wires with code, it's fun!  
If you have some feedback or questions regarding this post, please add
comments. Cheers!   

</div>
</div>
</p>

