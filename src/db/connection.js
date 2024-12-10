import mongoose from "mongoose";

export async function connectToDb() {
  return await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
