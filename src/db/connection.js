import mongoose from "mongoose";

export async function connectToDb() {
  return await mongoose.connect('mongodb://192.168.0.110:27017/personalPortfolio');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
