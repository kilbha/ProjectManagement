import express, { Request, Response } from "express";
import userRouter from "./routes/userRoute";

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

startServer()
  .then((server) => {
    console.log(`Server is running successfully on port ${PORT}`);
  })
  .catch((err) => {
    console.log(`Error starting server ${err.message}`);
  });
