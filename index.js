const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 3000;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  // res.render('index.js');
});

app.get('/api', (req, res) => {
  // res.json({"msg": "Hello world"});
  res.json({"msg": "hi this is my new project"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})