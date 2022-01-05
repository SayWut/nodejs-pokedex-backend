const GetPokemonEvolutoins = require("../../../../domain/use_cases/GetPokemonEvolutions");

const getPokemonEvolutions = (req, res, next) => {
  const repository = req.app.repository;
  const { id } = req.params;

  const usecase = GetPokemonEvolutoins(repository, id);
  _usecaseHandler(usecase, req, res, next);
};

const _usecaseHandler = (usecase, req, res, next) => {
  usecase
    .then((data) => res.json(req.app.serializer(data)))
    .catch((error) => {
      next();
    });
};

module.exports = {
  getPokemonEvolutions,
};
