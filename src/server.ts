import { GPS } from "./models/gps";

const express = require('express');
const app = express();
const PORT = 3000;

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
  }
]
app.get('/api/gps', (req: any, res: any) => {
  res.json(gps)
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});