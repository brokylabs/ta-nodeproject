// Defines Packages

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

const app           = express();
const mahasiswa     = require('./api.routes')

// Define PORT
const port          = 3000;

// Connect to database mongoDB 
mongoose.connect('mongodb://localhost/mahasiswa', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex : true
});

// parse any HTTP Request / x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));


// Routing API
app.get('/', function(req, res){
    res.send('Home Page')
});
app.use('/api', mahasiswa);



// App Listen / running
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

