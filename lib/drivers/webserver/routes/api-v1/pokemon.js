const express = require("express");
const router = express.Router();
const PokemonsController = require("../../constollers/api-v1/PokemonsController");

router.get("/", PokemonsController.listPokemons);
router.get("/:pokemonName", PokemonsController.getPokemonInfo);

module.exports = router;
