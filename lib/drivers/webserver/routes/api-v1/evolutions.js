const express = require("express");
const router = express.Router();
const evolutionsController = require("../../constollers/api-v1/EvolutionsController");

router.get("/:id", evolutionsController.getPokemonEvolutions);

module.exports = router;
