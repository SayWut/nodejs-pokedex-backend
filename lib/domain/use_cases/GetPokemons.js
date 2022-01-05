module.exports = (pokemonRepository, offset, limit) => {
  return pokemonRepository.list(offset, limit);
};
