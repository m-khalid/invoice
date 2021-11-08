const pool = require("../DB/Connection");
var DB_query = require("../DB/Query");
var header = require("./headerController");
var client = pool.connection;

exports.addDetails = async (name, price, amount, quantity) => {
  var Header = await header.addHeader();

  if (Header) {
    values = [Header.header_id, name, price, amount, quantity];
    var QueryText = DB_query.querylist.INSERT_Details_Query;
    await client.query("BEGIN");
    var result = await client.query(QueryText, values);
    if (result) {
      await client.query("COMMIT");

      return JSON.stringify({ data: Object.assign(result.rows[0], Header) });
    } else {
      await client.query("ROLLBACK");
      return false;
    }
  } else {
    return false;
  }
};
