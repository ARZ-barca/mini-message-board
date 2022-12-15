var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    added: new Date(),
  },
  {
    text: "Hello World!",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// form
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard - form" });
});
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
