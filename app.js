var express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = 8000;
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');

  
// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{
    const Make_up_form= db.get('Make_up_form') || [];

    res.render('Demo',{
        data:Make_up_form
    })

});

app.get('/Add', function(req, res){ 
    res.render('Add');

});

app.post('/form', function(req, res){ 
      const {name, subject,section, assessment_name, quiz_or_test, Date_to_Make_up, Period_to_make_up}=req.body;
    const carList= db.get('drinkList') || [];
    carList.push({name, subject,section, assessment_name, quiz_or_test, Date_to_Make_up, Period_to_make_up});
    db.set('Make_up_form', Make_up_form)
    res.redirect('/Add');

        
    });
    app.get('/delete/:id', (req,res, next) => {

        const id = req.params.id;
        const drinkList =db.get('drinkList') || [];
        drinkList.splice(id,1);
        db.set("drinkList", drinkList);

        res.redirect('/');

    });
    app.get('/update/:id', (req,res, next) => {

        const id = req.params.id;
        const drinkList =db.get('drinkList') || [];
        const drink= drinkList[id];


        res.render('Update',{
            id,
            drink
        });

    });

    app.post('/edit/:id', (req,res)=>{
        const id = req.params.id;
        const {flavor,size,price}=req.body;

        const drinkList =db.get('drinkList') || [];
        drinkList[id]= {flavor,size,price};
        db.set('drinkList', drinkList);
       
        res.redirect('/update/'+id);

    })
    // Rendering our web page i.e. Demo.ejs 
    // and passing title variable through it 



  
app.listen(3000, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
}); 