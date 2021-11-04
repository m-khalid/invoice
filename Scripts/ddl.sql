-- DROP SCHEMA bms;

CREATE SCHEMA invoice;  


-- invoice.item definition

-- Drop table

-- DROP TABLE invoice.item;

CREATE TABLE invoice.item (
	item_id serial4 NOT NULL,
	item_name varchar(300) NOT NULL,
	item_description varchar(1000) NULL,
	item_price int4 NULL,
	item_code varchar(5) NOT NULL,
	item_image varchar(100) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT item_pkey PRIMARY KEY (item_id)
);

CREATE TABLE invoice.inventory(
   inventory_id INT GENERATED ALWAYS AS IDENTITY,
   item_id INT,
   inventory_quantity INT not null,
   PRIMARY KEY(inventory_id),
   CONSTRAINT fk_item
      FOREIGN KEY(item_id) 
	  REFERENCES invoice.item(item_id)
);


CREATE TABLE invoice.INheader(
   header_id INT GENERATED ALWAYS AS IDENTITY,
   header_code varchar(5) not null,
   created_on timestamp not null,
   PRIMARY KEY(header_id)
   
);



CREATE TABLE invoice.indetails(
   details_id INT GENERATED ALWAYS AS IDENTITY,
   header_id INT,
   details_name varchar(20) not null,
   details_price float,
   quantity INT,
   detail_amount INT,
   PRIMARY KEY(details_id),
   CONSTRAINT fk_inheader
      FOREIGN KEY(header_id) 
	  REFERENCES invoice.inheader(header_id)
);



