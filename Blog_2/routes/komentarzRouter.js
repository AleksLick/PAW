const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { content, wpisId } = req.body;
  try {
    const newKomentarz = await prisma.komentarz.create({
      data: { content, wpis: { connect: { id: parseInt(wpisId) } } },
    });
    res.status(201).json(newKomentarz);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się dodać komentarza' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.komentarz.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Komentarz usunięty' });
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć komentarza' });
  }
});

module.exports = router;
