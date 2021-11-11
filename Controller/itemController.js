var DB_connection = require("../DB/Connection");
var DB_query = require("../DB/Query");
var randomstring = require("../util/utility");
const uploadFile = require("../middleware/uploadfile");

exports.addItem = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    var name = req.body.name;
    var price = req.body.price;
    var description = req.body.description;
    var image = req.file.path;
    var code = randomstring.generateStoreCode();
    var createdOn = new Date();
    var createdBy = "admin";
    values = [name, description, price, code, image, createdOn, createdBy];
    var query = DB_query.querylist.INSERT_Item_Query;
    result = await DB_connection.exQuery(query, values);
    return res.status(201).send("Success");
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "failed  to save Item" });
  }
};

exports.getItem = async (req, res) => {
  try {
    var name = req.params.name;
    var Query = DB_query.querylist.GET_Item_Query;
    var result = await DB_connection.exQuery(Query, [name]);
    if (result.rows[0] != undefined) {
      result.rows[0].item_image = "D:invoice/" + result.rows[0].item_image;
      console.log(result.rows[0].item_image);
    } else {
      return res.status(401).send({ msg: "not found " });
    }
    return res.status(200).send({ data: result.rows[0] });
  } catch (err) {
    return res.status(500).send({ error: "failed  to get Item" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    var name = req.params.name;
    var Query = DB_query.querylist.Delete_Item_Query;
    await DB_connection.exQuery(Query, [name]);
    return res.status(200).send("Success");
  } catch (err) {
    return res.status(500).send({ error: "failed  to Delete Item" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    var id = req.params.id;
    var name = req.body.name;
    var price = req.body.price;
    var description = req.body.description;
    var image = req.file.path;
    var code = randomstring.generateStoreCode();
    var createdOn = new Date();
    var createdBy = "admin";
    values = [name, description, price, code, image, createdOn, createdBy, id];
    var Query = DB_query.querylist.Update_Item_Query;
    await DB_connection.exQuery(Query, values);
    return res.status(200).send("Success");
  } catch (error) {
    return res.status(500).send({ error: "failed  to Update Item" });
  }
};
