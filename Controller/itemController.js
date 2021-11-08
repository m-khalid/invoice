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
    console.log(name);
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
    return res.status(500).send({ error: "failed  to save book" });
  }
};
