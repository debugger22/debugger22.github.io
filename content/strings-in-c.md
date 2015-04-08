Title: Strings in C
Date: 2013-03-04 23:53
Author: Sudhanshu Mishra (noreply@blogger.com)
Slug: strings-in-c

<div dir="ltr" style="text-align: left;">
### **Yes, there is a way to handle strings without any loop in C.** {style="text-align: left;"}

  
Playing with arrays is the most enjoying work which programmers do.
These arrays are the most powerful tool which has been invented for
programming.  
  
Modern languages handle these arrays pretty well but if we talk about
arrays in C, it would be a bit tricky.  
Just because C lacks in handling strings, arrays prove to be more
important in C.  
  
Strings are treated to be a collection of characters in C. We can store
a bunch of characters in an array and display them altogether to
represent a string.  
  
To do this follow these steps:  
  
<span style="color: blue;">char</span>
<span style="color: #b45f06;">myString[100]</span>;  
    This defines a character array of size 100.  
    Size 100 means it can store 100 characters in it or simply a string
of length 100.  
  
Now we have to take input of the string from user. we'll use **fgets()**
function to take input.  
  
<span style="color: blue;">fgets</span><span style="color: #b45f06;">(myString)</span>;  
  
    **Note:** fgets() can take input of infinite length.  
  
To print the string taken from the user we can either use **printf()**
or **puts()**.  
  
<span style="color: blue;">printf</span><span style="color: #b45f06;">("%s",myString)</span>;  
  
or just  
<span style="color: blue;">  
</span><span style="color: blue;">puts</span><span style="color: #b45f06;">(myString);</span>  
  
  
Example:  
  
INPUT: <span style="color: #38761d;">So I am breaking the habit
tonight.</span>  
  
OUTPUT : <span style="color: #38761d;">So I am breaking the habit
tonight.</span>

</div>
</p>

