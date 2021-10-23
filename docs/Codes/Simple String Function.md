---
sidebar_position: 2
---


## Text Wrap

ABCDEFGHIJKLIMNOQRSTUVWXYZ     
4

````py
=> ['ABCD', 'EFGH', 'IJKL', 'IMNO', 'QRST', 'UVWX', 'YZ'] 
=>  ABCD
    EFGH
    IJKL
    IMNO
    QRST
    UVWX
    YZ
````
 
<details>

````py
=> ['ABCD', 'EFGH', 'IJKL', 'IMNO', 'QRST', 'UVWX', 'YZ'] 
=>  ABCD
    EFGH
    IJKL
    IMNO
    QRST
    UVWX
    YZ

# Code
def changeChar(str1, char, replacewith):
    b = ''
    for x in str1:
        if x != char:
            b += x
        else:
            b += replacewith
    return b


def wrap(string, max_width):
    a = []
    for i in range(0, len(string), max_width):
        a.append(string[i:i + max_width])
        b = str(a)
    print(b)
    
    d = changeChar(b, "[", "")
    d = changeChar(d, ",", "\n")
    d = changeChar(d, "]", "")
    d = changeChar(d, "'", "")
    d = changeChar(d, " ", "")

    return d


if __name__ == '__main__':
    string, max_width = input(), int(input())
    result = wrap(string, max_width)
    print(result)

````

</details>
