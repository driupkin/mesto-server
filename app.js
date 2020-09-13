const express = require('express');
const path = require('path');
// const cards = require('./data/cards.json');
const cards = require('./routes/cards');
const app = express();
const { PORT = 3000 } = process.env;
// app.use('/users', users);
app.use('/cards', cards);
// app.get('/cards', (req, res) => {
//   res.send(cards);
// });
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('...Works');
});