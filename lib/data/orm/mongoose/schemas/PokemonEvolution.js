const mongoose = require("../mongoose");

const pokemonSchema = new mongoose.Schema({
  id: Number,
  evolutions: Array,
});

module.exports = mongoose.model(
  "PokemonEvolutions",
  pokemonSchema,
  "pokemonsEvolutions"
);
