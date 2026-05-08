const express = require("express");
const { checkAuthenticationCookie } = require("../Middlewares/user");

const { signupUser, loginUser } = require("../Controllers/user")

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.post("/logout", (req, res) => {
    res.clearCookie("token").json({ message: "Logged out" });
});

router.get(
  "/me",
  checkAuthenticationCookie("token"),
  (req, res) => {
    res.json(req.user || null);
  }
);

module.exports = router;