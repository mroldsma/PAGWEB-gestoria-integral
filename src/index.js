// REQUIRING MODULES 
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

// SETTINGS
const app = express()
const PORT = 5000

// app.engine('.hbs', hbs({

// }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))


// ROUTES
app.get('/', (req, res)=>{

})



// SERVER LISTENING
app.listen(PORT, ()=>{
  console.log('server listening on port: '+PORT)
})