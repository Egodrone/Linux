#!/usr/bin/env node
"use strict";

const dbwebb = require("./.dbwebb.js");

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/** ======================================================================
 * Lab 4 - JavaScript with Nodejs
 *
 * JavaScript using nodejs. During these exercises we train on the built-in
 * nodejs modules filesystem, querystring and crypto.
 * Documentation can be found at [nodejs api](https://nodejs.org/api/).
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Filesystem
 *
 * This section is about the built-in module filesystem and how to read and
 * write files synchronously.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Start by requiring the filesystem module `fs`.
 *
 * Use the `fs` module and the function `readFileSync` to read the entire
 * `ircLog.txt` in UTF-8 encoding into a variable. Answer with the number of
 * characters in the file.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

const fs = require('fs');
var filename = "./ircLog.txt";
let textVar = fs.readFileSync(filename, 'utf8');
let testLen = textVar.length;




ANSWER = testLen;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use your variable from the exercise above and answer with the contents on
 * line 4.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
//var readline = require('readline');
//let testrrr = textVar.readline(4);

//console.info(testrrr);

let vava = "";

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
        throw new Error('File end reached without finding line');
    }
    callback(null, lines[+line_no]);
}

get_line(filename, 3, function(err, line){
    vava = line;
});



ANSWER = vava;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Write line number 4 of `ircLog.txt` to a new file that you create called
 * `highlights.txt`. Replace `highlights.txt` if it already exists.
 * Answer with characters 7 through 10 from `highlights.txt`.
 *
 * Tip: Use the function `writeFileSync()` when writing to files.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
console.log(vava);
fs.writeFileSync("./highlights.txt", vava, function(err) {
    if(err) {
        return console.log(err);
    }

    //console.log("The file was saved!");
}); 
let textVar2 = fs.readFileSync("./highlights.txt", 'utf8');
let tansw = textVar2.charAt(6) + textVar2.charAt(7) + textVar2.charAt(8);





ANSWER = tansw;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . querystring
 *
 * This section is about the built-in module querystring and how to parse and
 * encode query strings.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Start by requiring the querystring module `querystring`.
 *
 * Use the `querystring` module to parse a query string
 * 'first_name=Neil&last_name=Armstrong&mission=Apollo11'. Answer with the
 * value of mission.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

const querystring = require(`querystring`);

let fefefe = querystring.parse('first_name=Neil&last_name=Armstrong&mission=Apollo11');
//let uuu = querystring.stringify(oQueryParams, ';', ':');
let ansaka = fefefe.mission;



ANSWER = ansaka;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Use the parsed query string from above to concatenate the astronaut's full
 * name with the string ' was on the ' and the mission that the astronaut was
 * on.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let fullName = fefefe.first_name + ' ' + fefefe.last_name + ' was on the ' + fefefe.mission;






ANSWER = fullName;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Create a javascript object with the following attributes and values:
 *
 * url = https://dbwebb.se/
 * id = 17
 * payload = aHR0cHM6Ly9kYndlYmIuc2Uv
 * type = csv
 *
 *
 * Encode the javascript object as a querystring and answer with the encoded
 * query string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let jsobjec = {
    url: "https://dbwebb.se/",
    id: 17,
    payload: "aHR0cHM6Ly9kYndlYmIuc2Uv",
    type: "csv"
};


function objToQueryString(obj){
    var k = Object.keys(obj);
    var s = "";

    for(var i=0;i<k.length;i++) {
        s += k[i] + "=" + encodeURIComponent(obj[k[i]]);
        if (i != k.length -1) s += "&";
    }
    return s;
};

let xuxu = objToQueryString(jsobjec);




ANSWER = xuxu;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . crypto
 *
 * This section is about the built-in module crypto and how to encrypt data
 * with nodejs.
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Start by requiring the `crypto` module.
 *
 * Use the `crypto` module to create a hash of 'Forever trusting who we are'
 * using the `sha256` algorithm.
 *
 * Answer with a digest of the hash in `hex` format.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


const crypto = require(`crypto`);
let wordToc = 'Forever trusting who we are';
let tttt = crypto.createHmac('sha256', wordToc);
//console.log(tttt);
const hashansw = crypto.createHmac('sha256', wordToc).digest('hex');

var mykey = crypto.createHash('sha256', 'mypassword');
var mystr = mykey.update('Forever trusting who we are', 'utf8', 'hex')
//mystr += mykey.update('hex');

const secret = '';
const hash = crypto.createHash('sha256', secret).update('Forever trusting who we are').digest('hex');
//console.log(hash);

//ANSWER = hashansw;
//ANSWER = mystr;
ANSWER = hash;
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Create an array called `cryptoStrings` holding the strings 'Forever
 * trusting who we are', 'And nothing else matters', 'Never opened myself this
 * way', 'Life is ours, we live it our way'.
 *
 * Use filter to create an array only containing elements that has the string
 * 'nothing else matters' in them.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var cryptoStrings = ['Forever trusting who we are', 'And nothing else matters', 'Never opened myself this way', 'Life is ours, we live it our way'];
var bbbp = ["", 'nothing else matters', "", ""];
var resultx = cryptoStrings.filter(function(e, i) {
    return bbbp[i] == 'nothing else matters';
});
//console.log(resultx);




ANSWER = resultx;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (1 points)
 *
 * Use the array from above only containing elements with 'nothing else
 * matters'.
 *
 * For the elements in the array create a hex digest of a hash created with
 * with the `sha256` algorithm of each element.
 *
 * Answer with the array of hashes.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


const hash2 = crypto.createHash('sha256', secret).update(resultx[0]).digest('hex');
let ffanw = {
    gry: hash2
};
let yuys = [hash2];


ANSWER = yuys;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/**
 * Exercise 3.4 (1 points)
 *
 * Use `filter` to keep all elements in `cryptoStrings` that contains both an
 * 'i', an 'e', and a 'm', check both capital and non-capital letters.
 *
 * For the remaining elements create a hex digest of a hash created with with
 * the `sha256` algorithm of each remaining element.
 *
 * Answer with the array of hashes.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var salvador = [];
var fromfil = cryptoStrings.filter(function(curr) {
    if (curr.includes("i") && curr.includes("e") && curr.includes("m")) {
        salvador.push(crypto.createHash('sha256', secret).update(curr).digest('hex'));
        return curr;
    }
});

//console.log(fromfil);




ANSWER = salvador;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, false);

/**
 * Exercise 3.5 (1 points)
 *
 * Using the same `cryptoStrings` array from above remove all elements that
 * does NOT contain 'matters', check both capital and non-capital letters.
 *
 * For the remaining elements create a HMAC using the `sha256` algorithm and
 * the secret 'metallica' for each element. Create a `base64` digest of the
 * HMAC for each element.
 *
 * Answer with the array of HMACs.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var lastone = [];

var drdtdy = cryptoStrings.filter(function(curr) {
    if (curr.includes("matters") == true || curr.includes("Matters") == true) {
        lastone.push(crypto.createHmac('sha256', 'metallica').update(curr).digest('base64'));
        return curr;
    }
});



ANSWER = lastone;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.5", ANSWER, true);


process.exit(dbwebb.exitWithSummary());
