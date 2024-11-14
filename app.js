const express = require('express')
const app = express(); 
const dbConnect = require('./db/config/connection'); 
dbConnect(); 
const personRoutes = require('./routes/person.routes')
const menuRoutes = require('./routes/menu.routes')

const dotenv = require('dotenv'); 
dotenv.config(); 

const port = process.env.PORT || 4044

app.use(express.json()); 
app.use('/person',personRoutes)
app.use('/menu', menuRoutes)


app.listen(port); 