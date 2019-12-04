#!/usr/bin/env node

"use strict";


//import dbwebb from "./.dbwebb.js";
const dbwebb = require("./.dbwebb.js");

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/** ======================================================================
 * node1 - JavaScript med Nodejs
 *
 * JavaScript using nodejs.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . nodejs built-ins
 *
 * In this section we try out some of the new nodejs and ES6 features.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a variable called `numbersArray` holding the numbers 3,43,23,15,87.
 *
 * Use find to get the first occurence of a number bigger than or equal to 42.
 *
 * Answer with the number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let numbersArray = [3, 43, 23, 15, 87];

function checkArray(passedVal) {
    return passedVal >= 42;
}

let result = numbersArray.find(checkArray);



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Find the smallest number in `numbersArray` by using the spread operator
 * `...` and the function `Math.min()`.
 *
 * Answer with the smallest number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
/*
function loopThru(numbersArray) {
    return passed;
}
*/

let smallestNr = Math.min.apply(Math, numbersArray);


ANSWER = smallestNr;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function called `meaningOfLife()` with one default parameter with
 * the value of 42.
 *
 * The function should return the sentence 'The meaning of life is '
 * concatenated with the parameter.
 *
 * Answer with a call to the `meaningOfLife()` function without any
 * parameters.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function meaningOfLife(defval = 42) {
    return 'The meaning of life is ' + defval;
}




ANSWER = meaningOfLife();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Check if the word Elephant contains the letters 'oo'. Return true or false
 * depending on the answer.
 *
 * Tip: Use nodejs function `includes`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let Elephant = "Elephant";

function testStr(passedWord) {
    return passedWord.includes("oo");
}




ANSWER = testStr(Elephant);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Check if the word Elephant starts with the letters 'El'. Return true or
 * false depending on the answer.
 *
 * Tip: Use nodejs function `startsWith`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function begWith(passedShs) {
    return passedShs.startsWith("El");
}




ANSWER = begWith(Elephant);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Filtering arrays
 *
 * In this section we filter arrays in different ways.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use `numbersArray` from above holding the numbers 3,43,23,15,87.
 *
 * Use a for-loop to save all numbers smaller than 42 in a new array.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

numbersArray = [3, 43, 23, 15, 87];
let resArr = [];

for(var a = 0; a < numbersArray.length; a++) {
    if (numbersArray[a] < 42) {
        resArr.push(numbersArray[a]);
    }
}




ANSWER = resArr;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Create a variable called `moreNumbersArray` holding the numbers
 * 3,43,23,15,87,66,40.
 *
 * Use the built-in higher-order function `filter` and a callback function to
 * filter out all numbers bigger than or equal to 42.
 *
 * Use arrow-notation to keep the code short and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let moreNumbersArray = [3, 43, 23, 15, 87, 66, 40];

let filterRes = moreNumbersArray.filter(word => word <= 42);





ANSWER = filterRes;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Transforming arrays
 *
 * In this section we change arrays using the higher-order functions map and
 * reduce.
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Create a variable called `stringArray` holding the strings 'Jim
 * Lovell','Jack Swigert','Fred Haise'.
 *
 * Use a for-loop to concatenate the string ' was on the apollo 13' too each
 * name in the array.
 *
 * Store the result in a new array and answer with that array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let stringArray = ['Jim Lovell','Jack Swigert','Fred Haise'];
let newresarr = [];

for (a = 0; a < stringArray.length; a++) {
    newresarr.push(stringArray[a] + ' was on the apollo 13');
}




ANSWER = newresarr;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use the `stringArray` from above and the built-in higher-order function
 * `map` to concatenate the string ' was not on the apollo 12' and each name.
 *
 * Use arrow notation to keep the code simple and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let newstuff = stringArray.map(x => x + ' was not on the apollo 12');






ANSWER = newstuff;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . Extra assignments
 *
 * Solve these optional questions to earn extra points.
 *
 */



/**
 * Exercise 4.1 (3 points)
 *
 * Create a variable called `maybePrimeNumber` holding the numbers
 * 73,78,83,88,97,102,103,106,109.
 *
 * In a for-loop sum all prime numbers from `maybePrimeNumber`, you need to
 * find out whether or not the number is a prime number.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

/*
let maybePrimeNumber = [73,78,83,88,97,102,103,106,109];
let maybePrimeNumber2 = 0;
let ansToPr;

for (a = 0; a < maybePrimeNumber.length; a++) {
    if (maybePrimeNumber2 < 1) {
        maybePrimeNumber2 = maybePrimeNumber2 + maybePrimeNumber[a];
    } else {
        maybePrimeNumber2 ..
    }
}

function testnumber(maybePrimeNumberx) {
    for (var p = 2; p < maybePrimeNumberx; p++) {
        if (maybePrimeNumberx % p) return false;
    }
}
ansToPr = testnumber(maybePrimeNumber2);
console.info(ansToPr);


//ANSWER = maybePrimeNumber2;
ANSWER = "Replace this text with the variable holding the answer.";
*/
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, true);

/**
 * Exercise 4.2 (3 points)
 *
 * Create a function `isNotPrime()` that takes one parameter (an integer) and
 * tests if that number is a prime number. If the number is not prime, the
 * number is returned otherwise return 0.
 *
 * Create the variable `maybePrimeNumber` once more with the numbers
 * 73,78,83,88,97,102,103,106,109. Use the built-in higher-order function
 * `reduce` to sum all numbers in `maybePrimeNumber` that are NOT prime
 * numbers.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);


process.exit(dbwebb.exitWithSummary());
