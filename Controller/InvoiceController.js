var InvoiceDeatails = require("./DetailsController");

exports.DisplayInvoice = (req, res) => {};

exports.addInvoice = async (req, res) => {
  var name = req.body.name;
  var price = req.body.price;
  var amount = req.body.amount;
  var quantity = req.body.quantity;
  console.log(name, price, amount, quantity);
  var result = await InvoiceDeatails.addDetails(name, price, amount, quantity);
  if (result) {
    res.status(201).send(result);
  } else {
    res.status(500).send({ error: "failed  to save Invoice" });
  }
};
