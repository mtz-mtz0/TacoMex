import { Router } from "express";
import {indexMenu} from "../controllers/menu";

const MenuRouter=Router();


MenuRouter.get("/view", indexMenu);

//MenuRouter.get("/",readMenu);

export default MenuRouter;