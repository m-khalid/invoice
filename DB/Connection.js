const dotenv = require("dotenv");
const { query } = require("express");
dotenv.config();

const { Pool, Client } = require("pg");
var pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
exports.connection = pool;
pool.connect(() => {
  console.log("data base is connected");
});
// exports.exQuery = (queryText, queryParams) => {
//   return new Promise((resolve, reject) => {
//     pool
//       .query(queryText, queryParams)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

exports.exQuery = async (queryText, queryParams) => {
  try {
    var result = await pool.query(queryText, queryParams);
    return result;
  } catch (err) {
    return err;
  }
};

function connection() {
  pool.connect(() => {
    console.log("data base is connected");
  });
}
