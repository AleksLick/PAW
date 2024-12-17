const express = require('express');
const wpisRouter = require('./routes/wpisRouter');
const kategoriaRouter = require('./routes/kategoriaRouter');
const komentarzRouter = require('./routes/komentarzRouter');

const app = express();

app.use(express.json());

app.use('/wpis', wpisRouter);
app.use('/kategoria', kategoriaRouter);
app.use('/komentarz', komentarzRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
