const {Articulo}=require('../models/articulo');
const artiTodosCtrl={};

artiTodosCtrl.renderArtiTodos = async (req, res) => {
    const articulos = await Articulo.find().sort({_id: -1}).lean();
    if (articulos.length > 0) {
      res.render('todos', { articulos: articulos });
    } else {
      // Manejar el caso en que no se encuentran artículos
      res.status(404).send('No se encontraron artículos');
    }
}
artiTodosCtrl.renderArtiId= async (req, res) => {
    const articulo = await Articulo.findById(req.params.id).lean();
    if (articulo) {
      res.render('articulo', { articulo: articulo});
    } else {
      // Manejar el caso en que no se encuentra el artículo
      res.status(404).send('Artículo no encontrado');
    }
}

module.exports = artiTodosCtrl;