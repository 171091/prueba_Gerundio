const userModel = require("../models/user");

const putUserControllers = async (req, res) => {
  const { id, name, lastname, phone, email } = req.body;

  try {
    const userToUpdate = await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, lastname, phone, email } },
      { new: true } 
    );

    if (!userToUpdate) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(userToUpdate);
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(500).json({ error: "Error al actualizar el usuario", error });
  }
};

module.exports = putUserControllers;

