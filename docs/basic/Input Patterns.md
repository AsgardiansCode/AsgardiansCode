
5

2 3 6 6 5

`````py
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

    b = set(arr)
    c = list(b)
    d = sorted(c)

    print(d[-2])
`````
