var express = require("express");
const router = express.Router();
var inventoryController = require("../Controller/inventoryController");

router.post("/saveinventory", inventoryController.addInventory);
router.put("/updateinventory", inventoryController.UpdateInventory);
module.exports = router;
