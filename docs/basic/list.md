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

