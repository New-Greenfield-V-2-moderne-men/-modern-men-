const router = require("express").Router();
const { register, login, getAll,addCart ,deleteCart,getOne,deleteAll,addFavorite,deleteFavorite} = require("./userController");

router.post("/login", login);
router.post("/register", register);
router.get("/getAll", getAll); 
router.get("/getOne/:id" , getOne);
router.put("/addCart/:id",addCart) ; 
router.put("/addFavorite/:id",addFavorite) ;
router.put("/deleteCart/:id" , deleteCart) 
router.put("/deleteFavorite/:id" , deleteFavorite)
router.put('/deleteAll/:id',deleteAll)


module.exports = router;
