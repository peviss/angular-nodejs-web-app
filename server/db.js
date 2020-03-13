const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"1m2y3s4q5l",
  database:"inmoprueba"
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});
module.exports = connection;
