const mongoose=require('mongoose');

const {ARTICULO_APP_MONGODB_HOST,ARTICULO_APP_MONGODB_DATABASE}=process.env;
const MONGODB_URI=`mongodb://${ARTICULO_APP_MONGODB_HOST}/${ARTICULO_APP_MONGODB_DATABASE}`;
mongoose.connect(MONGODB_URI,{
})
.then(db=> console.log("Database is connected"))
.catch(err=> console.log(err));