"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbService_1 = __importDefault(require("./utils/dbService"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const emailRoute_1 = __importDefault(require("./routes/emailRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const corsOptions = {
  origin: ["http://localhost:4200"],
};
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(corsOptions));
//Define routes
app.use("/api/users", userRoute_1.default);
app.use("/api/email", emailRoute_1.default);
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
(0, dbService_1.default)();
startServer()
  .then(() => {
    console.log(`users microservice is running successfully on port ${PORT}`);
  })
  .catch((err) => {
    console.log(`Error starting server ${err.message}`);
  });
