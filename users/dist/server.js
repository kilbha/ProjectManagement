"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./utils/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
//Define routes
app.use("/api/users", userRoute_1.default);
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
(0, db_1.default)();
startServer()
    .then(() => {
    console.log(`users microservice is running successfully on port ${PORT}`);
})
    .catch((err) => {
    console.log(`Error starting server ${err.message}`);
});
