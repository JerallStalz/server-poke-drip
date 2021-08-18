const axios = require("axios");
const { numberToString, orderTypes } = require("../utils");

exports.getPokemons = async (req, res) => {
  const pokemons = [];
  const { offset, display } = req.query;

  const getPokemonsFn = async (offset, display) => {
    const intOffset = parseInt(offset) + 1;
    const intDisplay = parseInt(display) + 1;
    for (let i = intOffset; i < intDisplay; i++) {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(result.data.stats);
      const pokemon = {
        name: result.data.name,
        pokedex: numberToString(result.data.id),
        types: orderTypes(result.data.types),
        imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberToString(
          result.data.id
        )}.png`
      };
      pokemons.push(pokemon);
    }
    res.json(pokemons);
  };
  getPokemonsFn(offset, display);
  if (pokemons.length === parseInt(offset) - parseInt(display)) {
  }
};
