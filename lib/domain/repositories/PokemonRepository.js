module.exports = class {
  list(offset, limit) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  searchByName(search) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  getPokemonInfo(pokemonName) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  getPokemonEvolution(evolutionId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
};
