// console.log("I am Server File !!");

const express = require('express');
const { connectDB } = require('./config/db_config');
const dotenv = require("dotenv").config();
const colors = require('colors');
const { generateOtp } = require('./controllers/otpControllers');
// const products = require("./productsData")   // Comment For Backend-03 Lecture
const app = express()
const  PORT = process.env.PORT || 5000;

// DB Connection

connectDB();

// Body Parser
// For Remove Warning ---> extended : true

app.use(express.json());
app.use(express.urlencoded({
  extended : true
}));

// root directory

app.get('/', (req, res)=>{
  res.send("Welcome To Express API v1.0")
});


// For OTP API

app.get('/api/otp', generateOtp )

// products route
// app.get('/products', (req, res)=>{
//   // res.send("All Produc ts");

//   res.json({
//     products
//   });
// });

// Todo Routes

app.use('/api/todos', require('./routes/todoRoutes'))

// server
 
app.listen(PORT, ()=>{
  console.log( `Server is running at PORT : ${PORT}`.grey);
})
