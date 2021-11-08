const express = require("express");
// const multer = require("multer");
const path = require("path");
var cors = require("cors");
var ItemRouter = require("./Routes/itemRoute");
var InventoryRouter = require("./Routes/inventoryRoute");
var InvoiceRouter = require("./Routes/invoiceRoute");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app
  .get("/", function (req, res) {
    res.end("Server On");
  })
  .listen(3000);
console.log("http://localhost:3000");

app.use("/api", InventoryRouter);
app.use("/api", InvoiceRouter);
app.use("/api", ItemRouter);
