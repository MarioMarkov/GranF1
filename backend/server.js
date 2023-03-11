const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const dotenv = require("dotenv")
var cors = require('cors')
const path = require('path')
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors())


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Connected to Mongoose'))



app.use('/api', routes);



// Serve static assets in production
// if (process.env.NODE_ENV == 'production') { 
//   // Set static folder
//   app.use(express.static('../build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
//   })
// }

const PORT = process.env.PORT || 6000;

app.listen(PORT);