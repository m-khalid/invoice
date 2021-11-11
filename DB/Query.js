exports.querylist = {
  INSERT_Item_Query: `INSERT INTO invoice.item (item_name, item_description, item_price, item_code, item_image, created_on, created_by)
VALUES($1, $2, $3, $4, $5, $6, $7);`,

  INSERT_Inventory_Query: `INSERT INTO invoice.inventory (item_id, inventory_quantity) VALUES($1, $2);`,

  Update_Inventory_Query: `update invoice.inventory set inventory_quantity = $2 where item_id = $1;`,

  GET_Quantity_Query: `SELECT  inventory_quantity FROM invoice.inventory where item_id =$1;`,

  INSERT_Header_Query: `INSERT INTO invoice.inheader (header_code, created_on) VALUES($1, $2) RETURNING *;`,

  GET_Invoice_Query: `select details_name,details_price,detail_amount,quantity,created_on from invoice.inheader inner join invoice.indetails on inheader.header_id = indetails.header_id where inheader.header_id=$1 ;`,

  DELETE_Invoice_Query: `delete  from invoice.inheader where header_id =$1 ;`,

  INSERT_Details_Query: `INSERT INTO invoice.indetails
(header_id, details_name, details_price, detail_amount, quantity)
VALUES($1, $2, $3, $4, $5) RETURNING *;`,

  GET_Item_Query: `SELECT
	item.item_id, item_name, item_description, item_price, item_code, item_image, created_on, created_by,inventory.inventory_quantity
FROM
	invoice.item 
INNER JOIN invoice.inventory 
    ON item.item_id = inventory.item_id WHERE item.item_name=$1;`,

  Delete_Item_Query: `  DELETE FROM invoice.item WHERE item_name=$1;`,

  Update_Item_Query: ` UPDATE invoice.item SET item_name=$1, item_description=$2, item_price=$3, item_code=$4, item_image=$5, created_on=$6, created_by=$7
WHERE item_id=$8;`,

  Delete_Inventory_Query: `DELETE FROM invoice.inventory WHERE inventory_id=$1;`,

  GEt_Inventory_Query: `SELECT inventory_id, item_id, inventory_quantity FROM invoice.inventory where inventory_id =$1 ;`,

  UPDATE_Invoice_Query: `UPDATE invoice.indetails SET  details_name=$2, details_price=$3, detail_amount=$4, quantity=$5
WHERE details_id =$1;
`,
};
