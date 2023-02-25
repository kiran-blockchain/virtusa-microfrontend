const bodyParser = require('body-parser');
const express = require('express');
const { validate } = require('./controllers/user.controller');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(validate);
app.use(require('./routes/auth.routes'));

app.listen("3000")