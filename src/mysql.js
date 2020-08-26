var mysql = require('mysql');
var SQL = 'SELECT * FROM productos';
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dbs248057"
});
    con.query('SELECT * FROM productos',  (err, result) =>{
      if (err) throw err;
        
        console.log(result)
      
    });
 