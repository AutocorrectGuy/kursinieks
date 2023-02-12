"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const BUILD_PATH = path_1.default.join(__dirname, 'build/');
app.use(express_1.default.static(BUILD_PATH));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(BUILD_PATH, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`⚡️Listening to port ${PORT}`);
});
