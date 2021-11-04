var express = require("express");
const router = express.Router();

var ItemController = require("../controller/itemController");

router.post("/saveitem", ItemController.addItem);

module.exports = router;
