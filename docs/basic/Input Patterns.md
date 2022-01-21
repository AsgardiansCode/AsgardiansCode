
5    
2 3 6 6 5

`````
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

    b = set(arr)
    c = list(b)
    d = sorted(c)

    print(d[-2])
`````

ABCDEFGHIJKLIMNOQRSTUVWXYZ     
4

````py
if __name__ == '__main__':
string, max_width = input(), int(input())
````

3   
Harry   
37.21   
Berry   
37.21   
Tina   
37.2   

````py
def printdIS(name, scores):
    print(name)
    print(scores)


if __name__ == '__main__':
    for _ in range(int(input())):
        name = input()
        score = float(input())
        printdIS(name, score)

````


3   
Krishna 67 68 69   
Arjun 70 98 63   
Malika 52 56 60   

=> {'Krishna': [67.0, 68.0, 69.0], 'Arjun': [70.0, 98.0, 63.0], 'Malika': [52.0, 56.0, 60.0]}

````py
if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
````

2    
pop   
remove 9     

=> list [['pop', []], ['remove', [9]]]

````py
if __name__ == '__main__':
    n = int(input())
    s = set(map(int, input().split()))
    N = int(input())
    student_marks = []
    for _ in range(N):
        b = []
        name, *line = input().split()
        # scores = list(map(int, line))

        x = list(map(int,line))

        print(x)

        b.append(name)
        b.append(list(map(int, line)))

        student_marks.append(b)
        # student_marks[name] = scores

    print("Hi")
    print(student_marks)
    print(student_marks[1][1][0])
    print(type(student_marks[1][1][0]))
````

if,
pop
remove 9
insert 1 2

comes up then change,
````py
    s = []
    for i in range(N):
        if student_marks[i][0] == "pop":
            s.pop()
        elif student_marks[i][0] == "remove":
            s.remove(student_marks[i][1][0])
        elif student_marks[i][0] == "insert":
            s.insert(student_marks[i][1][0],student_marks[i][1][1])
````
