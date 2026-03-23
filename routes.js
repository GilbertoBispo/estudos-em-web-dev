import { Router } from "express";
const router = Router();

router.get("/ola", (req, res) => {
    res.status(200).json({message: "olá, mundo!"});
});

export default router;