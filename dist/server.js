"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Stofloos is the best!');
});
const gps = [
    {
        DeviceId: 0,
        DeviceType: "Aircraft",
        TimeStamp: new Date().toTimeString(),
        Location: "L1"
    },
    {
        DeviceId: 1,
        DeviceType: "Aircraft",
        TimeStamp: new Date().toTimeString(),
        Location: "L2"
    }
];
app.get('/api/gps', (req, res) => {
    res.json(gps);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
