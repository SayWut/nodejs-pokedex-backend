const Pokemon = require("../../domain/entities/Pokemon");
const PokemonInfo = require("../../domain/entities/PokemonInfo");
const PokemonEvolutions = require("../../domain/entities/PokemonEvolutions");
const PokemonRepository = require("../../domain/repositories/PokemonRepository");

const MongoosePokemon = require("../orm/mongoose/schemas/Pokemon");
const MongoosePokemonInfo = require("../orm/mongoose/schemas/PokemonInfo");
const MongoosePokemonEvolution = require("../orm/mongoose/schemas/PokemonEvolution");

module.exports = class extends PokemonRepository {
  constructor() {
    super();
  }

  async list(offset, limit) {
    offset = parseInt(offset);
    offset = isNaN(offset) ? 0 : offset;
    limit = parseInt(limit);
    limit = isNaN(limit) ? 20 : limit;

    const dataResult = await MongoosePokemon.find()
      .sort("pokemonId")
      .skip(offset)
      .limit(limit);

    return dataResult.map((mongoosePokemon) => {
      const { pokemonId, name, sprite } = mongoosePokemon;

      return new Pokemon(pokemonId, name, sprite);
    });
  }

  async searchByName(search) {
    const dataResult = await MongoosePokemon.find({
      name: { $regex: `^${search}`, $options: "i" },
    }).sort("pokemonId");

    return dataResult.map((mongoosePokemon) => {
      const { pokemonId, name, sprite } = mongoosePokemon;

      return new Pokemon(pokemonId, name, sprite);
    });
  }

  async getPokemonInfo(pokemonName) {
    const dataResult = await MongoosePokemonInfo.findOne({
      name: pokemonName,
    });

    const { name, sprite, types, evolutionsId } = dataResult;
    return new PokemonInfo(dataResult.id, name, sprite, types, evolutionsId);
  }

  async getPokemonEvolution(evolutionId) {
    const dataResult = await MongoosePokemonEvolution.findOne({
      id: evolutionId,
    });

    const { id, evolutions } = dataResult;
    return new PokemonEvolutions(id, evolutions);
  }
};
