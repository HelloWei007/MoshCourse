const express = require('express');
const app = express();
const logger = (require('./middleware/logger'));
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const router_courses = require('./routes/courses');
const router_home = require('./routes/home');
/**************really usefull, have to use envionrment variables*/
//const startupDebugger = require('debug')('app:startup');
//const dbDebugger = require('debug')('app:db');

/***templating engines : Pug,Mustache,EJS */
app.set('view engine','pug'); /**no need requiere */
app.set('views','./views'); //default

console.log(`env: ${process.env.NODE_ENV}`);
//console.log(`env: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded( { extended : true})); //?KEY = VALUE
app.use(express.static('public')); //REDIRECT
app.use(helmet());
app.use('/api/courses', router_courses);
app.use('/', router_home);
//window set the env with  $env:NODE_ENV="development" 
//if you are on powershell
console.log('application name: ' + config.get('name'));
console.log('mail server: ' + config.get('mail.host'));
//console.log('mail password: ' + config.get('mail.password'));


if(app.get('env') === 'development'){
    app.use(morgan('tiny')); //LOG ON TERMINAL *ONLY FOR DEV
    console.log('morgan enable');
    //on terminal change to production
    //set NODE_ENV=production
}


app.use(logger.log);
app.use(logger.aut);

const port = process.env.PORT ||3000;

app.listen(port,()=> console.log(`listening on port ${port}`));


