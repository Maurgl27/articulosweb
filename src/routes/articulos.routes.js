const {Router}=require('express');
const router=Router();

const {renderArtiTodos,renderArtiId}=require('../controllers/artiTodos.controller');
const {renderArtiCategorias}=require('../controllers/artiCategoria.controller'); 
//rutas de categorias.hbs
router.get('/articulos/categoria',renderArtiCategorias);
//rutas de todos.hbs y articulo.hbs
router.get('/articulos/todos',renderArtiTodos);
router.get('/articulos/:id',renderArtiId);


module.exports = router;