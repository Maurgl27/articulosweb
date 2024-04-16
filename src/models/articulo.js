const {Schema,model}=require('mongoose');
const seccionSchema=new Schema({

    titulo:{
        type:String
    },
    imgInicio:{
        type:String
    },
    info:{
        type:String,
        required:true
    },
    imgFinal:{
        type:String,
    }

},{timestamps:true});

const articuloSchema=new Schema({
    
    articulo_id:{
        type: Number
    },
    titulo:{
        type:String,
        required:true
    },
    infoTitulo:{
        type:String,
        required:true
    },
    voto:{
        type:Number,//es un numero que se va a ir sumando o restando
    },
    img:{
        type:String,
        required:true
    },
    hashtags:{
        type: [String],
        required:true
    },
    infoSecciones:[seccionSchema]

},{timestamps:true});

const Articulo=model('Articulo', articuloSchema);
const Seccion=model('Seccion', seccionSchema);
module.exports = {
    Articulo,
    Seccion,
  };
  
// tus modelos aquí...
//-----------------------------------------------------------------------------------------------------//
// AQUI CARGAMOS LOS DATOS SIMPLEMENTE REEMPLACE LOS DATOS Y GUARDE //
// datos de prueba
//-----------------------------------------------------------------------------------------------------//

const articuloData = {
    articulo_id: 9,
    titulo: 'Mi novenoaaaa artículo',
    infoTitulo: 'Este es mi noveno artículo',
    voto: 0,
    img: 'https://i.postimg.cc/mg9WYC1n/18781eee-bd7a-4c70-837e-631f8f6969ea.jpg',
    hashtags: ['#primerCuarto', '#segundo'],
    infoSecciones: [
      {
        titulo: 'Sección 1',
        imgInicio: 'https://i.postimg.cc/gJwgjhHj/29206cdc-29b5-42d1-877e-da8176ff6518.jpg',
        info: 'Esta es la sección 1 de mi artículo lorem Esta es la sección 1 de mi artículo lorem  Esta es la sección 1 de mi artículo lorem  Esta es la sección 1 de mi artículo lorem  Esta es la sección 1 de mi artículo lorem Esta es la sección 1 de mi artículo lorem  Esta es la sección 1 de mi artículo lorem  Esta es la sección 1 de mi artículo lorem Esta es la sección 1 de mi artículo lorem Esta es la sección 1 de mi artículo lorem Esta es la sección 1 de mi artículo lorem ',
        imgFinal: 'ruta/a/mi/imagen.jpg',
      },
      {
        titulo: 'Sección 2',
        imgInicio: 'https://i.postimg.cc/3NVPsxDN/1bf66fa7-690d-4ccc-b3f7-23e94dccb56b.jpg',
        info: 'Esta es la sección 1 de mi artículo',
        imgFinal: 'ruta/a/mi/imagen.jpg',
      },
      // más secciones aquí...
    ],
  };
(async () => {
    // crea una nueva instancia de Articulo
    const nuevoArticulo = new Articulo(articuloData);
    
    
    // guarda la nueva instancia en la base de datos
    try {
      await nuevoArticulo.save();
      console.log('Artículo guardado con éxito'); 
    } catch (err) {
      console.log('Hubo un error al guardar el artículo:', err);
    }
  })();

/*// extrae y guarda cada seccion en la coleccion Seccion
    
    for (let seccionData of articuloData.infoSecciones) {
      const nuevaSeccion = new Seccion(seccionData);
      await nuevaSeccion.save();
      } */

