"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gps_1 = require("./routes/gps");
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
    res.send('Stofloos is the best!');
});
app.use("/gps", gps_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
