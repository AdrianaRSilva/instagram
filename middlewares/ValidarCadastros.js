const { Usuario } = require('../models')

module.exports = async (request, response, next) => {
  let { nome, email, senha } = request.body; 
  let user = await Usuario.findAll({
    where: {nome, email, senha}
  }); 
    
  if (user.length) { 
    response.status(400).json({erro:"Email já cadastrado."})
    return;

  } else {
    if (!email) {
      return response.status(400).json({ erro:" insira um email valido"});

    } else if (senha.length < 6 || senha.length > 12) {
      return response.status(400).json({ erro: "Senha inválida "});
    } else if (nome.length < 0) {
      return response.status(400).json({ error: "Nome inválido."});
    } else {
      next();
    }
  }

};