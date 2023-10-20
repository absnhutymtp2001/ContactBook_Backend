const express = require("express");
const conatcts = require("../controllers/contact.controller.js");

const router = express.Router();

router.route("/")
    .get(conatcts.findAll)
    .post(conatcts.create)
    .delete(conatcts.deleteAll);

router.route("/favorite")
    .get(conatcts.findAllFavorite)

router.route("/:id")
    .get(conatcts.findOne)
    .put(conatcts.update)
    .delete(conatcts.delete);

module.exports = router;