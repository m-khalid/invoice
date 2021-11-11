var express = require("express");
const router = express.Router();
var inventoryController = require("../Controller/inventoryController");

router.post("/inventory", inventoryController.addInventory);
router.put("/inventory/:id", inventoryController.UpdateInventory);
router.get("/inventory/:id", inventoryController.getInventory);
router.delete("/inventory/:id", inventoryController.deleteInventory);
module.exports = router;
