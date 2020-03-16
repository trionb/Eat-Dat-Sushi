var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sushi.all(function(data) {
    var hbsObject = {
      typeSushi: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/typeSushi", function(req, res) {
  sushi.create([
    "sushi_name", "devoured"
  ], [
    req.body.sushi_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/typeSushi/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sushi.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//Export all routes for server.js to use
module.exports = router;