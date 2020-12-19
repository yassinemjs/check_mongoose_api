const express = require ('express');
const app =express();
const connectDB = require ('./config/connectDB')

app.use(express.json());

connectDB();

app.use('/contacts',require('./routes/contact'))
const port =process.env.PORT || 5000 ;



app.listen(port , err => err ?console.log(error):console.log(`connected on port ${port}`));