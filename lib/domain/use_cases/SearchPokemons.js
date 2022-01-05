module.exports = (pokemonRepository, search) => {
  return pokemonRepository.searchByName(search);
};
