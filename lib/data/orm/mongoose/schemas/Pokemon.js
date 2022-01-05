const mongoose = require("../mongoose");

const pokemonSchema = new mongoose.Schema({
  pokemonId: Number,
  name: String,
  sprite: String,
});

module.exports = mongoose.model("Pokemon", pokemonSchema, "pokemons");
