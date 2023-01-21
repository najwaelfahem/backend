const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const articleRoute = require('./Route/articleRoute.js');
const routeAvis = require('./routeAvis/routeAvis.js');
app.use(express.json());
app.use(cors());
app.use('/',articleRoute);
 app.use('/',routeAvis);
const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://najwa:123@cluster0.new98a8.mongodb.net/?retryWrites=true&w=majority")
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
  connectDB()
const PORT = 8800
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})