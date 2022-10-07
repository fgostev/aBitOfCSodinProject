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
    let fibonacci = [];
    let a = 0
    let b = 1;
    fibonacci.push(a, b);
    if (num <= 1) return fibonacci; 
    b = a;
    // fibonacci.push(b)
    fibonacci.push(a + b);
    fibRec(num - 1 );

    // return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibRec(8)) 