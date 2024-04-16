const {Router}=require('express');
const router=Router();
const {renderIndex,renderNosotros,renderContacto,handleVoto}=require('../controllers/index.controller');

router.get('/',renderIndex);

router.post('/voto/:id',handleVoto);


router.get('/nosotros',renderNosotros);

router.get('/contacto',renderContacto);

module.exports=router;
