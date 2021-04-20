  
const { Usuario } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        let usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', {listaUsuarios:usuarios});
    },
    create: async (request, response) => {
        let {nome, email, senha} = request.body;

        let novoUser = await Usuario.create({ nome, email, senha });

        return response.json(novoUser);
    },
    update: async (request, response) => {
        const { id } = request.params;
        const { nome, email, senha } = request.body;

        const usuarioAtualizado = await Usuario.update({
            nome, 
            email, 
            senha
        }, {
            where: { id }
        })

        return response.send(usuarioAtualizado);
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const usuarioDeconstado = await Usuario.destroy({
            where: {id}
        });

        return response.json(usuarioDeconstado);
        
    }
}

module.exports = usuariosController;