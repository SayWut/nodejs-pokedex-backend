const PokemonRepository = require("../../data/repositories/PokemonRepositoryMongoImp");
const serializer = require("../../domain/entities/serializer");

module.exports = (app) => {
  app.repository = new PokemonRepository();
  app.serializer = serializer;
};
