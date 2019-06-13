// Question: How would you verify a prime number?

const isPrime = (numberToTest) =>{
    if(numberToTest === 1){
        return `${numberToTest} is not a prime number!`
    }else if(numberToTest <= 0){
        return 'You have to test number greater than 0'
    }

    for(let i = 2; i <= numberToTest/2; i++){
        if(numberToTest === 2){
            return `${numberToTest} is a prime number!`
        }
        else if(numberToTest % i === 0){
            return `${numberToTest} is not a prime number!`
        }
    }
    return `${numberToTest} is a prime number!`
};

//Question: How could you find all prime factors of a number?

const findPrimeFactors =(numberToTest) =>{
    let primeFactors = [],
        divisor = 2;

    while(numberToTest>=divisor){
        if(numberToTest % divisor === 0){
                if(divisor === 2){
                    primeFactors.push(divisor)
                }
                else if(divisor % 2 === 0){
                    console.log(`Divisor ${divisor} is not a prime number`)

                }else {
                    primeFactors.push(divisor)
                }
            numberToTest= numberToTest/ divisor;
            divisor++;
        }
        else{
            divisor++;
        }
    }
    return primeFactors;
};

//Question: How would you find the greatest common divisor of two numbers?

const greatestCommonDivisor = (a, b) => {
    if(b === 0)
        return a;
    else
        return greatestCommonDivisor(b, a%b);
};

//Question: How would you reverse a string in JavaScript?

const reverseString = (stringToReverse) => {
    return stringToReverse.split("").reverse().join("");
};
let stringToReverse = "I am junior front-end dev";

//Question: How would you reverse words in a sentence? Aka Yoda speech!

const reverseWords = (stringWithWordsToReverse) => {
    return stringWithWordsToReverse.split(" ").reverse().join(" ");
};

//Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

const reverseWordsInPlace = (stringWithWordsToReverse) => {
    return stringWithWordsToReverse.split(" ").reverse().join(" ").split("").reverse().join("");
};

//Question: How will you remove duplicate characters from a sting?

const removeDuplicateCharFromString = (stringToCheck) =>{
    let len = stringToCheck.length,
        char,
        charCount = {},
        newStr = [];
    for(let i = 0; i<len; i++){
        char = stringToCheck[i];
        if(charCount[char]){
            // charCount[char]++;
            // Uncomment line above if you would like to remove letters that occur more than once like a or e
            // if you do so, result should be like: cijlmnopstuv
        }
        else
            charCount[char] = 1;
    }
    for (let j in charCount){
        if (charCount[j] === 1)
            newStr.push(j);
    }
    newStr.sort();
    return newStr.join('');
};

const nonUnique = "learn more javascript dude";

//Question: How will you verify a word as palindrome?

const checkPalindrom = (stringToTest) => {
    stringToTest = stringToTest.replace(/\W/g, '').toLowerCase();
    return stringToTest === stringToTest.split('').reverse().join('');
};

//Question: How will you remove duplicates of an array and return an array of only unique elements

const arrayWithDuplicates = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(arrayWithDuplicates));

//Question: How would you merge two sorted array?

const mergeSortedArrays = (firstArray, secondArray) => {
    let merged = [];
    let indexInFirstArray = 0;
    let indexInSecondArray = 0;
    let currentIndex = 0;

    while (currentIndex < (firstArray.length + secondArray.length)) {

        let isArray1IsDepleted = indexInFirstArray >= firstArray.length;
        let isArray2IsDepleted = indexInSecondArray >= secondArray.length;

        if (!isArray1IsDepleted && (isArray2IsDepleted || (firstArray[indexInFirstArray] < secondArray[indexInSecondArray]))) {
            merged[currentIndex] = firstArray[indexInFirstArray];
            indexInFirstArray++
        } else {
            merged[currentIndex] = secondArray[indexInSecondArray];
            indexInSecondArray++;
        }
        currentIndex++;
    }
    // remove duplicates from merged array
    return merged.filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
    });

};

//Question: How would you swap two numbers without using a temporary variable?

const swapNumb = (a, b) => {
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b ^ a;
    a = a ^ b;
    b = a ^ b;
    console.log('after swap: ','a: ', a, 'b: ', b);
};
// If you wanna know wtf happend here check JavaScript Bitwise Operators


//Question: How could you find the first non repeating char in a string?

const firstNonRepeatChar =(stringToCheck)=>{
    let len = stringToCheck.length,
        char,
        charCounter = {};
    for(let i =0; i<len; i++){
        char = stringToCheck[i];
        if(charCounter[char]){
            charCounter[char]++;
        }
        else
            charCounter[char] = 1;
    }
    for (let j in charCounter){
        if (charCounter[j]===1)
            return j;
    }
};

//Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
const sumFinder = (arr, sum) =>{
    let differ = {},
        len = arr.length,
        substract;

    for(let i =0; i<len; i++){
        substract = sum - arr[i];
        if(differ[substract])
            return true;
        else
            differ[arr[i]] = true;
    }
    return false;
};

// I want this code to log out “doggo”, but it logs out undefined!

