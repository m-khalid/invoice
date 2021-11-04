var express = require("express");
var cors = require("cors");
var ItemRouter = require("./route/itemRoute");
var InventoryRouter = require("./route/inventoryRoute");
// get data from /* form data */
var multer = require("multer");
var multer = require("multer");
var upload = multer({ dest: "upload/" });
var fs = require("fs");
var forms = multer();

// /** Permissible loading a single file,
//     the value of the attribute "name" in the form of "recfile". **/
var type = upload.single("recfile");

var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(forms.array());

app
  .get("/", function (req, res) {
    res.end("Hello in Express");
  })
  .listen(3000);

console.log("http://localhost:3000");

app.use("/api", ItemRouter);
app.use("/api", InventoryRouter);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString());
//   },
// });
// const upload = multer();
// app.use(upload.array());

app.post("/upload", type, function (req, res) {
  console.log("Done");
});
