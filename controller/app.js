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
            res.status(200).send(result);
        }
    })
})

//Endpoint 3 (Create User)
app.post("/createUser/", function(req,res){
    users.createUser(req.body, function(err,result){
        if(err){
            console.log(err)
            res.status(500).send({"Error":"Internal Server Error"})
        } else{
            res.status(200).send(result)
        }
    });
})

//Endpoint 4 (Delete User)
app.delete("/deleteUser/:id", function(req,res){
    let userid = req.params.id
    users.deleteUser(userid, function(err,result){
        if(err){
            res.status(500).send({"Error":"Internal Server Error"})
        } else{
            res.status(200).send(result)
        }
    });
})

//Endpoint 4 (Delete User)
app.put("/updateUser/:id", function(req,res){
    let userid = req.params.id;
    users.updateUser(userid, req.body, function(err,result){
        if(err){
            console.log(err)
            res.status(500).send({"Error":"Internal Server Error"})
        } else{
            res.status(200).send(result)
        }
    });
})



module.exports = app;