import { Router } from "express";
import { getNotas, postNotas, deleteNotas, updateNotas, updateFavorito, getNotasFavoritas } from "../controllers/notas.controller";
const router = Router();

router.get('/notas', getNotas);
router.post('/notas', postNotas);
router.post('/deleteNotas', deleteNotas);
router.put("/updateNotas", updateNotas);
router.put("/updateFavorito", updateFavorito);
router.get("/notasFavoritas", getNotasFavoritas);



export default router;