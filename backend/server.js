const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const firebaseConfig = {
  apiKey: "AIzaSyCQPCrtmqY9nReMMckwQ6NQEfNDrYrKLzU",
  authDomain: "granf1.firebaseapp.com",
  projectId: "granf1",
  storageBucket: "granf1.appspot.com",
  messagingSenderId: "928053767108",
  appId: "1:928053767108:web:839aa05d26e9f7afa25291",
  measurementId: "G-G38TPS4L60"
};

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

app.listen(6000);