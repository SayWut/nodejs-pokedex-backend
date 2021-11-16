const Pokemon = require("../../domain/entities/Pokemon");
const PokemonInfo = require("../../domain/entities//PokemonInfo");
const PokemonRepository = require("../../domain/repositories/PokemonRepository");

const MongoosePokemon = require("../orm/mongoose/schemas/Pokemon");
const MongoosePokemonInfo = require("../orm/mongoose/schemas/PokemonInfo");

module.exports = class extends PokemonRepository {
  constructor() {
    super();
  }

  async list() {
    const listMongoosePokemons = await MongoosePokemon.find().sort("pokemonId");
    return listMongoosePokemons.map((mongoosePokemon) => {
      const { pokemonId, name } = mongoosePokemon;

      return new Pokemon(pokemonId, name);
    });
  }

  async getPokemonInfo(pokemonId) {
    const listMongoosePokemons = await MongoosePokemonInfo.findOne({
      pokemonId,
    });

    const { name, sprite, types, evolutions } = listMongoosePokemons;
    return new PokemonInfo(
      listMongoosePokemons.pokemonId,
      name,
      sprite,
      types,
      evolutions
    );
  }
};
