const express=require("express");
const exphbs=require('express-handlebars');
const path=require("path");
const morgan = require('morgan');
// initializations:
const app=express();

//settings:
app.set('port',process.env.PORT || 4000); // indicamos que reciba lo que este en la variable de entorno PORT si es que hay si no al 4000
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');

//middlewares:
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//global variables:

//routes:
app.use(require('./routes/articulos.routes'));
app.use(require('./routes/index.routes'));


//static files:
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;