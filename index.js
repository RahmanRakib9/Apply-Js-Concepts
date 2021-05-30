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