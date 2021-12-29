import { Router } from "express";
import homeController from "../Controller/HomeController";

const router = new Router();

router.get('/', homeController.index);

export default router;
