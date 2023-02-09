const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mario123:m112001@my-blog.cn5yytl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Connected to Mongoose'))

app.use('/api', routes);
//app.use(express.static('public'))

app.use('/public/images', express.static('images'));

app.listen(5000);