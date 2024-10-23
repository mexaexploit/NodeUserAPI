const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express();
const port = 3000;
app.use(express.json())

mongoose.connect('mongodb+srv://username:passwd83@cluster0.e5ulx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.get('/',user.list)
app.post('/',user.create)
app.get('/', user.get)
app.put('/', user.update)
app.patch('/', user.update)
app.delete('/', user.destroy)
app.get('*',(req,res) => {
    res.status(404).send('Esta pagina no existe...')
})

app.listen(port, () => {
    console.log('Arrancando aplicacion...')
})
