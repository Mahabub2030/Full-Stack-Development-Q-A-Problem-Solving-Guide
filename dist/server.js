"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const config_1 = __importDefault(require("./config"));
const server = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.database_url);
        console.log("Database connected successfully");
        app_1.app.listen(config_1.default.port, () => {
            console.log(`Server is running on http://localhost:${config_1.default.port}`);
        });
    }
    catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process with failure
    }
};
server();
