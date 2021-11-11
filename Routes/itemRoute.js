var express = require("express");
const router = express.Router();

var ItemController = require("../controller/itemController");
router.post("/item", ItemController.addItem);
router.get("/item/:name", ItemController.getItem);
router.delete("/item/:name", ItemController.deleteItem);
router.put("/item/:id", ItemController.updateItem);

module.exports = router;
