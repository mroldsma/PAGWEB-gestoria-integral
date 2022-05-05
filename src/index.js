// REQUIRING MODULES 
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')


// SETTINGS
const app = express()
const PORT = 5000
app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', handlebars.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')


// ROUTES
app.get('/', (req, res)=>{
  res.render('index', {rutadebootstrap: `${path.join(__dirname, '../node_modules/bootstrap/dist/js/bootstrap.min.js')}`})
})



// SERVER LISTENING
app.listen(PORT, ()=>{
  console.log('server listening on port: '+PORT)
})