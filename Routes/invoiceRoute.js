var express = require("express");
const router = express.Router();

var InvoiceController = require("../controller/InvoiceController");

router.post("/addinvoice", InvoiceController.addInvoice);

module.exports = router;
