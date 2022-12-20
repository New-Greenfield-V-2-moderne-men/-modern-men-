const router = require("express").Router();
const { register, login, getAll,addCart,getOneUser } = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll); 
router.get("/profil/:id", getOneUser); 
router.put("/cart/:id",addCart)

module.exports = router;
