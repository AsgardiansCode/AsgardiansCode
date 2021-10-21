---
sidebar_position: 3
---


`list1 = ['tim', 'nirmal']`

## Print

<details>
<summary> ['tim', 'nirmal'] </summary>

````
print(list1)
````

</details>

<details>
<summary> tim, nirmal </summary>

````
print( ", ".join(list1) )
````

</details>

## Join List

````.python
a = ( ", ".join(list1) )
````

## List Comprehension

- Output expression,
- Input sequence,
- A variable representing a member of the input sequence and
- An optional predicate part.

<details>
<summary> 

````
lst = [x ** 2 for x in range(1, 11) if x % 2 == 1]
```` 

</summary>

    lst2 = []
    for x in range(1, 11):
        if x % 2 == 1:
            lst2.append(x ** 2)

    print(lst)
    print(lst2)

[1, 9, 25, 49, 81]

[1, 9, 25, 49, 81]

</details>

<details>
<summary> Power of 2 => [2, 4, 8, 16] </summary>

````
[2 ** x for x in range(1, 4)] 
````

</details>

<details>
<summary> Primes / No Primes </summary>

````
    noprimes = [j for i in range(2, 8) for j in range(i * 2, 50, i)]
    primes = [x for x in range(2, 50) if x not in noprimes]

    ls = set(noprimes) # Remove duplicates
    noprimes = list(ls)
    
    print(primes)
    print(noprimes)
````

</details>

<details>
<summary> Lowering the Characters </summary>

````
print ([x.lower() for x in ["A","B","C"]] )
````

</details>

<details>
<summary> Extract Numbers </summary>

````
string = "my phone number is : 11122 !!"

print("\nExtracted digits")
numbers = [x for x in string if x.isdigit()]
print (numbers)
````

</details>

<details>
<summary> A list of list for multiplication table </summary>

````
    a = 5
    table = [[a, b, a * b] for b in range(1, 11)]
    
    print("\nMultiplication Table")
    for i in table:
        print (i) 
````

</details>

## Slicing

````py
[start : stop : steps]
````


<details>
<summary> Slicing examples with Revising list </summary>

````
lst =list(range(1, 11))
````
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
````
lst1_5 = lst[1 : 5]
````
[2, 3, 4, 5]
````
lst5_8 = lst[5 : 8]
````
[6, 7, 8]
````
lst1_ = lst[1 : ]
````
[2, 3, 4, 5, 6, 7, 8, 9, 10]
````
lst_5 = lst[: 5]
````
[1, 2, 3, 4, 5]
````
lst1_8_2 = lst[1 : 8 : 2]
````
[2, 4, 6, 8]
````
lst_rev = lst[ : : -1]
````
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
````
lst_rev_9_5_2 = lst[9 : 4 : -2]
````
[10, 8, 6]
</details>


# Filtering

https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/


````py
import functools
````

````
lst = filter(lambda x : x % 2 == 1, range(1, 20))
````
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
   
````
lst = filter(lambda x : x % 5 == 0, 
      [x ** 2 for x in range(1, 11) if x % 2 == 1])
````
[25]
   
````
lst = filter((lambda x: x < 0), range(-5,5))
````
[-5, -4, -3, -2, -1]
   
````
print (functools.reduce(lambda a,b: a if (a > b) else b, [7, 12, 45, 100, 15]))
````
100



## Nested Lists

Sort list according to the second item in list

<details>

````py
# Python code to sort the lists using the second element of sublists
# Inplace way to sort, use of third variable
def Sort(sub_li):
	l = len(sub_li)
	for i in range(0, l):
		for j in range(0, l-i-1):
			if (sub_li[j][1] > sub_li[j + 1][1]):
				tempo = sub_li[j]
				sub_li[j]= sub_li[j + 1]
				sub_li[j + 1]= tempo
	return sub_li

# Driver Code
sub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]
print(Sort(sub_li))

````

````py
# Python code to sort the tuples using second element
# of sublist Inplace way to sort using sort()
def Sort(sub_li):

	# reverse = None (Sorts in Ascending order)
	# key is set to sort using second element of
	# sublist lambda has been used
	sub_li.sort(key = lambda x: x[1])
	return sub_li

# Driver Code
sub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]
print(Sort(sub_li))

````

````py
# Python code to sort the tuples using second element 
# of sublist Function to sort using sorted()
def Sort(sub_li):
  
    # reverse = None (Sorts in Ascending order)
    # key is set to sort using second element of 
    # sublist lambda has been used
    return(sorted(sub_li, key = lambda x: x[1]))    
  
# Driver Code
sub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]
print(Sort(sub_li))
````
</details>



