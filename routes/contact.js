const express = require('express');
const router =express.Router();
const Contact =require('../models/Contact')

router.post('/add', (req,res) => {
const {name,email,phone,adress } =req.body;
const newContact = new Contact({name,email,phone,adress}) ;
newContact.save()
.catch(err =>console.log(err))
.then(list => res.send(list));
})

router.get('/all',(req,res)=>  {
Contact.find()
.catch(err =>console.log(err))
.then(list => res.send(list));
})

router.get('/:id',(req,res) => {
const {_id}= req.params
Contact.findOne({_id})
.catch(err =>console.log(err))
.then(list => res.send(list));
})

router.delete('/:_id',(req,res) => {
    const {_id}= req.params
    Contact.findOneAndDelete({ _id})
    .catch(err =>console.log(err))
    .then(list => res.send(list));
    })

router.put('/edit/:_id' ,(req,res)=> {
const {_id } = req.params ;
Contact.findOneAndUpdate({_id },{$set :{...req.body }} )
.catch(err =>console.log(err))
.then(list => res.send(list));
 })



module.exports=router;