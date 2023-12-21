"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginationFilter_1 = require("../filters/paginationFilter");
const gpsModel_1 = require("../models/gpsModel");
const paginationWrapper_1 = require("../paginationWrapper");
const express = require("express");
const router = express.Router();
let gps = [
    new gpsModel_1.default(0, 'Commercial', 'today', 'L5'),
    new gpsModel_1.default(1, 'Aircraft', 'today', 'L2'),
    new gpsModel_1.default(2, 'Personal', 'today', 'L5'),
    new gpsModel_1.default(3, 'Personal', 'today', 'L2'),
    new gpsModel_1.default(4, 'Special', 'today', 'L1'),
    new gpsModel_1.default(5, 'Military', 'today', 'L1'),
    new gpsModel_1.default(6, 'Aircraft', 'today', 'L2'),
    new gpsModel_1.default(7, 'Aircraft', 'today', 'L3'),
    new gpsModel_1.default(8, 'Military', 'today', 'L3'),
    new gpsModel_1.default(9, 'Aircraft', 'today', 'L7'),
    new gpsModel_1.default(10, 'Commercial', 'today', 'L1'),
    new gpsModel_1.default(11, 'Personal', 'today', 'L2'),
    new gpsModel_1.default(12, 'Personal', 'today', 'L5'),
    new gpsModel_1.default(13, 'Special', 'today', 'L2'),
    new gpsModel_1.default(14, 'Commercial', 'today', 'L3'),
    new gpsModel_1.default(15, 'Aircraft', 'today', 'L7'),
    new gpsModel_1.default(16, 'Commercial', 'today', 'L2'),
    new gpsModel_1.default(17, 'Aircraft', 'today', 'L3'),
    new gpsModel_1.default(18, 'Military', 'today', 'L2'),
    new gpsModel_1.default(19, 'Military', 'today', 'L7'),
];
router.get("/", function (req, res) {
    const pagination = new paginationFilter_1.default(req.headers['page-number'], req.headers['page-size']);
    if (pagination.pageNumber > 0 && pagination.pageSize > 0)
        res.send(new paginationWrapper_1.default(gps, pagination));
    res.send(new paginationWrapper_1.default(gps));
});
router.get("/:gpsId", function (req, res) {
    let gpsId = req.params["gpsId"];
    res.send(gps[gpsId]);
});
router.post("/", function (req, res) {
    gps.push(new gpsModel_1.default(gps.length, req.headers["devicetype"], req.headers["timestamp"], req.headers["location"]));
    res.send(gps[gps.length - 1]);
});
router.put("/:gpsId", function (req, res) {
    let gpsId = req.params["gpsId"];
    gps[gpsId] = new gpsModel_1.default(gpsId, req.headers["devicetype"], req.headers["timestamp"], req.headers["location"]);
    res.send(new paginationWrapper_1.default(gps));
});
router.delete("/:gpsId", function (req, res) {
    let gpsId = Number(req.params["gpsId"]);
    let newGps = gps.slice(0, gpsId);
    gps = newGps.concat(gps.slice(gpsId + 1, gps.length));
    res.send(gps);
});
exports.default = router;
// config for your database
// const config = {
//   user: 'DESKTOP-RESFGB5\mikev',
//   password: '',
//   server: '(localdb)\MSSQLLocalDB',
//   database: 'moovd_gps_projectContext-c146eb5a-f487-41dd-b58f-5115aab599b4'
// };
const sql = require('mssql/msnodesqlv8');
const conn = new sql.ConnectionPool({
    database: 'moovd_gps_projectContext-c146eb5a-f487-41dd-b58f-5115aab599b4',
    server: '(localdb)\\mssqllocaldb',
    //user: 'DESKTOP-RESFGB5\\mikev',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
});
// const data = () => {
//     sql.connect(conn, function (err: any) {
//         if (err) console.log(err);
//         // create Request object
//         var request = new sql.Request();
//         // query to the database and get the records
//         request.query('select * from dbo.GPS', function (err: any, recordset: any) {
//             if (err) console.log(err)
//             // send records as a response
//             return recordset;
//         });
//     });
// }
