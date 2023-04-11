const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("../controller/controller");

const router = express.Router();
router.use(bodyParser.json());

router.get("/states", UserController.state);

module.exports = router;
