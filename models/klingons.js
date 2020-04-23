// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var klingon = {
  all: function (cb) {
    orm.all("klingons", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("klingons", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("klingons", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("klingons", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (klingonController.js).
module.exports = klingon;
