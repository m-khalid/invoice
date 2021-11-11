const pool = require("../DB/Connection");
var util = require("../util/utility");
var DB_query = require("../DB/Query");
var client = pool.connection;

exports.addHeader = async () => {
  var date = new Date();
  var code = util.generateStoreCode();
  values = [code, date];
  var QueryText = DB_query.querylist.INSERT_Header_Query;
  await client.query("BEGIN");
  var result = await client.query(QueryText, values);
  if (result) {
    return result.rows[0];
  } else {
    return false;
  }
};

exports.GetByHeader = async (ID) => {
  var QueryText = DB_query.querylist.GET_Invoice_Query;
  var result = await pool.exQuery(QueryText, [ID]);
  return result.rows;
};

exports.DeleteByHeader = async (ID) => {
  var QueryText = DB_query.querylist.DELETE_Invoice_Query;
  if (await pool.exQuery(QueryText, [ID])) {
    return true;
  }
  return false;
};
