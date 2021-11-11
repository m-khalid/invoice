var InvoiceDeatails = require("./DetailsController");
var InvoiceHeader = require("./HeaderController");

exports.addInvoice = async (req, res) => {
  var result = await InvoiceDeatails.addDetails(req.body);
  if (result) {
    res.status(201).send({ data: result });
  }
  res.status(500).send({ error: "failed  to save Invoice" });
};

exports.GetInvoice = async (req, res) => {
  var Id = req.params.id;
  var result = await InvoiceHeader.GetByHeader(Id);
  if (result) {
    res.status(201).send({ data: result });
  }
  res.status(500).send({ error: "failed  to save Invoice" });
};

exports.DeleteInvoice = async (req, res) => {
  var Id = req.params.id;
  var result = await InvoiceHeader.DeleteByHeader(Id);
  if (result) {
    res.status(201).send({ msg: "Success" });
  }
  res.status(500).send({ error: "failed  to Delete Invoice" });
};

exports.UpadteInvoice = async (req, res) => {
  var Id = req.params.id;
  var result = await InvoiceDeatails.UpdateDetails(Id, req.body);
  if (result) {
    res.status(201).send({ msg: "Success" });
  }
  res.status(500).send({ error: "failed  to Update Invoice" });
};
