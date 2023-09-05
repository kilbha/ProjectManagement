"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valid_bson_id = (req, res, next) => {
    const bsonIDPattern = /^[0-9a-fA-F]{24}$/;
    if (!bsonIDPattern.test(req.params.id)) {
        return res.status(400).json({ message: "Provide valid Bson Id" });
    }
    next();
};
exports.default = valid_bson_id;
