const express=require('express');
require('./model/db');
const app=express();
const controllers=require('./controllers/mainControllers')
var bodyParser = require('body-parser')
const PORT = process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.render('main.ejs')
})
app.post('/pushPunch/:id',controllers.addPunches);
app.get('/listall',controllers.list);
// list24Hrs

app.listen(PORT,()=>{

    console.log("node runnig");
})