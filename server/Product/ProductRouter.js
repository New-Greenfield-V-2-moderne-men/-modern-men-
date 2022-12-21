const router = require("express").Router();
// const post = require("./ProductSchema.js");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const {
  getAll,
  getOne,
  deleteOne,
  createOne,
  updateOne,
  findOne,
  FilterProductbyPrice,
  FilterProductbyColor,
  FilterProductbySize,
} = require("./ProductController");

router.get("/getall", getAll);
router.get("/find/:category", findOne);
router.get("/:id", getOne);

router.delete("/:id", deleteOne);
router.put("/:id", updateOne);
router.post("/add", createOne);

router.post("/price", FilterProductbyPrice);
router.post("/color", FilterProductbyColor);
router.post("/size", FilterProductbySize);
module.exports = router;
