// Challenge 1: Función Fibonacci O(n)
function fibonacci(n) {
    let a = 0, b = 1, c, i;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log('Challenge 1:')
console.log(fibonacci(10)); // should print 55
console.log(fibonacci(20)); // should print 6765
console.log(fibonacci(30)); // should print 832040


// Challenge 2: Función Fibonacci recursiva
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log('Challenge 2:')
console.log(fibonacciRecursive(10)); // should print 55
console.log(fibonacciRecursive(20)); // should print 6765
console.log(fibonacciRecursive(30)); // should print 832040


// Challenge 3: Función Fibonacci iterativa
function fibonacciIterative(n) {
    let a = 0, b = 1, c = 0;
    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
}
console.log('Challenge 3:')
console.log(fibonacciIterative(10)); // should print 55
console.log(fibonacciIterative(20)); // should print 6765
console.log(fibonacciIterative(30)); // should print 832040


// Challenge 4: Función Fibonacci utilizando closures
let fibonacciClosure = (() => {
    let a = 0, b = 1;
    return () => {
        let c = a;
        a = b;
        b += c;
        return c;
    }
})();
console.log('Challenge 4:')
console.log(fibonacciClosure(10)); // should print 55
console.log(fibonacciClosure(20)); // should print 6765
console.log(fibonacciClosure(30)); // should print 832040

function eneacci(n, D, A) {
    if (n <= D) {
        return A[n];
    }
    let sum = 0;
    for (let i = 1; i <= D; i++) {
        sum += eneacci(n - i, D, A);
    }
    return sum;
}
console.log('Challenge 5:')
console.log(eneacci(4, 3, [0, 1, 1, 2])); // should print 6
console.log(eneacci(5, 4, [1, 1, 2, 3, 5])); // should print 11
console.log(eneacci(6, 2, [0, 1, 1])); // should print 3

