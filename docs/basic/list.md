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

power_of_2 = [2 ** x for x in range(1, 9)]   -> [2, 4, 8, 16, 32, 64, 128, 256]

noprimes = [j for i in range(2, 8) for j in range(i * 2, 50, i)]
primes = [x for x in range(2, 50) if x not in noprimes]

    ls = set(noprimes) # Remove duplicates
    noprimes = list(ls)
    
    print(primes)
    print(noprimes)