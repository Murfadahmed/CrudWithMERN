import express from "express";
import Conection from "./DataBases/db.js";
import addUser from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", addUser);

Conection();

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
