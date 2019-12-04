/**
 * Main program to run a server
 * Egodrone
 */
"use strict";

const path = require("path");
const fs = require("fs");
const server = require("./server.js");

// Start the server to listen on a port
const LINUX_PORT = 1337;

if (LINUX_PORT > 0 && LINUX_PORT < 10001) {
    server.listen(LINUX_PORT);
} else {
    server.listen(1337);
}


// Write pid to file
var pidFile = path.join(__dirname, "pid");
var pidFile2 = path.join(__dirname, "../node1/pid");

fs.writeFile(pidFile, process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});
fs.writeFile(pidFile2, process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});

/**
 * Listen on SIGINT, SIGTERM
 */
function controlledShutdown(signal) {
    console.warn(`Caught ${signal}. Removing pid-file and will then exit.`);
    fs.unlinkSync(pidFile);
    fs.unlinkSync(pidFile2);
    process.exit();
}

// Add event handlers for signals
process.on("SIGTERM", () => { controlledShutdown("SIGTERM"); });
process.on("SIGINT", () => { controlledShutdown("SIGINT"); });


console.log("Simple server with routes listen on port 1337.");
console.log("Try routes / and add a querystring after it, like this /?a=b&c");
