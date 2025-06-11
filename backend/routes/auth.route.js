const express = require("express");
const userAuth = require("../middlewares/auth");
const router = express.Router();

router.get("/chat/:receiverId", userAuth, chat);

module.exports = router;