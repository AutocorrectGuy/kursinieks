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
const BUILD_DIR = 'frontend/build';
app.use(express_1.default.static(BUILD_DIR));
app.get('*', (req, res) => {
    console.log(`Hello visitor on port ${process.env.PORT}`);
    res.sendFile(path_1.default.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`⚡️Listening to port ${PORT}`);
});
