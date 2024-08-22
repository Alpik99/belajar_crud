import express from "express";
import { deleteMahasiswaByNim, getMahasiswa, getMahasiswaByNim, postMahasiswa, updateMahasiswa } from "../controller/mahasiswaController.js";

const router = express.Router();

router.get("/", getMahasiswa); 
router.get("/find", getMahasiswaByNim)
router.post("/create", postMahasiswa)
router.put("/update", updateMahasiswa)
router.delete("/delete", deleteMahasiswaByNim)


export default router;