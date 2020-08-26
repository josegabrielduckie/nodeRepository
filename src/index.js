import express from 'express'
import morgan from 'morgan'


const app = express()

app.use(morgan('combined'))

var mysql = require('mysql');
var SQL = 'SELECT * FROM productos';
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dbs248057"
});
   



var array = ""



//Deshabilitar para no mostrar que hemos hecho la aplicacion con express
app.disable('x-powered')
//Mostrar datos renderizados desde el servidor
app.get('/',(req,res)=>{


con.query('SELECT * FROM productos',  (err, result) =>{
    if (err) throw err;
   
    result.forEach( (row) => {
      array+=`${row.ID_PRODUCTO} ${row.NAME_PRODUCTO}  `
      });
     res.end(array)
      
    
  })
})
//Marcar en el puerto donde se encuentra el servidor a escucha
app.listen('9000',()=>{
console.log("Servidor Arrancado")
})