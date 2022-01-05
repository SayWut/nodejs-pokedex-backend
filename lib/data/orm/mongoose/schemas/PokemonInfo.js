const mongoose = require("../mongoose");

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sprite: String,
  types: Array,
  evolutionsId: Number,
});

module.exports = mongoose.model("PokemonsInfo", pokemonSchema, "pokemonsInfo");
