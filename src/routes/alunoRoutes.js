import { Router } from "express";
import alunoController from "../Controller/AlunoController";

const router = new Router();

router.put('/novo-aluno', alunoController.index);

export default router;
