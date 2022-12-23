var product = require("./ProductSchema.js");
// Get all products
const getAll = async (req, res) => {
  try {
    const products = await product
      .find({})
      .populate({ path: "_id", select: "name" });
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Post a new product
const createOne = async (req, res) => {
  // console.log(req);
  try {
    const productPosted = await product.insertMany({
      productName: req.body.productName,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      color: req.body.color,

      // adminId: req.adminId["_id"],
    });
    res.status(201).send(productPosted);
    return;
  } catch (err) {
    res.send(err);
  }
};

// Update an existing product
const updateOne = async (req, res) => {

  try {
    const productUpdated = await product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.send(productUpdated);
  } catch (err) {
    console.log(err);
  }
};
// delete a product

const findOne = async (req, res) => {
  try {
    const find = await product.find({ category: req.params.category });
    res.send(find);
  } catch (err) {
    console.log(err);
  }
};

const deleteOne = async (req, res) => {
  // const id = req.params.id;
  // console.log(req.params);
  try {
    const deleted = await product.findByIdAndDelete({_id : req.params.id});
    res.status(200).send("deleted");
    return;
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOne = async (req, res) => {
  try {
    const giveOne = await product.findById(req.params.id);
    res.status(200).send(giveOne);
    return;
  } catch (err) {
    res.send(err);
  }
};

// get product by thier price

const FilterProductbyPrice = async (req, res) => {
  try {
    const min = req.body.min;
    const max = req.body.max;
    const pro = await product.find({ price: { $gt: min, $lt: max } });
    res.status(200).send(pro);
  } catch (err) {
    res.status(500).send(err);
  }
};

const FilterProductbyColor = async (req, res) => {
  try {
    const color = req.body.color;
    const pro = await product.find({ color: color });
    res.status(200).send(pro);
  } catch (err) {
    res.status(500).send(err);
  }
};

const FilterProductbySize = async (req, res) => {
  try {
    const size = req.body.size;
    const pro = await product.find({ size: size });
    res.status(200).send(pro);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  deleteOne,
  updateOne,
  createOne,
  getAll,
  getOne,
  findOne,
  FilterProductbyPrice,
  FilterProductbyColor,
  FilterProductbySize,
};
