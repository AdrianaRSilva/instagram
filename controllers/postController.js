  
const { Post} = require('../models/');

const postController = {
    index: async (request, response) => {
        let posts =  await Post.findAll();
        
        return response.json(posts);
    },
    create: async (rnpmequest, response) => {
        let {texto, img, n_likes} = request.body;

        let novoPost = await Post.create({
            texto, img, n_likes:0
        });

        return response.json(novoPost);
    },
    update: async (request, response) => {
        let {id} = request.params;
        let { texto, img, n_likes } = request.body;

        let atuliazarPost = await posts.update({
            texto, img, n_likes
        },{ 
        where: {id}
        
        })
        return response.json(atuliazarPost);
    },

delete: async (request, response)  => {
    const {id} = request.params;

    const postDel = await Post.destroy({
        where: {id}
    });

    return response.json(postDel);
},

show: async(request, response) =>{
    const {usuarios_id} = request.params; 

    let usuarioPost = await Post.findAll({
        where : {
            usuarios_id 
        }
    });

    return response.json(usuarioPost);  
}}





module.exports = postController;