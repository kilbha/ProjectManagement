import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.mongoURI!)
    .then(() => {
      console.log("connected to mongodb successfully");
    })
    .catch((error) => {
      console.log("Error connecting to mongodb", error.message);
    });
};

export default connectDB;
