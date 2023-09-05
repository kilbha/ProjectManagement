"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkJson = (req, res, next) => {
    const properjson = JSON.parse(req.body);
    if (!properjson) {
        res.status(400).json({ message: "Provide valid json" });
    }
    next();
};
exports.default = checkJson;
