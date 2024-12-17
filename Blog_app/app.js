const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/post', async (req, res) => {
  const { title, content, categoryId } = req.body;
  try {
    const post = await prisma.post.create({
      data: { title, content, categoryId },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
