const userModel = require("../models/user");

const postUserControllers = async (req, res) => {
  const { name, lastname, phone, email } = req.body;
  if (name && lastname && phone && email) {
    try {
      const newUser = new userModel({
        name,
        lastname,
        phone,
        email,
      });

      await newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error al crear el usuario", error);
      res.status(500).json({ error: "Error al crear el usuario", error });
    }
  } else {
    res.status(400).json({ error: "Todos los campos son obligatorios" });
  }
};

module.exports = postUserControllers;
