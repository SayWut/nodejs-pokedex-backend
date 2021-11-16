const mongoose = require("../mongoose");

const pokemonSchema = new mongoose.Schema({
  pokemonId: Number,
  name: String,
  sprite: String,
  types: Array,
  evolutions: Array,
});

module.exports = mongoose.model("PokemonData", pokemonSchema, "pokemonsData");
