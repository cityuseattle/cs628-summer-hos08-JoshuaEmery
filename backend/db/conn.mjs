import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  console.log("Connecting to MongoDB");
  console.log(connectionString);
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("hos08");

export default db;