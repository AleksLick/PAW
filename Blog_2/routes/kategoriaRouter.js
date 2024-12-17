const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newKategoria = await prisma.kategoria.create({
      data: { name },
    });
    res.status(201).json(newKategoria);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się utworzyć kategorii' });
  }
});

router.get('/', async (req, res) => {
  try {
    const kategorie = await prisma.kategoria.findMany();
    res.json(kategorie);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się pobrać kategorii' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.kategoria.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Kategoria usunięta' });
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć kategorii' });
  }
});

module.exports = router;
