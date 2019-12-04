#!/usr/bin/env node
/**
 * Main program for the a game of Gomoku.
 */
"use strict";

var GomokuBoard = require("./GomokuBoard.js");


var yourTurn = true;
const VERSION = "1.0.0";

var path = require('path');
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);

if (process.argv[2] == undefined) {
// Game with 20
var size = 20,
    prompt = "Gomoku$ ",
    gameBoard;
} else if (process.argv[2] == 15) {
var size = 15,
    prompt = "Gomoku$ ",
    gameBoard;
} else {
    var prompt = "Gomoku$ ";
}


gameBoard = new GomokuBoard();



var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Returns a random integer between min (included) and max (included)
 * Using Math.round() will give you a non-uniform distribution!
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Place a marker on the board.
 */
function placeMarker() {
    var x, y,
        player = gameBoard.playerInTurn();

    while (!gameBoard.isFull()) {
        x = getRandomIntInclusive(0, size);
        y = getRandomIntInclusive(0, size);
        if (!gameBoard.isPositionTaken(x, y)) {
            break;
        }
    }

    gameBoard.place(x, y);
    console.log(">>> " + player + " places " + x + " " + y + "\n");
    console.log(gameBoard.asAscii());
}

function getSome() {
    rl.prompt();
}

function placeMarkerManual(one, two) {
    var x, y,
        player = gameBoard.playerInTurn();
    x = one;
    y = two;
    
    while (!gameBoard.isFull()) {

        x = one;
        y = two;
        if (!gameBoard.isPositionTaken(x, y)) {
            break;
        }
        getSome();
        break;
    }
    
    gameBoard.place(x, y);
    console.log(">>> " + player + " places " + x + " " + y + "\n");
    console.log(gameBoard.asAscii());
}



rl.on("line", function(line) {
    if (line.trim() === "exit") {
        console.log("Cya later!");
        process.exit(0);
    } else {
        var oneV = parseInt(line.split(" ")[0]);
        var twoV = parseInt(line.split(" ")[1]);
        if (oneV > size || twoV > size) {
            console.log("Not within the board size");
            rl.prompt();
        } else {
            console.log("Values: " + oneV, twoV);
            var message = "OK";
            try {
                gameBoard.place(oneV, twoV);
                console.log(gameBoard.asAscii());
            } catch (e) {
                message = e.message;
            }
            console.log(message);
            rl.prompt();
        }
    }
});


rl.on("close", function() {
    rl.write("Bye!");
    process.exit(0);
});



// Start the actual main program
if (process.argv[2] == undefined) {
    // Game with 20
    console.log(">>> Start the game with board size of " + size);
    gameBoard.start(size);
}

rl.setPrompt(prompt);
rl.prompt();

/**
 * Display version.
 */
function version() {
    console.log("Current version: " + VERSION);
}


/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options] <min> <max>`);
    console.log('Options:');
    console.log('exit      Exit the game.');
    console.log('-h        Display help text.');
    console.log('-v        Display the version.');
    console.log('15        Create 15X15 board and play the game');
    console.log('          Create 20X20 board by default and play');
}



// Walkthrough all arguments checking for options.
var remaining = [];
args.forEach((arg) => {
    switch (arg) {
        case '-h':
            usage();
            process.exit(0);
            break;

        case '-v':
            version();
            process.exit(0);
            break;

        case '15':
            console.log(">>> Start the game with board size of " + size);
            gameBoard.start(size);
            rl.setPrompt(prompt);
            rl.prompt();
            break;

        default:
            remaining.push(arg);
            break;
    }
});
