// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.all("typeSushi", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("typeSushi", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("MODEL----->")
    console.log(objColVals);
    console.log(condition);
    orm.update("typeSushi", objColVals, condition, function(res) {
      cb(res);
    });
  },
}
// Export the database functions for the controller (sushi_controller.js).
module.exports = sushi;
