"use server"
import { connectToDb } from "@/db/connection";

export async function testDbConnection() {
  const connectionStatus = await connectToDb();
  console.log("Database connection successful");
}
