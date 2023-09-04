"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkJson = (req, res, next) => {
    const properjson = JSON.parse(JSON.stringify(req.body));
    console.log(properjson);
    next();
};
exports.default = checkJson;
