exports.querylist = {
  INSERT_Item_Query: `INSERT INTO invoice.item
(item_name, item_description, item_price, item_code, item_image, created_on, created_by)
VALUES($1, $2, $3, $4, $5, $6, $7);
`,
  INSERT_Inventory_Query: `INSERT INTO invoice.inventory
(item_id, inventory_quantity)
VALUES($1, $2);
`,

  Update_Inventory_Query: `update
	invoice.inventory
set
	inventory_quantity = $2
where
	item_id = $1;
`,

  GET_Quantity_Query: `SELECT  inventory_quantity
FROM invoice.inventory where item_id =$1;`,

  INSERT_Header_Query: `INSERT INTO invoice.inheader
(header_code, created_on)
VALUES($1, $2) RETURNING *;
`,

  INSERT_Details_Query: `INSERT INTO invoice.indetails
(header_id, details_name, details_price, detail_amount, quantity)
VALUES($1, $2, $3, $4, $5) RETURNING *;`,
};
