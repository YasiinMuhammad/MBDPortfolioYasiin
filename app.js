require("dotenv").config();

const express = require('express');
const cors = require('cors')

const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

// Mongoose Connection

const db = require("./config/connection.js");

db(process.env.MONGODB_URI || "mongodb://localhost/yasiinPort");
   
// Body Parser Middleware
app.use(express.static(path.join(__dirname, '../my-portfolio')));
 
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use( bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));

app.use(express.static("app/build"));

app.use(require("./routes/email"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

app.get('/', (req, res) => res.send('Hello World with Express')); 


app.listen(port, () => console.log(`Server running on port ${port}`));