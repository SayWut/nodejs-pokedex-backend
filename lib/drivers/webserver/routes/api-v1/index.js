const express = require("express");
const router = express.Router();
const pokemon = require("./pokemon");
const evolutions = require("./evolutions");

router.use("/pokemons", pokemon);
router.use("/evolutions", evolutions);

module.exports = router;
