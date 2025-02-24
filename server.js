const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const leadRoutes = require("./route/leadRoute");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true, 
    })
  );
  

app.use("/api/lead", leadRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
