/** @format */

var express = require("express");
var bodyParser = require("body-parser");

// Create new instance of the express server
var app = express();

app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});

/**
 * GET /
 */
app.get("/", function (req, res) {
	res.status(200).json({ status: "i am ok!" });
});

/**
 * GET /_health
 */
app.get("/api/_health", function (req, res) {
	res.status(200).json({ status: "i am ok!" });
});
