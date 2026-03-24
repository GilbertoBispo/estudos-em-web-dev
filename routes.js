import { Router } from "express";
import { pessoas } from "./schema.js";
import { db } from "./db.js"

const router = Router();
    
router.get("/pessoas", async (req, res) => {
    // busca todos os registros da tabela "pessoas"
    const listaPessoas = await db.select().from(pessoas);
    res.status(200).json(listaPessoas);
});

router.post("/adicionar", async (req, res) => {
    let { nome, idade } = req.body;
    const [pessoa] = await db.insert(pessoas).values({nome, idade}).returning();

    res.status(201).json(pessoa);
});

export default router;