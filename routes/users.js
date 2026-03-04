var express = require('express');
var router = express.Router();

let { dataUser } = require('../utils/data2');

router.get('/',function(req,res){
    res.send(dataUser);
});

router.get('/:username',function(req,res){

    let user = dataUser.find(
        e=>e.username==req.params.username
    );

    if(user){
        res.send(user);
    }else{
        res.status(404).send({message:"USER NOT FOUND"});
    }

});

router.post('/',function(req,res){

    let newUser=req.body;

    dataUser.push(newUser);

    res.send(newUser);
});

router.put('/:username',function(req,res){

    let user=dataUser.find(
        e=>e.username==req.params.username
    );

    if(!user){
        res.status(404).send({message:"USER NOT FOUND"});
        return;
    }

    Object.assign(user,req.body);

    user.updatedAt=new Date();

    res.send(user);
});

router.delete('/:username',function(req,res){

    let index=dataUser.findIndex(
        e=>e.username==req.params.username
    );

    if(index==-1){
        res.status(404).send({message:"USER NOT FOUND"});
        return;
    }

    res.send(dataUser.splice(index,1));
});

module.exports = router;