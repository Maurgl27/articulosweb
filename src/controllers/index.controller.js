const {Articulo}=require('../models/articulo');
const indexCtrl={};


indexCtrl.renderIndex = async (req, res) => {
  const articulos = await Articulo.find().sort({_id: -1}).limit(1).lean(); // busca el último artículo insertado
  if (!articulos || articulos.length === 0) {
      return res.status(404).send('No se encontró ningún artículo');
  }
  const articulo = articulos[0]; // Accede al primer elemento del array
  res.render('index', {id: articulo._id, titulo: articulo.titulo, infoTitulo: articulo.infoTitulo, voto: articulo.voto, img: articulo.img, hashtags: articulo.hashtags, infoSecciones: articulo.infoSecciones}) // pasa el título del artículo a la vista
};


/*aca manejaremos la funcionalidad de voto*/
indexCtrl.handleVoto=async(req,res)=>{
  const {id}=req.params;
  let {voto}=req.body;// este será +1 para "me gusta" y -1 para "no me gusta"

  // Convertir voto a un número
  voto = Number(voto);
  console.log(voto)

  // Verificar si voto es un número
  if (isNaN(voto)) {
    return res.status(400).json({ error: 'Voto inválido' });
  }

  // aquí puedes agregar la lógica para verificar si el usuario está autenticado
  try {
    const articulo = await Articulo.findById(id);
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }

    articulo.voto += voto;
    await articulo.save();

    res.status(200).json({ message: 'Voto registrado con éxito' });
  } catch (err) {
    console.log('Hubo un error al registrar el voto:', err);
    res.status(500).json({ error: 'Hubo un error al registrar el voto' });
  }
}





indexCtrl.renderNosotros=(req,res)=>{res.render('nosotros')};
indexCtrl.renderContacto=(req,res)=>{res.render('contacto')};

module.exports = indexCtrl;