let dog = {
    name: 'doggo',
    sayName () {
        console.log(this.name)
    }
};
let sayName = dog.sayName
// sayName()

// all you have to do is to bind sayName context to dog object like this:
// let sayName = dog.sayName.bind(dog) and..fixed! :)

// I want this code to log out “hey amy”, but it logs out “hey arnold” - why?

function greet (person) {
    if (person == { name: 'amy' }) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}

// 2 diffrent objects - 2 diffrent locations in memory and you can't compare them directly, so to fix it you have to do:
// (person.name === 'amy' )

// I want my dog to bark(), but instead, I get an error. Why?
function Dog (name) {
    this.name = name
}
Dog.bark = function () {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
let boundedBark = Dog.bark.bind(fido)
// boundedBark()

// ofc you can bind this context by Dog.bark.bind(fido) but why so if you can be pro
// with class keyword you can elegantly fix it doing this:

class fixedDog {
    constructor (name) {
        this.name = name
    }

    bark () {
        console.log(this.name + ' says woof')
    }
}

let sparky = new fixedDog('sparky')
// sparky.bark()


// Suppose an array of numbers is given. Create method that creates a palindrome out of your array

Array.prototype.toPalindrome = function() {
    const result = this.slice();
    for ( let i = this.length - 2; i >= 0; --i ) {
        result.push( this[i] );
    }
    return result;
};

const arr = [1,2,3];

const arr2 = arr.toPalindrome()

const arr3 = arr2.toPalindrome()

// pipe functions - one of functional programing paradigms
// https://medium.com/@venomnert/pipe-function-in-javascript-8a22097a538e

const _pipe = (a, b) => (arg) => b(a(arg));
const pipeImproved = (...functions) => functions.reduce(_pipe)

const pipe = (...functions) => (arguments) =>
    functions.reduce((result, currentFn) => currentFn(result), arguments)


const addSpaceBeforeCurrency = (str) => str.replace(/(€|zł|£|\$)/g, ' $1');
const addSpacesAroundEqualSign = (str) => str.replace(/=/g, ' = ');

const functionArray = [addSpaceBeforeCurrency, addSpacesAroundEqualSign, reverseWordsInPlace, reverseString];

const piped = pipeImproved(...functionArray)('1000zł=milijon dukatów')

// console.log(piped);

// Create your own implementation of HOF - fillter

function filter(arr, predicate) {
    let idx = -1,
        len = arr.length,
        result = [];
    while (++idx < len) {
        let value = arr[idx];
        if (predicate(value, idx, this)) {
            result.push(value);
        }
    }
    return result;
}

// Create your own implementation of HOF - reduce

function reduce(arr, fn, accumulator) {
    let idx = -1,
        len = arr.length;
    if (!accumulator && len > 0) {
        accumulator = arr[++idx];
    }
    while (++idx < len) {
        accumulator = fn(accumulator,
            arr[idx], idx, arr);
    }
    return accumulator;
}

// Create your own implementation of HOF - map

function map(arr, fn) {
    let idx = 0, index = 0,
        len = arr.length,
        result = new Array(len);
    while (++idx < len) {
        result[index++] = fn(arr[idx-1], idx, arr);
    }
    return result;
}

const xArray = [3,6,4,6,2];
const yArray = [2,2,5,7,7];

// Create algorithm that calc polygon area

function polygonArea(X, Y, numPoints) {
    let area = 0;         // Accumulates area in the loop
    let j = numPoints-1;  // The last vertex is the 'previous' one to the first

    for (let i=0; i<numPoints; i++)
    { area = area +  (X[j]+X[i]) * (Y[j]-Y[i]);
        j = i;  //j is previous vertex to i
    }
    return area/-2;
}

const area = polygonArea(xArray,yArray, 5);

// Implement binary tree (using classes)

class Node{
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(array){
        this.root = null;
        this.constructTree(array);
        this.sortedData = [];
    }

    constructTree(array) {
        for(let i = 0; i<array.length; i++){
            this.setNode(array[i])
        }
    }

    setNode(val){
        let root = this.root;

        if(!root){
            this.root = new Node(val);
            return;
        }

        let currentNode = root;
        let newNode = new Node(val);

        while(currentNode){
            if(val < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }
                else{
                    currentNode = currentNode.left;
                }
            }
            else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }
                else{
                    currentNode = currentNode.right;
                }
            }
        }
    }

    sortInOrder(node){
            if(node){
                this.sortInOrder(node.left);
                this.sortedData.push(node.value);
                this.sortInOrder(node.right);
            }
            return dataToBeSorted = this.sortedData;
    }

    sortInReverseOrder(node){
        if(node){
            this.sortInReverseOrder(node.right);
            this.sortedData.push(node.value);
            this.sortInReverseOrder(node.left);
        }
        return dataToBeSorted = this.sortedData;
    }
}

// Implement recursive fizzbuzz with tail-call optimization

const fizzBuzzPrinterR = (i = 1, maxCalls) => {
    if(i === maxCalls + 1) return;
    else if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    }
    fizzBuzzPrinterR(i + 1, maxCalls);
};





