"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('combined'));

var mysql = require('mysql');

var SQL = 'SELECT * FROM productos';
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbs248057"
});
var array = ""; //Deshabilitar para no mostrar que hemos hecho la aplicacion con express

app.disable('x-powered'); //Mostrar datos renderizados desde el servidor

app.get('/', function (req, res) {
  con.query('SELECT * FROM productos', function (err, result) {
    if (err) throw err;
    result.forEach(function (row) {
      array += "".concat(row.ID_PRODUCTO, " ").concat(row.NAME_PRODUCTO, "  ");
    });
    res.end(array);
  });
}); //Marcar en el puerto donde se encuentra el servidor a escucha

app.listen('9000', function () {
  console.log("Servidor Arrancado");
});