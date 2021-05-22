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
	res.status(200).render("_", { "title": "stöl•stöl" });
});

APP.get("/dev", function(req, res, next) {
	res.status(200).render("dev", { "title": "stöl•stöl / development" });
});

APP.get("/build", function(req, res, next) {
	res.status(200).render("build", { "title": "stöl•stöl / build" });
});

APP.get("*", function(req, res, next) {
	res.status(404).render("404", { "title": "stöl•stöl" });
});


APP.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});