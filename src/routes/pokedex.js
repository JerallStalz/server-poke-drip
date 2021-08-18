const router = require("express").Router();
const axios = require("axios");
const { numberToString } = require("../utils");
const pokedexController = require("../controllers/pokedexController");

router.get("/pokemons/get", pokedexController.getPokemons);

module.exports = router;
