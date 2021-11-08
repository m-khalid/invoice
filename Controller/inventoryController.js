var DB_connection = require("../DB/Connection");
var DB_query = require("../DB/Query");

exports.addInventory = async (req, res) => {
  try {
    var itemId = req.body.id;
    var Quantity = req.body.quantity;
    values = [itemId, Quantity];
    console.log(JSON.stringify(values));
    var query = DB_query.querylist.INSERT_Inventory_Query;
    await DB_connection.exQuery(query, values);
    return res.status(201).send("Success");
  } catch (err) {
    return res.status(500).send({ error: "failed  to save inventory" });
  }
};

exports.UpdateInventory = async (req, res) => {
  try {
    var itemId = req.body.id;
    var Quantity = req.body.quantity;
    var query_quantity = DB_query.querylist.GET_Quantity_Query;
    var result = await DB_connection.exQuery(query_quantity, [itemId]);
    Quantity = result.rows[0].inventory_quantity - Quantity;
    values = [itemId, Quantity];
    var query = DB_query.querylist.Update_Inventory_Query;
    await DB_connection.exQuery(query, values);
    return res.status(201).send("Success");
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "failed  to updaete inventory" });
  }
};
