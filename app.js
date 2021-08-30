var express=require("express");
var bodyParser=require("body-parser");
  
function validateEmail (emailAddress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iServerDB');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()
app.use(express.static(__dirname)); 
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up', function(req,res){
    var countryres = req.body.countryres;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email =req.body.email;
    var pass = req.body.password;
    var conpass = req.body.conpassword;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var city = req.body.city;
    var statepr = req.body.statepr;
    var zip = req.body.zip;
    var phone =req.body.phone;
  
    var valid = validateEmail(email);

    if ( valid == true ) {
        if ( pass == conpass ) {
            var data = {
                "countryres": countryres,
                "firstname": firstname,
                "lastname": lastname,
                "email":email,
                "password":pass,
                "address1":address1,
                "address2":address2,
                "city":city,
                "state_pr":statepr,
                "zip":zip,
                "phone":phone
            }
        }
        else {
            throw new Error('Password are not the same!');
        }
    }
    else {
        throw new Error('Email not valid!');
    }

    
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})
  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('index.html');
}).listen(3000)
  
  
console.log("server listening at port 3000");