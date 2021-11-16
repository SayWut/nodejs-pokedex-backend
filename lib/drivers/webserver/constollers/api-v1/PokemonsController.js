const ListPokemons = require("../../../../domain/use_cases/ListPokemons");
const GetPokemonInfo = require("../../../../domain/use_cases/GetPokemonInfo");

const listPokemons = (req, res, next) => {
  const repository = req.app.repository;

  const useCase = ListPokemons(repository);
  _useCaseHandler(useCase, req, res, next);
};

const getPokemonInfo = (req, res, next) => {
  const { id } = req.params;
  const repository = req.app.repository;

  const useCase = GetPokemonInfo(id, repository);
  _useCaseHandler(useCase, req, res, next);
};

const _useCaseHandler = (useCase, req, res, next) => {
  useCase
    .then((data) => res.json(req.app.serializer(data)))
    .catch((error) => {
      next();
    });
};

module.exports = {
  listPokemons,
  getPokemonInfo,
};
