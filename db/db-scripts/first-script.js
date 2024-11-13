#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE categories (
    category_id SERIAL,
    brand TEXT UNIQUE,
    description TEXT
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

// INSERT INTO categories (brand, description)
// VALUES
//   ('ZKC', 'Chinese'),
//   ('Uesaka', 'Japanese'),
//   ('Rogue', 'American');
