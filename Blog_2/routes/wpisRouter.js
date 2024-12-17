const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newWpis = await prisma.wpis.create({
      data: { title, content },
    });
    res.status(201).json(newWpis);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się utworzyć wpisu' });
  }
});

router.get('/', async (req, res) => {
  try {
    const wpisy = await prisma.wpis.findMany({ include: { comments: true, categories: true } });
    res.json(wpisy);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się pobrać wpisów' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const wpis = await prisma.wpis.findUnique({
      where: { id: parseInt(id) },
      include: { comments: true, categories: true },
    });
    if (wpis) res.json(wpis);
    else res.status(404).json({ error: 'Wpis nie istnieje' });
  } catch (error) {
    res.status(500).json({ error: 'Błąd pobierania wpisu' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedWpis = await prisma.wpis.update({
      where: { id: parseInt(id) },
      data: { title, content },
    });
    res.json(updatedWpis);
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się zaktualizować wpisu' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.wpis.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Wpis usunięty' });
  } catch (error) {
    res.status(500).json({ error: 'Nie udało się usunąć wpisu' });
  }
});

module.exports = router;