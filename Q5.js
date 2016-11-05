// Q5
function add(a, b){
    if(b == 0){
        return a;
    }
    else{
        var sum = a ^ b;
        var carryIn = (a & b) << 1;
        return add(sum, carryIn);
    }
}

// demo:
console.log(add(1,2));
