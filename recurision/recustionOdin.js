// Assignment 1:

// for loop version

function fibs(num){
    let fibonacci = [];

    let a = 0, b = 1, c;
    fibonacci.push(a, b);

    for(let i = 2;  i < num; i++){
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

    }
    console.log(fibonacci);
    return fibonacci;
}

console.log(fibs(8))    

// recursive version

function fibRec(num){
if(num < 2) return num;
else return (fibRec(num-1) + fibRec(num-2))
    // return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibRec(8)) 
