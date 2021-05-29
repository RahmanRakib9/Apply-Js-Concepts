// Create a Fibonacci Series using a for loop
function getFibonacci(n) {
    var fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}


// Fibonacci Element in a Recursive Way
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


// Create Fibonacci series in a recursive way
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





