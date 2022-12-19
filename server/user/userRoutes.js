const router = require("express").Router();
const { register, login, getAll,addCart } = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll); 
router.put("/cart/:id",addCart)

module.exports = router;
