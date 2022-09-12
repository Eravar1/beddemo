//Monolith
var express = require("express");
var app=express()
var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({extended:true})
app.use(bodyParser.json());
app.use(urlencodedParser);

const users = require("../model/users")

// app.get("/test/", function(req, res){
//     res.status(201).send({message:"GET request recieved"});
// })

// app.get("/abcdefg/:test/:id2", function(req, res){
//     let savedID = req.params.id2;
//     res.send({message:savedID})
// })

app.get("/getAllUsers/", function(req,res){
    users.getAllUsers(function(err,result){
        if(err){
            res.status(500).send({"Error":"Internal Server Error"})
        } else{
            console.log(result)
            res.status(200).send(result);
        }
    })
})

//Endpoint 2
app.get("/getUser/:id", function(req,res){
    let userid = req.params.id;
    users.getUser(userid, function(err,result){
        if(err){
            res.status(500).send({"Error":"Internal Server Error"})
        } else{
            console.log(result)
            res.status(200).send(result);
        }
    })
})


module.exports = app;