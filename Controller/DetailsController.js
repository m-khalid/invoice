const pool = require("../DB/Connection");
var DB_query = require("../DB/Query");
var header = require("./headerController");
var client = pool.connection;

exports.addDetails = async (Requests) => {
  var Header = await header.addHeader();
  if (Header) {
    for (var i in Requests) {
      values = [
        Header.header_id,
        Requests[i].name,
        Requests[i].price,
        Requests[i].amount,
        Requests[i].quantity,
      ];

      var QueryText = DB_query.querylist.INSERT_Details_Query;
      await client.query("BEGIN");
      var result = await client.query(QueryText, values);
    }
    if (result) {
      await client.query("COMMIT");

      return Header;
    } else {
      await client.query("ROLLBACK");
      return false;
    }
  } else {
    return false;
  }
};

exports.UpdateDetails = async (ID, Requests) => {
  values = [
    ID,
    Requests.name,
    Requests.price,
    Requests.amount,
    Requests.quantity,
  ];
  var QueryText = DB_query.querylist.UPDATE_Invoice_Query;
  if (await client.query(QueryText, values)) {
    return true;
  }
  return false;
};
