#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
UPDATE categories SET description = 'Text here' WHERE category_id = (category_id here)
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
