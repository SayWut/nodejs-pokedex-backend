const ListPokemons = require("../../../../domain/use_cases/GetPokemons");
const GetPokemonInfo = require("../../../../domain/use_cases/GetPokemonInfo");
const SearchPokemons = require("../../../../domain/use_cases/SearchPokemons");

const listPokemons = (req, res, next) => {
  const repository = req.app.repository;
  const { offset, limit, search } = req.query;

  usecase = ListPokemons(repository, offset, limit);

  if (search) {
    usecase = SearchPokemons(repository, search);
  }
  _usecaseHandler(usecase, req, res, next);
};

const getPokemonInfo = (req, res, next) => {
  const repository = req.app.repository;
  const { pokemonName } = req.params;

  const usecase = GetPokemonInfo(pokemonName, repository);
  _usecaseHandler(usecase, req, res, next);
};

const _usecaseHandler = (usecase, req, res, next) => {
  usecase
    .then((data) => {
      res.json(req.app.serializer(data));
    })
    .catch((error) => {
      next();
    });
};

module.exports = {
  listPokemons,
  getPokemonInfo,
};
