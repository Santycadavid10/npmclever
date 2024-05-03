// app.js

import mysql from "mysql";

const dbConfig = {
  host: "bm6rbuii3pvzukrbv2az-mysql.services.clever-cloud.com",
  user: "u0a4peehlug7lif1",
  password: "2cjaFqGaAUXrCmvpe41q",
  database: "bm6rbuii3pvzukrbv2az",
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if(err) throw err
  console.log("Conexión exitosa a la base de datos MySQL");
});

connection.query("SELECT * from Users", (err,rows) =>
{
  if(err) throw err
  console.log("los datos de la tabla son estos:");
  console.log(rows);
})

connection.end();