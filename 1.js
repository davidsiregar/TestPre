
function isPrime(n) {
    // cek nilai, jika 1 kurang 1 false
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) { // tidak ada penambahan i
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function printPrime(n) {
    let a = "";
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            a += i + " ";
        }
    }
    return a;
}

function rightTriangle(n) {
    let result = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {

            result += printPrime(n);
        }
        result += '\n';
    }

    return result;
}


function rightTriangle1(n) {
    let result = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            result += '\n';
        }
        result += "*";
    }
    return result;
}

console.log(rightTriangle(10));
    // // console.log(printPrime(100));
