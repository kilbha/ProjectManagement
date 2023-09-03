import express, { Request, Response } from "express";
import userRouter from "./routes/userRoute";
import dotenv from "dotenv";
import connectDB from "./utils/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

//Define routes
app.use("/api/users", userRouter);

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, () => {
      resolve(server);
    });
    server.on("error", (error) => {
      reject(error);
    });
  });
};

connectDB();

startServer()
  .then(() => {
    console.log(`users microservice is running successfully on port ${PORT}`);
  })
  .catch((err) => {
    console.log(`Error starting server ${err.message}`);
  });
