var DB_connection = require("../DB/Connection");
var DB_query = require("../DB/Query");
var Transaction = require("pg-transaction");

const pool = require("../DB/Connection");

exports.addInventory = async (req, res) => {
  try {
    var itemId = req.body.id;
    var Quantity = req.body.quantity;
    values = [itemId, Quantity];

    var query = DB_query.querylist.INSERT_Inventory_Query;
    await DB_connection.exQuery(query, values);
    return res.status(201).send("Success");
  } catch (err) {
    return res.status(500).send({ error: "failed  to save inventory" });
  }
};

exports.UpdateInventory = async (req, res) => {
  //   try {
  //     var itemId = req.body.id;
  //     var Quantity = req.body.quantity;
  //     var query_quantity = DB_query.querylist.GET_Quantity_Query;
  //     var result = await DB_connection.exQuery(query_quantity, [itemId]);

  //     Quantity = result.rows[0].inventory_quantity - Quantity;

  //     values = [itemId, Quantity];
  //     // console.log(Quantity);
  //     var query = DB_query.querylist.Update_Inventory_Query;
  //     await DB_connection.exQuery(query, values);
  //     return res.status(201).send("Success");
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).send({ error: "failed  to updaete inventory" });
  //

  var client = pool.connection;
  // var client2 = pool.connection;

  var querytext = DB_query.querylist.INSERT_Inventory_Query;
  var itemId = 22;
  var Quantity = 12;
  values = [itemId, Quantity];

  await client.query("BEGIN");
  var Query1 = await client.query(querytext, values);
  ///////////////////////////////////////
  var itemId = 10;
  var Quantity = 13;
  values = [itemId, Quantity];
  await client.query("BEGIN");
  var Query2 = await client.query(querytext, values);
  console.log(client);
  if (Query1 && Query2) {
    console.log("Okkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    await client.query("COMMIT");
  } else {
    console.log("ROLLBAck");
    await client.query("ROLLBACK");
  }

  return res.status(201).send("Success");
};
