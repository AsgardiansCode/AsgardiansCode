Index No:      18/ENG/118
-------------------------

Question 1


#include<iostream>
using namespace std;

int  main() {
for (int i = 0; i < 5; i++) {
for (int j = 0; j <= i; j++) {
cout << 5 - i;
}
for (int k = 0; k < 5 - i; k++) {
cout << i + 1;
}
cout << endl;
}
return 0;
}



Question 2
=========

#include <iostream>
#include<ctime>

using namespace std;
int main() {

	srand(time(0));

	int numbers[10000];
	int catogary[10] = { 0 };

	// generate
	for (int i = 0; i < 10000; i++) 
		numbers[i] = rand() % 100;
	
	// catogarize
	for (int j = 0; j < 10000; j++) 
		catogary[numbers[j] % 10]++;
	
	// display
	for (int i = 0; i < 10; i++) 
		cout << i << " :   " << catogary[i] << endl;
	
	return 0;
}



Question 3
=========

A)
#include <iostream>
using namespace std;

// fibonacci sequence
int func(int n) {
if (n <= 1)
return n;
else
return func(n - 1) + func(n - 2);
}


int main() {
int no;
cout << "Enter Element : ";
cin >> no;
cout << func(++no);

	return 0;
}

B)
#include <iostream>
using namespace std;

int func(int no,int i) {
if (no == 1)
return i;
else
return func(--no, i * i);
}

int main() {
int no;
cout << "Enter Element : ";
cin >> no;
cout << func(no,3);

	return 0;
}

C)
#include <iostream>
using namespace std;

int func(int no,int a, int b, int c) {
if (no == 1)
return a;
else
func(no - 1, c*pow(b, 2), ++b, c*-1);
}

int main() {
int no;
cout << "Enter Element : ";
cin >> no;
cout << func(no,-1,1,1);

	return 0;
}


Question 4
=========

#include <iostream>
using namespace std;

struct circle {
int x;
int y;
float radius;
};

void check(circle c1, circle c2) {
// distance between two centers
float centerDist = pow(pow((c1.x - c2.x), 2) + pow((c1.y - c2.y), 2),0.5);
// sum of two radius
float radiusSum = c1.radius + c2.radius;

    if (centerDist < c1.radius || centerDist < c2.radius) {
        if (c1.radius < c2.radius && (centerDist + c1.radius) < c2.radius)
            cout << "One circle is totally located inside the other circle ";
        else if (c1.radius > c2.radius && (centerDist + c2.radius) < c1.radius) 
            cout << "One circle is totally located inside the other circle ";

    }
    else if (radiusSum == centerDist) 
        cout << "Two circles touching";
    else if (radiusSum > centerDist) 
        cout << "Two circles intersect";
    else if (radiusSum < centerDist)
        cout << "Two circles are clearly separated and standing outside each other.";
}

int main() {

    circle c1;
    circle c2;

    cout << "Enter x cordinate : ";
    cin >> c1.x;
    cout << "Enter y cordinate : ";
    cin >> c1.y;
    cout << "Enter radius : ";
    cin >> c1.radius;

    cout << "Enter x cordinate : ";
    cin >> c2.x;
    cout << "Enter y cordinate : ";
    cin >> c2.y;
    cout << "Enter radius : ";
    cin >> c2.radius;

    check(c1, c2);


	return 0;
}




Question 5
=========

#include <iostream>
using namespace std;
int main() {

    int carbon, hydrogen;
    int multiply[4];

    cout << "Enter Carbon atoms : ";
    cin >> carbon ;
    cout << "Enter Hydrogen atoms : ";
    cin >> hydrogen;

    // multipling factors
    multiply[0] = 1;
    multiply[1] = hydrogen / 2 + carbon * 2;
    multiply[2] = hydrogen / 2;
    multiply[3] = carbon;

    int oxygenAmount = hydrogen / 2 + carbon * 2;

    
    if (multiply[1] % 2 == 0)
        multiply[1] = multiply[1] / 2;
    // multiply by 2 for not to have decimal places
    else {
        for (int i = 0; i < 4; i++)
            multiply[i] = multiply[i] * 2;
        multiply[1] = oxygenAmount;
    }

    cout << "C" << carbon << "H" << hydrogen << " -> " << multiply[0] << endl;
    cout << "O2  -> " << multiply[1] << endl;
    cout << "H20 -> " << multiply[2] << endl;
    cout << "CO2 -> " << multiply[3] << endl;

	return 0;
}




Question 6
=========

#include <iostream>
#include<string.h>
#include<stdio.h>

using namespace std;

int mapNumber(char rNo) {

    int no;

    switch (rNo) {
        // map roman with decimal
        case 'I': no = 1; break;
        case 'i': no = 1; break;
        case 'V': no = 5; break;
        case 'v': no = 5; break;
        case 'X': no = 10; break;
        case 'x': no = 10; break;
        case 'L': no = 50; break;
        case 'l': no = 50; break;
        case 'C': no = 100; break;
        case 'c': no = 100; break;
        default: no = -1;
    }

    return no;
}

