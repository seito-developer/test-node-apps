const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const userRoutes = require('./routes/user');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true, //Added with an error message
	useFindAndModify: false
})
.then(() => console.log('DB Connected!'))
.catch((err) => console.log('error', err));

//routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`server is running port ${port}`);
});


// // import mongoose
// const mongoose = require('mongoose');
// // load env variables
// const dotenv = require('dotenv');
// dotenv.config()
 
// //db connection
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true}
// )
// .then(() => console.log('DB Connected'))
 
// mongoose.connection.on('error', err => {
//   console.log(`DB connection error: ${err.message}`)
// });