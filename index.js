"use strict";

require("dotenv").config();

const EXPRESS  = require("express");
const PATH     = require("path");

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.set("views", "./views");
APP.set("view engine", "pug");
APP.use(EXPRESS.static(PATH.join(__dirname, "public")));


APP.use("/", function(req, res, next) {
	console.log("Accessed URL: " + req.url);
	next();
});

APP.get("/", function(req, res, next) {
	res.status(200).render("_", { "title": "Stöl" });
});

APP.get("*", function(req, res, next) {
	res.status(404).render("404", { "title": "Stöl / 404" });
});


APP.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});