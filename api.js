// app.js

import mysql from "mysql";

const dbConfig = {
  host: "brmvwtscnjhv1u5txd7f-mysql.services.clever-cloud.com",
  user: "uxbcauw5dimu5tfp",
  password: "sDYjq4x94Sj0GgDzunSg",
  database: "brmvwtscnjhv1u5txd7f",
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos MySQL");
});
