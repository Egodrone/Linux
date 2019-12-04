/**
 * Server with routes.
 * URLS:
 *  localhost:1337/     - home.
 *  localhost:1337/*    - 404 page.
 */
"use strict";

var http = require("http");
var url = require("url");
var qs = require("querystring");
var util = require("util");




var server = http.createServer((req, res) => {
    var ipAddress,
        urlParts,
        route,
        query,
        queryString;
    var fs = require("fs");

    var filename = "index.html";

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    urlParts = url.parse(req.url, true);
    route = urlParts.pathname;
    query = urlParts.query;
    queryString = qs.stringify(query);

    console.log(
        "Incoming route "
        + route
        + " from ip "
        + ipAddress
        + " with querystring "
        + queryString
    );

    // Inspect the details of the object created for the query string
    console.log(util.inspect(query));

    // Switch (route) on the path.
    switch (route) {
        case "/":
            // Home page route.
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home page\n");
            break;

        case "/plain":
            // Home page route.
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello World!\n");
            break;

        case "/index.html":
            var data = fs.readFileSync(filename, "utf8");
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
            break;

        case "/status":
            var child = require("child_process");
            let result2 = {
                "uname": 0
            };
            // Execute a child process, in this case "uptime".
            child.exec("uname -a", (error, stdout, stderr) => {
                if (error || stderr) {
                // error(s)
                console.log("Something went wrong...", error, stderr);
                }
                result2 = stdout;
                var myJSON2 = JSON.stringify(result2);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(myJSON2 + "\n");
            });
            break;

        case "/sum":
            let totalSum = 0;
            let result = {
                "sum": 0
            };
            Object.keys(query).forEach( key => {
                totalSum += parseInt(key);
            });
            result.sum = totalSum;
            var myJSON = JSON.stringify(result);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(myJSON + "\n");
            break;

        case "/filter":
            var resArr = [];
            let result3 = {
                "filter": []
            };
            Object.keys(query).forEach( key => {
                if (key < 43) {
                    resArr.push(key);
                }
            });
            result3 = resArr;
            var myJSON3 = JSON.stringify(result3);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(myJSON3 + "\n");
            break;

        default:
            // Route not found.
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404. The resource does not exists.\n");
            break;
    }
});

// Export the server as a module.
module.exports = server;
