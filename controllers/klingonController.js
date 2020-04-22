var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var klingon = require("../models/klingons.js");

router.get("/", function (req, res) {
  klingon.all(function (data) {
    var hbsObject = {
      klingons: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/klingons", function (req, res) {
  klingon.create([
    "kword", "english"
  ], [
    req.body.kword, req.body.english
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/klingons/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  klingon.update({
    mastered: req.body.mastered
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/klingons/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  klingon.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
