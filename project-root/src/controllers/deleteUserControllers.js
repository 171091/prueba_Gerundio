const userModel = require("../models/user");

const deleteUserControllers = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await userModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "El usuario ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró el usuario para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar el usuario", error);
    res.status(500).json({
      error: "Error al eliminar el usuario",
      errorDetails: error,
    });
  }
};

module.exports = deleteUserControllers;
