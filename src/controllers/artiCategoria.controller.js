const {Articulo} = require('../models/articulo');
const artiCategoriaCtrl = {};

artiCategoriaCtrl.renderArtiCategorias = async (req, res) => {
    const articulos = await Articulo.find().lean();
    const hashtagsSet = new Set();

    // Itera sobre todos los artículos
    for (let articulo of articulos) {
        // Itera sobre todos los hashtags en el artículo actual
        for (let hashtag of articulo.hashtags) {
            // Agrega el hashtag al conjunto
            hashtagsSet.add(hashtag);
        }
    }

    // Convierte el conjunto a un array
    const hashtags = Array.from(hashtagsSet);

    res.render('categorias', {hashtags: hashtags});
}

module.exports = artiCategoriaCtrl;
