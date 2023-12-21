import paginationFilter from "../filters/paginationFilter";
import gpsModel from "../models/gpsModel";
import paginationWrapper from "../paginationWrapper";

const express = require("express");
const router = express.Router();

let gps: gpsModel[] = [
    new gpsModel(0, 'Commercial', 'today', 'L5'),
    new gpsModel(1, 'Aircraft', 'today', 'L2'),
    new gpsModel(2, 'Personal', 'today', 'L5'),
    new gpsModel(3, 'Personal', 'today', 'L2'),
    new gpsModel(4, 'Special', 'today', 'L1'),
    new gpsModel(5, 'Military', 'today', 'L1'),
    new gpsModel(6, 'Aircraft', 'today', 'L2'),
    new gpsModel(7, 'Aircraft', 'today', 'L3'),
    new gpsModel(8, 'Military', 'today', 'L3'),
    new gpsModel(9, 'Aircraft', 'today', 'L7'),
    new gpsModel(10, 'Commercial', 'today', 'L1'),
    new gpsModel(11, 'Personal', 'today', 'L2'),
    new gpsModel(12, 'Personal', 'today', 'L5'),
    new gpsModel(13, 'Special', 'today', 'L2'),
    new gpsModel(14, 'Commercial', 'today', 'L3'),
    new gpsModel(15, 'Aircraft', 'today', 'L7'),
    new gpsModel(16, 'Commercial', 'today', 'L2'),
    new gpsModel(17, 'Aircraft', 'today', 'L3'),
    new gpsModel(18, 'Military', 'today', 'L2'),
    new gpsModel(19, 'Military', 'today', 'L7'),
]

router.get("/", function (req: any, res: any) {
    const pagination: paginationFilter = new paginationFilter(req.headers['page-number'], req.headers['page-size']);
    if(pagination.pageNumber > 0 && pagination.pageSize > 0)
        res.send(new paginationWrapper(gps, pagination));

    res.send(new paginationWrapper(gps));
});

router.get("/:gpsId", function (req: any, res: any) {
    let gpsId: number = req.params["gpsId"];
    res.send(gps[gpsId]);
});

router.post("/", function (req: any, res: any) {
    gps.push(new gpsModel(gps.length, req.headers["devicetype"], req.headers["timestamp"], req.headers["location"]));
    res.send(gps[gps.length - 1]);
})

router.put("/:gpsId", function (req: any, res: any) {
    let gpsId: number = req.params["gpsId"];
    gps[gpsId] = new gpsModel(gpsId, req.headers["devicetype"], req.headers["timestamp"], req.headers["location"]);
    res.send(new paginationWrapper(gps));
});

router.delete("/:gpsId", function (req: any, res: any) {
    let gpsId: number = Number(req.params["gpsId"]);
    let newGps: gpsModel[] = gps.slice(0, gpsId);
    gps = newGps.concat(gps.slice(gpsId+1, gps.length))
    res.send(gps); 
});

export default router;









// config for your database
// const config = {
//   user: 'DESKTOP-RESFGB5\mikev',
//   password: '',
//   server: '(localdb)\MSSQLLocalDB',
//   database: 'moovd_gps_projectContext-c146eb5a-f487-41dd-b58f-5115aab599b4'
// };
const sql = require('mssql/msnodesqlv8')

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