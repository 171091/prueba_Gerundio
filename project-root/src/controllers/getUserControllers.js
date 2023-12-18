const userModel = require("../models/user");

const getUserControllers = async (req, res) => {
  const { id, name, email } = req.query;
  try {
    const query = {};
    if (id) query._id = id;
    if (name) query.name = { $regex: new RegExp(name, "i") };
    if (email) query.email = { $regex: new RegExp(email, "i") };

    const user = await userModel.find(query);

    user.length
      ? res.status(200).json(user)
      : res.status(404).json({
          error: "No se encontro el usuario",
        });
  } catch (error) {
    console.error("Error al requerir todos los usuarios", error);
    res
      .status(500)
      .json({ error: "Error al requerir todos los usuarios", error });
  }
};

module.exports = getUserControllers;
