import express, { Request, Response } from "express";
import userRouter from "./routes/userRoute";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import morgan from "morgan";
import helmet from "helmet";
import emailRouter from "./routes/emailRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

//Define routes
app.use("/api/users", userRouter);
app.use("/api/email", emailRouter);

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
