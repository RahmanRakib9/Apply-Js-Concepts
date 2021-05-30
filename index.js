//1.1: Calculate Factorial of a number using for loop
function getFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = getFactorial(5);
console.log(result);


//1.2 Calculate Factorial of a number using a while loop
function factorial(num) {
    var i = 1;
    var fac = 1;
    while (i <= num) {
        fac = fac * i;
        i++;
    }
    return fac;
}


//2: Calculate Factorial in a Recursive function
function getRecursiveFac(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * getRecursiveFac(n - 1);
    }
}


//3: Create a Fibonacci Series using a for loop
function getFibonacci(n) {
    var fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}


//4: Fibonacci Element in a Recursive Way
function getFibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    }
}


//5: Create Fibonacci series in a recursive way
function getFiboSeries(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var fibo = getFiboSeries(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
    }
    return fibo;
}


//6: Find max of two values, find max of three values
var business = n;
var minister = n;
var doctor = n;

if (business > minister) {
    if (business > doctor) {
        console.log('businee is bigger');
    }
    else {
        console.log('doctor is bigger');
    }
}
else {
    if (minister > doctor) {
        console.log('minister is bigger');
    }
    else {
        console.log('doctor is bigger');
    }
}
// OR
var res = Math.max(business, minister, doctor);
console.log(res);


//7:Remove duplicate item from an array
function removeDuplicate(numbers){
    var unique=[];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        var index=unique.indexOf(element);
        if(index==-1){
            unique.push(element);
        }   
    }
    return unique;
}


//8: Count the number of words in a string
var speech = "text";
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var element = speech[i];
    if (element == ' ' && speech[i - 1] != ' ') {
        count++;
    }
}
count++;


//9:Sum of all numbers in an array
function getSum(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        const element = num[i];
        sum = sum + element;
    }
    return sum;
}


//10: Reverse a string
function reverseString(string) {
    var reverse = '';
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        reverse = character + reverse;
    }
    return reverse;
}


//11: Swap variable, swap without temp
var a=7;
var b=5;
console.log('before swap a=',a,'b=',b);
var temp=b;
var b=a;
var a=temp;
console.log('after swap a=',a,'b=',b);

var p=10;
var q=20;
console.log('before swap a=',p,'b=',q);
var [p,q]=[q,p];
console.log('after swap a=',p,'b=',q);

//12: create a lotery using random number
for (var i = 0; i < 10; i++) {
    var randomNum = Math.random() * 6;
    var outPut = Math.round(randomNum);
    console.log(outPut);
}


//13: Find out the highest marks in your class on math
function getBigger(marks) {
    var max = 0;
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
    var highestMarks = [55, 77, 88, 95, 87, 83];
    console.log(getBigger(highestMarks));


//14.1: Unit Convert Inch to Feet use variable and function
function inchToFeet(inch){
    var feet=inch/12;
    return feet;
}

//14.2 Unit Convert kilometer to meter use variable and function
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}


//15: check whether a year is a Leap Year or not
function isLeapYear(year) {
    var remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}

//16: Check whether a number is a Prime Number or not
function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a Prime Number';
        }
    }
    return 'is a Prime Number';
}



















