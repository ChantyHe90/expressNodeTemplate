var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/cool", function(req, res, next) {
  res.render("users", { title: "User website" });
});

module.exports = router;
