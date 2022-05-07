// REQUIRING MODULES 
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')


// SETTINGS
const app = express()
const PORT = 5000

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// ROUTES
app.get('/', (req, res)=>{
  res.render('index')
})



// SERVER LISTENING
app.listen(PORT, ()=>{
  console.log('server listening on port: '+PORT)
})