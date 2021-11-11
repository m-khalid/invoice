var express = require("express");
const router = express.Router();

var InvoiceController = require("../controller/InvoiceController");

router.post("/invoice", InvoiceController.addInvoice);
router.get("/invoice/:id", InvoiceController.GetInvoice);
router.delete("/invoice/:id", InvoiceController.DeleteInvoice);
router.put("/invoice/:id", InvoiceController.UpadteInvoice);

module.exports = router;
