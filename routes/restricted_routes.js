const express = require("express");

const {
  render_restricted,
  post_restricted,
} = require("../controllers/page_controller");

const router = express.Router();
router.route("/").get(render_restricted);
router.route("/").post(post_restricted);

module.exports = router;
