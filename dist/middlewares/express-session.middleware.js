"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = exports.sessionConfig = void 0;
const express_session_1 = __importDefault(require("express-session"));
exports.sessionConfig = (0, express_session_1.default)({
    name: "session-cookie",
    secret: "secreto123",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        signed: true,
        maxAge: 5 * (60 * 1000),
    },
});
const sessionMiddleware = (req, res, next) => {
    const { user, idSesion } = req.session;
    console.log("a" + user);
    res.locals.user = user;
    res.locals.idSesion = idSesion;
    console.log("as" + req.session);
    next();
};
exports.sessionMiddleware = sessionMiddleware;
