var express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = 3000;
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlincoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const Missing_work_form = db.get('Missing_work_form)') || [];
  res.render('Demo', { data: Missing_work_form})
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

app.listen(port, () => { 
  console.log("Server created Successfully") 
}) 
  