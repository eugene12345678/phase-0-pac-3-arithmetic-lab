function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}



