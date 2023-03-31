const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/terms', (req, res) => {
    res.render('terms')
})
app.get('/privacy', (req, res) => {
    res.render('privacy')
})

app.listen(port , (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('listening on port', port)
    }
})