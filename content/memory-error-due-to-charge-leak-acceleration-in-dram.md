Title: Memory Error due to charge leak acceleration in DRAM
Date: 2015-01-16 19:36
Author: Sudhanshu Mishra (noreply@blogger.com)
Tags: Electronics
Slug: memory-error-due-to-charge-leak-acceleration-in-dram

<div dir="ltr" style="text-align: left;">
DRAM comprises a two-dimensional array of DRAM cells, each of which
consists of a capacitor and an access-transistor. Depending on whether
its capacitor is fully charged or fully discharged, a cell is in either
the charged state or the discharged state, respectively. These two
states are used to represent a binary data value.  
Dense packaging in DRAM leads to anomalies while performing continuous
read operations from same memory address which involves opening and
closing of the wordline. This anomaly will not be evident if the data is
read from an address after opening a wordline and not closing it. When
there are many activations to the same row, they force the wordline to
toggle on and off repeatedly. Such voltage fluctuations on a row’s
wordline have a disturbance effect on nearby rows, inducing some of
their cells to leak charge at an accelerated rate. If such a cell loses
too much charge before it is restored to its original value, it
experiences a disturbance error.This disturbance results mostly in
flipped bit value.Here's the assembly code which may induce errors when
executed on Intel/AMD machines.  
  
loop:  
    mov X, %eax  ; Read from address X and save in register including
cache  
    mov Y, %ebx  ; values in registers and cache  
    clflush (X)  ; Clear data from cache  
    clflush (Y)  
    mfence       ; Make sure that data is fully flushed  
    jmp loop  
  
On the other hand, the following code will not induce errors because it
does not force continuous toggling of the wordline.  
  
loop:  
    mov X, %eax  ; Read from address X and save in register including
cache  
    clflush (X)  ; Clear data from cache  
    mfence       ; Make sure that data is fully flushed  
    jmp loop  
  
These disturbances violate two invariants that memory should provide  
  

-   A read access should not modify data at any address
-   A write access should modify data only at the address being written
    to

  
This makes systems, using DRAM, vulnerable to data corruption.  
  
  
References:  
.. [1] Yoongu Kim, Ross Daly, Jeremie Kim, Chris Fallin, Ji Hye Lee,
Donghyuk Lee, Chris Wilkerson, Konrad Lai, Onur Mutlu et al. Flipping
Bits in Memory Without Accessing Them: An Experimental Study of DRAM
Disturbance Errors, 2014.  
.. [2] A. J. van de Goor and I. Schanstra. Address and Data Scrambling:
Causes and Impact on Memory Tests. In DELTA, 2002  

<div>
  

</div>
</div>
</p>

