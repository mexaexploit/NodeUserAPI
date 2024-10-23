const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://username:passwd@cluster0.e5ulx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model('user', {
    Username: String,
    edad : Number,
})

const crear = async () => {
    const user = new User({Username: 'Perro',edad: 28})
    const saveUser = await user.save()
    console.log(saveUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({Username: 'Perro'})
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({Username: 'Canario'})
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({Username: 'Canario'})
    console.log(user)
    user.edad = 30
    await user.save()
    console.log(user)

}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({Username: 'Perro'})
    console.log(user)
    await user.remove()
    console.log(user)
}

eliminar()