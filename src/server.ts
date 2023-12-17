import { GPS } from "./models/gps";

const express = require('express');
const app = express();
const PORT = 3000;

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
  server: 'DESKTOP-RESFGB5\LOCALDB#3A01F028',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

app.get('/', (req: any, res: any) => {
  res.send('Stofloos is the best!');
});

const gps: GPS[] = [
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
  },
  {
    DeviceId: 2,
    DeviceType: "Personal",
    TimeStamp: new Date().toTimeString(),
    Location: "L3"
  }
]

app.get('/api/gps', (req: any, res: any) => {
  sql.connect(conn, function (err: any) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from dbo.GPS', function (err: any, recordset: any) {

      if (err) console.log(err)

      // send records as a response
      res.json(recordset);

    });
  });

  //res.json(gps)
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});