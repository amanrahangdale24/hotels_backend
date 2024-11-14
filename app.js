const express = require('express')
const app = express(); 
const dbConnect = require('./db/config/connection'); 
dbConnect(); 
const personRoutes = require('./routes/person.routes')
const menuRoutes = require('./routes/menu.routes')


app.use(express.json()); 
app.use('/person',personRoutes)
app.use('/menu', menuRoutes)


app.listen(4044); 