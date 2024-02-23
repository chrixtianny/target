const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    };

const verify_fibonacci = (n) => {
    if (n < 0) return false;
    let i = 0;
    while (fibonacci(i) <= n) {
        if (fibonacci(i) === n) return true;
        i++;
        }
    return false;
    }

const isFibonnaci = (num) => {
    if (verify_fibonacci(num)) {
        console.log(num + " é um número de Fibonacci");
    } else {
        console.log(num + " não é um número de Fibonacci");
    }
}


isFibonnaci(5);
isFibonnaci(55);
isFibonnaci(89);
isFibonnaci(200);
isFibonnaci(44);