int main() {

    int number = 0;
    int i = 0; 
    char rNo[100];
    

    cout<<"Enter Roman Number (between 1-100) : ";
    cin>>rNo;

    // while the end of the input
    while (rNo[i]!= '\0') {
        // check for invalid number
        if (mapNumber(rNo[i]) == -1) {
            cout << "Invalid Roman Number";
            return 0;
        }

        if (((strlen(rNo) - i) > 2) && (mapNumber(rNo[i]) < mapNumber(rNo[i + 2]))) {
            cout << "Invalid Roman Number";
            return 0;
        }

        // check for addition or substraction
        if (mapNumber(rNo[i]) >= mapNumber(rNo[i + 1]))
            number = number + mapNumber(rNo[i]);
        else {
            number = number + (mapNumber(rNo[i + 1]) - mapNumber(rNo[i]));
            i++;
        }
        i++;
    }

    cout<<"Decimal no is : "<<number;

    return 0;

}





Question 7
=========

#include <iostream>
#include<ctime>
using namespace std;

int students[40] = { 0 };

void display() {
for (int i = 0; i < 40; i++)
cout << students[i];
}

void tell(int arr[], int num) {
int count = 0;
// count didnt received
for (int i = 0; i < 40; i++) {
if (arr[i] == 0)
count++;
}
// pass message to a student except himself
if (count > 0) {
int i = rand() % 40;
while (arr[i] != 0)
i = rand() % 40;
arr[i] = num;
}
}

int main() {
srand(time(0));
int num = 1;
int count = 40;

    cout << num << " ";
    display();

    // teacher select
    students[rand() % 40] = 1;

    cout << " ";
    display();
    
    num++;
    while (count > 0) {
        count = 0;
        cout << endl;
        cout << num << " ";
        display();

        for (int i = 0; i < 40; i++) {
            if (students[i] == 0)
                count++;
            else if (students[i] <= num - 1) {
                // pass to two students
                tell(students, num);
                tell(students, num);
            }
        }
        cout << " ";
        display();
        count = 0;
        for (int i = 0; i < 40; i++) 
            if (students[i] == 0)
                count++;
        num++;
    }

	return 0;
}






Question 8
=========
#include <iostream>
#include <stdlib.h>
#include<time.h>

using namespace std;

int totDeath = 0;


void addNew(int arr[], int pop, int a)
{
int count = 0;
int onetoOthers = (rand() % 7) + 2;


    if (a == 1) {
        for (int i = 0; i < onetoOthers; i++) {
            count = 0;
            for (int x = 0; x < pop; x++)
                if (arr[x] == 0)
                    count++;
        }
    }
    if (a == 2) {
        for (int i = 0; i < onetoOthers; i++) {
            count = 0;
            for (int x = 0; x < pop; x++)
                if (arr[x] == 0)
                    count++;

            if (count > 0) {
                int i = rand() % pop;
                while (arr[i] != 0)
                    i = rand() % pop;

                int chk = rand() % 10;
                if (chk < 1)
                    arr[i] = 1;
            }
        }

    }

}


int main() {
int pop = 110000;
int days;
int homeQuarntine = 0;
cout << "Enter days to simulate : ";
cin >> days;

    int a;
    cout << "\n\t1.One person use masks\n\t2.Both person use masks\n\t3.Both person not use masks : ";
    cin >> a;

    if (a > 0 && a < 4){

        int patients[110000];
        for (int x = 0; x < pop; x++)
            patients[x] = 0;
        srand(time(0));

        int count = 40;
        patients[rand() % pop] = 1;

        int num = 2;
        while (num < days + 2) {
            count = 0;

            int moer = 0;
            for (int x = 0; x < pop; x++) {
                if (patients[x] >= 2) {
                    moer++;
                    if (moer == 10) {
                        patients[x] = -1;
                        moer = 0;
                        totDeath++;
                    }
                }
            }

            int patient = 0;
            cout << "day " << num - 1 << "--> \n";
            for (int x = 0; x < pop; x++)
                if (patients[x] > 0)
                    patient++;
            cout << "Remaining moer : " << patient << endl;



            int newPatient = 0;
            for (int x = 0; x < pop; x++)
                if (patients[x] == 1)
                    newPatient++;
            cout << "New moer : " << newPatient << endl;
            cout << "Deaths : " << totDeath << endl;

            int patient_hospital = 0;
            for (int x = 0; x < pop; x++)
                if (patients[x] > 7 && patients[x] < 15)
                    patient_hospital++;
            cout << "Quarantine in a Hospital : " << patient_hospital << endl;


            int x = 0;
            for (x = 0; x < patient;) {
                int i = (rand() % 3) + 2;//family members 2-5
                homeQuarntine++;
                x = x + i;
            }
            cout << "Quarantine in a Home : " << homeQuarntine << endl;

            count = 0;
            for (int x = 0; x < pop; x++) {
                if (patients[x] == 0)
                    count++;
            }
            num++;
        }
    }
    else
        cout << "\n\Invalid Inputs";

    return 0;
}


