const mongoose =require('mongoose');
const schema =mongoose.Schema;

const ContactSchema = new schema ({
name :{type :String} ,
email :{type:String},
phone :{type :Number} ,
adress :{type :String}
})

module.exports =Contact=mongoose.model('contacts',ContactSchema);