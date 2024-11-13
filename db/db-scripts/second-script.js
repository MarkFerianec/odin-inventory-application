#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    brand TEXT,
    gender TEXT,
    type TEXT,
    quantity INTEGER,
    price INTEGER,
    FOREIGN KEY (brand)
    REFERENCES categories(brand)
    ON DELETE CASCADE
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
