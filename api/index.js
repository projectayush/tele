const express = require('express');
const bodyParser= require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require ('cors');
// const verifyToken = require('./src/Auth/auth'); 
// const jwtUniqueKey = require('jsonwebtoken');

// Create express app
const app = express();
app.use(cors());

// setup server port
const port= process.env.PORT || 5000;

// parse request data contentt type:application/urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/',(req, res)=>{
    res.send("Hello World");
});

// Set up Global configuration access
dotenv.config();

// import login routes
// const loginRoutes= require('./src/Login/login.route');
const departmentRoutes = require('./src/Department/dept.route');
const categoryRoutes = require('./src/Category/category.route');
const ticketRoutes = require('./src/Ticket/ticket.route');
const historyRoutes = require('./src/History/history.route');
const commentRoutes = require('./src/Comment/comment.route');
const otpRoutes = require('./src/OTP/otp.route');


// Frontend Routes
const registrationRoutes = require('./src/Frontend_api/Registration/registration.route');
const frontendLoginRoutes = require('./src/Frontend_api/Login/login.route');
const frontendOtpRoutes = require('./src/Frontend_api/OTP/otp.route');
const frontendTicketRoutes = require('./src/Frontend_api/Tickets/ticket.route');
const frontendCategoryRoutes = require('./src/Frontend_api/Categories/category.route')
const frontendDepartmentRoutes =  require('./src/Frontend_api/Departments/department.route');
const frontendHistoryRoutes = require('./src/Frontend_api/Histories/history.route');
const frontendCommentRoutes = require('./src/Frontend_api/Comments//comment.route');

// ADMIN ROUTES
// Login Routes
const loginRoutes = require('./src/Login/login.route');
app.use('/login', loginRoutes);

// Department Routes
app.use('/api/v1/departments',departmentRoutes);

// Category Routes
app.use('/api/v1/categories',categoryRoutes);

// Ticket Routes
app.use('/api/v1/ticket' , ticketRoutes);

// History Routes
app.use('/api/v1/history' , historyRoutes);

// Comments Routes
app.use('/api/v1/comments',commentRoutes);

// OTP Routes
app.use('/api/v1/otps' , otpRoutes);


// FRONTEND ROUTES

app.use('/api/v1/registration',registrationRoutes);
app.use('/loginfrontend', frontendLoginRoutes );
app.use('/api/v1/otps' , frontendOtpRoutes);
app.use('/api/ticket' , frontendTicketRoutes);
app.use('/api/category', frontendCategoryRoutes);
app.use('/api/department' , frontendDepartmentRoutes);
app.use('/api/history' , frontendHistoryRoutes);
app.use('/api/comment' , frontendCommentRoutes);

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})

