const Users = require('./User')
const UserController = {
    get: async (req,res) => {
       const User = await res.status(200).send('users')
    },
    list: async (req,res) => {
        res.status(200).send('Hola usuario')
    },
    create: async (req,res) => {
        res.status(201).send('Creando usuario')
    },
    update: async (req,res) => {
        res.status(204).send('Actualizando usuario')
    },
    destroy: async (req,res) => {
        res.status(204).send('Usuario eliminado')
    }
}

module.exports = UserController