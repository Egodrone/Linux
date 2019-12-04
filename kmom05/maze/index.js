/**
 * Main program to run the maze server
 *
 */


const maze = require("./maze");

var port = 1337;

maze.listen(port);

console.log('The maze server is now listening on: ' + port);
