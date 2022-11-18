const express = require('express');
const morgan = require('morgan')
const app = express();

function logger(req, res, next){
    console.log('Route received:' + req.protocol + '://' +req.get('host') + req.originalUrl); 
    next ();
}
//Settings

app.set('appName','Tutorial');
app.set('port', 3000);

//Middlewares

app.use(express.json());
app.use(morgan('dev'));

//Routes

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log('server on port', app.get('port'));
});

