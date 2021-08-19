const express = require("express");
const cors = require("cors");
const port = process.env.port || 4000;

// Inicializacion express app
const app = express();

// Inicializando la database

//  Middlewares
app.use(cors());
app.use(express.json());

// Ruta
app.use(
  "/",
  express.Router().get("/", (req, res) => {
    res.send("sexo");
  })
);
app.use("/", require("./routes/pokedex"));

// Iniciando servidor
app.listen(port, () => {
  try {
    console.log(`
    #### Server Runing ####
    #### In port ${port} ####
    `);
  } catch (error) {
    console.log(`
    #### There was an error ####
    ${error}
    `);
  }
});
