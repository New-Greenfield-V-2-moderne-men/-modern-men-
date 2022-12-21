const users = require("./userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const {
      body: { email, password },
    } = req;

    if (!email && !password) {
      return res.status(301).json({
        message: "Email and password required",
      });
    }

    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.pwd);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: user["_id"],
        isAdmin: user["isAdmin"],
        name: user.name,
        email: user.email,
        password: user.pwd,
      },
      "SECRET"
    );

    // const token = jwt.sign({ id: user["_id"], name: user.name, userRole: "SIMPLE_USER_ROLE" }, "SECRET");
    return res.status(200).json({
      name: user.name,
      email: user.email,
      token,
      id: user["_id"],
      isAdmin: user["isAdmin"],
    }); //.json({ token:token});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

const register = async (req, res) => {
  console.log(req.body);

  try {
    const {
      body: { name, email, password },
    } = req;

    if (!name && !email && !password) {
      return res.status(301).json({
        message: "Please fill all fields",
      });
    }
    if (email.includes("@") === false) {
      return res.status(301).json({
        message: "Invalid Email",
      });
    }
    if (password.length < 4) {
      return res.status(301).json({
        message: "Invalid Password  (minimum 4 characters ) ",
      });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const user = new users({
      name,
      email,
      pwd: newpassword,
      isAdmin: false,
    });

    user.save();

    return res.status(200).json({ message: "user Saved" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allusers = await users.find({});
    res.status(200).send(allusers);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addCart = async (req, res) => {
  console.log("add");
  try {
    await users.updateOne(
      { _id: req.params.id },
      { $push: { cart: req.body } }
    );

    res.status(200).send("posted to cart ");
  } catch (err) {
    res.status(500).send(err);
  }
};

// const getallCard = async (req, res) => {
//   try {
//     //  users.findOne({ cart });
//     // await users.find({ cart });
//     // await users.find({ cart: {} });
//     const allusers = await users.cart.find({});
//     res.status(200).send(allusers);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

const addFavorite = async (req, res) => {
  console.log("add");
  try {
    await users.updateOne(
      { _id: req.params.id },
      { $push: { favorite: req.body } }
    );

    res.status(200).send("posted to favorite ");
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteCart = async (req, res) => {
  try {
    await users.updateOne(
      { _id: req.params.id },
      { $pull: { cart: { _id: req.body.id } } }
    );

    res.status(200).send("product deleted frolm cart  ");
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteFavorite = async (req, res) => {
  try {
    await users.updateOne(
      { _id: req.params.id },
      { $pull: { favorite: { _id: req.body.id } } }
    );

    res.status(200).send("product deleted from favorite  ");
  } catch (err) {
    res.status(500).send(err);
  }
};
const getOneUser = async (req, res) => {
  try {
    const profil = await users.findOne({ _id: req.params.id });
    res.status(200).json(profil).send();
    return;
  } catch (err) {
    console.log(err);
  }
};
const getOne = async (req, res) => {
  try {
    const oneUser = await users.findOne({ _id: req.params.id });

    res.status(200).send(oneUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAll = async (req, res) => {
  console.log("add");
  try {
    await users.updateOne(
      { _id: req.params.id },
      { $set: { cart: [] } },
      { multi: true }
    );

    res.status(200).send("all deleted  ");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  register,
  login,
  getAll,
  addCart,
  deleteCart,
  getOne,
  deleteAll,
  addFavorite,
  deleteFavorite,
  getOneUser,
  // getallCard,
};
