const express = require('express');
const path = require('path');
const app = express();
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlincluded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const Donutform = db.get('Donutform') || [];
  res.render('Demo', { data: Donutform });
});

app.post('/Donut', (req, res) => {
    Donutform.push((Flavor, Topping, Price));

    db.set('Donutform', Donutform);

    res.redirect('/')

});


app.get('/delete/:id', (req,res, next) => {
  const id = req.params.id;

  const Donutform = db.get('Donutform') || [];
  Donutform.splice(id, 1);
  db.set(`Donutform`, Donutform); 

  res.redirect('/create');

});

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;

  const Donutform = db.get('Donutform') || [];
  Donutform.splice(id, 1);
  db.set(`Donutform`, Donutform); 

  res.redirect('/edit');

});

app.get('create', (req, res) => {
  res.render('/home');

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  