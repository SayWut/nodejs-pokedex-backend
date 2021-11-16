const express = require("express");
const router = express.Router();
const PokemonsController = require("../../constollers/api-v1/PokemonsController");

router.get("/pokemon", PokemonsController.listPokemons);
router.get("/pokemon/:id", PokemonsController.getPokemonInfo);

module.exports = router;
