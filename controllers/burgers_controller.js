// Dependencies 
// =================================
let express = require("express");
let router = express.Router();

// burger model import
let burger = require("../models/burger.js");

// Route set-up

router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = 
    {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger/insert", function(req, res) {
  burger.insert("burger_name", req.body.name, function() {
    res.redirect("/");
  });
});

router.post("/api/burgers/eat/:id", function(req, res) {
  burger.update(req.params.id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js 
module.exports = router;
