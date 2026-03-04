var express = require('express');
var router = express.Router();

let { dataRole, dataUser } = require('../utils/data2');

router.get('/', function(req,res){
    res.send(dataRole);
});

router.get('/:id', function(req,res){
    let role = dataRole.find(e => e.id == req.params.id);

    if(role){
        res.send(role);
    }else{
        res.status(404).send({message:"ROLE NOT FOUND"});
    }
});

router.post('/', function(req,res){

    let newRole = {
        id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        creationAt:new Date(),
        updatedAt:new Date()
    }

    dataRole.push(newRole);

    res.send(newRole);
});

router.put('/:id', function(req,res){

    let role = dataRole.find(e => e.id == req.params.id);

    if(!role){
        res.status(404).send({message:"ROLE NOT FOUND"});
        return;
    }

    Object.assign(role,req.body);
    role.updatedAt=new Date();

    res.send(role);
});

router.delete('/:id', function(req,res){

    let index = dataRole.findIndex(e => e.id == req.params.id);

    if(index==-1){
        res.status(404).send({message:"ROLE NOT FOUND"});
        return;
    }

    res.send(dataRole.splice(index,1));
});


/* API yêu cầu */
router.get('/:id/users',function(req,res){

    let users = dataUser.filter(
        e => e.role.id == req.params.id
    );

    res.send(users);
});

module.exports = router;