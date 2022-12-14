"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_1 = require("../controllers/menu");
const MenuRouter = (0, express_1.Router)();
MenuRouter.get("/view", menu_1.indexMenu);
//MenuRouter.get("/",readMenu);
exports.default = MenuRouter;
//# sourceMappingURL=menu.js.map