// TIME FOR RECURSIVES!!
// Write a JavaScript program to calculate the factorial of a number.

const fractional = (number) => {
    if(number === 0){
        return 1
    }
    return number * fractional(number-1)
};

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

const gcd = (a, b) => {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

// Write a JavaScript program to get the integers in range (x, y)

const integersInRange = (start_num, end_num) => {
    if (end_num - start_num === 2){
        console.log(start_num, end_num,"in if")
        return [start_num + 1];
    }
    else{
        let list = integersInRange(start_num, end_num - 1);
        console.log(list)
        console.log(start_num, end_num, "in else")
        list.push(end_num - 1);
        return list;
    }
};

//Write a JavaScript program to compute the sum of an array of integers

const calculateArraysSum = (arrayToSum) => {
    if (arrayToSum.length === 1) {
        return arrayToSum[0];
    }
    else {
        return arrayToSum.pop() + calculateArraysSum(arrayToSum);
    }
};

const calculateExponent = (number, power) =>{
    if(power === 0){
        return 1;
    } else {
        return number * calculateExponent(number, power-1)
    }
};

//Question:  How would you reverse a string in JavaScript?
const reverse = (stringToReverse) => {
    if (stringToReverse === "") {
        return "";
    } else {
        return reverse(stringToReverse.substr(1)) + stringToReverse.charAt(0);
    }
};

//Question: Write a recursive function that performs a binary search and tells where you can find the number you are looking for(index).

const binarySearch = (arr, searchingValue, firstIndex=0, lastIndex=(arr.length-1)) => {
    //Mid point is an index that is currently checked for searching value occurance.
    let midPoint = Math.floor(((lastIndex-firstIndex)/2) + firstIndex);

    switch (true) {
        case arr[midPoint] === searchingValue:
            return `The number that you are looking for can be found at index number ${midPoint} in your array`;
        case lastIndex - firstIndex === 0:
            return false;
        case arr[midPoint] < searchingValue:
            return binarySearch(arr, searchingValue, midPoint+1, lastIndex)
        case arr[midPoint] > searchingValue:
            return binarySearch(arr, searchingValue, firstIndex, midPoint)
    }
};
let arrayToCheck = [1,2,3,4,5,6,7,8,9,10];

// Write a JavaScript program to get the first n Fibonacci numbers

const fibonacciSequenceGenerator = (n) => {
    if (n===1) {
        return [0, 1];
    }
    else {
        let fibonacciSequence = fibonacciSequenceGenerator(n - 1);
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
        return fibonacciSequence;
    }
};

