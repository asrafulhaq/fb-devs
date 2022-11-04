import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import mongoDBConnect from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.js';

 


// init express 
const app = express();
dotenv.config();

 


// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser()); 

 
// init env variabels
const PORT = process.env.PORT || 8080;


// api routes 
app.use('/api/v1/user', userRoute);



// express error handler 
app.use( errorHandler );

// listen server 
app.listen(PORT, () => {
    mongoDBConnect();
    console.log(`server running on port ${ PORT }`.bgGreen.black);
});