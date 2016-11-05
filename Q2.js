// Q2
function isSquare(num){
    var i = 1;
    while (i * i <= num) {
        if(num / i == i && num % i == 0){
            return true;
        }
        i++;
    }
    return false;
}

// demo:
console.log(isSquare(16));
console.log(isSquare(14));
