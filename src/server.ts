import gpsRoute from "./routes/gps";

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req: any, res: any) => {
  res.send('Stofloos is the best!');
});

app.use("/gps", gpsRoute);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
