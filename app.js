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

app.post('/Missing_Work', (req, res) => {
    Missing_work_form.push((User_name, subject, period, Assesment_name, Quiz_or_test, Date_to_make_up, period_to_make_up));

    db.set('Missing_work_form', Missing_work_form);

    res.redirect('/')

});


app.get('/delete/:id', (req,res, next) => {
  const id = req.params.id;

  const Missing_work_form = db.get('Missing_work_form') || [];
  Missing_work_form.splice(id, 1);
  db.set(`Missing_work_form`, Missing_work_form); 

  res.redirect('/');

});

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;

  const Missing_work_form = db.get('Missing_work_form') || [];
  Missing_work_form.splice(id, 1);
  db.set(`Missing_work_form`, Missing_work_form); 

  res.redirect('/edit');

});

app.get('create', (req, res) => {
  res.render('/home');

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  