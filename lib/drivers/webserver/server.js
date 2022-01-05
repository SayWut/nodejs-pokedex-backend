require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("../../core/middlewares/error");
const fourOFourMiddleware = require("../../core/middlewares/404");

const serverLocator = require("../../core/config/service-locator");
serverLocator(app);

app.use(cors());
app.use(routes);

// === BOILERPLATES ===
app.use(errorMiddleware); // Catch and send error messages
app.use(fourOFourMiddleware); // 404

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
