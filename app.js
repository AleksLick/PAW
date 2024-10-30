const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: '',       
  database: 'kremowka_db', 
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z bazą danych MySQL');
  }
});

app.use('/static', express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/o-nas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/o-nas.html'));
});
app.get('/oferta', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/oferta.html'));
});
app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/kontakt.html'));
});

app.post('/kontakt', (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  const query = `INSERT INTO messages (firstName, lastName, email, message) VALUES (?, ?, ?, ?)`;
  db.query(query, [firstName, lastName, email, message], (err, results) => {
    if (err) {
      console.error('Błąd zapisu wiadomości do bazy danych:', err);
      res.status(500).send('Wystąpił błąd podczas zapisywania wiadomości.');
    } else {
      console.log('Wiadomość zapisana w bazie danych:', results);
      res.redirect('/');
    }
  });
});

app.get('/api/contact-messages', (req, res) => {
  db.query('SELECT * FROM messages', (err, results) => {
    if (err) {
      console.error('Błąd pobierania wiadomości:', err);
      res.status(500).send('Wystąpił błąd podczas pobierania wiadomości.');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/contact-messages/:id', (req, res) => {
  const messageId = req.params.id;
  db.query('SELECT * FROM messages WHERE id = ?', [messageId], (err, results) => {
    if (err) {
      console.error('Błąd pobierania wiadomości:', err);
      res.status(500).send('Wystąpił błąd podczas pobierania wiadomości.');
    } else if (results.length === 0) {
      res.status(404).send('Wiadomość o podanym ID nie została znaleziona.');
    } else {
      res.json(results[0]);
    }
  });
});

app.get('/o-nas/static/:filename', (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, 'public/static', filename);
  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send('Zdjęcie nie zostało znalezione');
    }
  });
});

const port = 2137;
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
