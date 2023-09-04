"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class usercontroller {
    constructor() {
        this.get_users = (req, res) => {
            res.json({ message: "users get api is working.." });
        };
        this.create_user = (req, res) => {
            res.json({ message: "users post api is working.." });
        };
        this.update_user = (req, res) => {
            res.json({ message: "users update api is working.." });
        };
        this.delete_user = (req, res) => {
            res.json({ message: "users delete api is working.." });
        };
    }
}
exports.default = usercontroller;
