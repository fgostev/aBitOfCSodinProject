
// Exercise 1: 

// Write a function called sumRange. It will take a number and return 
// the sum of all numbers from 1 up to the number passed in.



// / mine

function sumRange(n, sumTotal = 0){
    if(n <= 0){
        return sumTotal;
    }
   return sumRange(n - 1, sumTotal + n)
}

console.log(sumRange(3));

// Exercise 2:

// Write a function called power which takes in a base and 
// an exponent. If the exponent is 0, return 1.

function power(b, e){
    if(e === 0){
        return 1
    } return b * power(b , e - 1)
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1


// Exercise 3:

// Write a function that returns the factorial of a number. 
// As a quick refresher, a factorial of a number is the result of that number multiplied 
// by the number before it, and the number before that number, and so on, until you reach 1. 
// The factorial of 1 is just 1.

function factorial(num){
	if(num == 1) return 1;
	return num * factorial(num - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120


// Exercise 5:

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all



function productOfArray(array){
    if(array.length === 0) return 1;
    return array.shift() * productOfArray(array) 

}

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

console.log(six, sixty);


// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, value){
    for(let key in object){
        if(typeof object[key] === null){
        // nul in typeoff null returns "object"
			return contains(object[key], value);
		}
        if(object[key] === value){
            return true;
        }
    }
    return false
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);