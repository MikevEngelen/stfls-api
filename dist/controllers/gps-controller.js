"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
    res.send("This is the gps dashboard");
});
router.get("/:gpsId", function (req, res) {
    res.send(req.params);
});
exports.default = router;
