Object is like a dictionary in Python

It has name and value pairs. Name is a string and value is any Javascript value.

Create empty object:

    var obj = new Object();

Below is called literal object, and it is more convenient.

    var obj = {};

This syntax is also the core of JSON format and should be preferred at all times.

    var obj = {
        name: 'John',
        age: 30,
        location: {
            address: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };

    console.log(obj.name); // John
    console.log(obj.location.city); // New York
    console.log(obj['location']['city']); // New York

The following example creates an object prototype(Person) and an instance of that prototype(you).

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    var you = new Person('John', 30);

    console.log(you.name); // John
    console.log(you.age); // 30

## Array

    var arr = new Array();
    var arr = new Array(1, 2, 3);
    var arr = [1, 2, 3];

    var a = ['dog', 'cat', 'hen'];
    a.length; // 3

Iterate over array:

    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }

    for (const currentValue of a) {
        // Do something with currentValue
    }


## Functinos

    function add(x, y) {
        var total = x + y;
        return total;
    }

    add() ; // NaN
    add(1) ; // NaN
    add(1, 2) ; // 3
    add(1, 2, 3) ; // 3     But only 2 arguments are accepted.

Function have access to additional variable called arguments. It is object that contains all arguments passed to function.

    function add() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        console.log(arguments)
        return sum;
    }

    [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }    
    add(2, 3, 4, 5); // 14

## Custom Object (Classes)

JavaScript is a prototype-based language. It uses function as objects.

    function makePerson(name, age) {
        return {
            name: name,
            age: age
        };
    }

    function showPerson(person) {
        console.log(person.name + ' is ' + person.age + ' years old.');
    }

    var s = makePerson('Simon', 'Willison');
    console.log(s.name); // Simon
    console.log(showPerson(s)); // Simon is Willison years old.

This make lots of function so we can. So we need to use this keyword.
this refers to current object.
If this is called using dot notation on object, then this refers to that object.


    function Person(name, age) {
        this.name = name;
        this.age = age;

        this.showPerson = function() {
            console.log(this.name + ' is ' + this.age + ' years old.');
        }
    }

    var s = new Person('Simon', 'Willison');
    s.showPerson(); // Simon is Willison years old.

new create brand new empty object. and then calls the function specified, with this set to that new object.



