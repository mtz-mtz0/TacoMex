import { Request, Response, NextFunction } from "express";
import session from "express-session";
import cliente from "../types/cliente.type";
import SesionType from "../types/sesion.type";

declare module "express-session" {
  interface SessionData {
    user: cliente,
    idSesion:SesionType,
  }
}

export const sessionConfig = session({
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

export const sessionMiddleware = (req: Request, res: Response, next: NextFunction)=> {
  const {user,idSesion} =  req.session;
  console.log("a"+user);
  res.locals.user = user;
  res.locals.idSesion = idSesion;
  console.log("as"+req.session);
  next();
}
