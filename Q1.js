// Q1
function reverseString(text){
    if (typeof text === 'string') {
        return text.split("").reverse().join("");
    }
    else{
        console.error("Invalid input.");
    }
}

// demo:
console.log(reverseString("hello"));
