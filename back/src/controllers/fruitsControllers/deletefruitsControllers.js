const fruitsModel = require("../../models/fruits");

const deletefruitsControllers = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await fruitsModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "La fruta ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró la fruta para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar la fruta", error);
    res.status(500).json({
      error: "Error al eliminar la fruta",
      errorDetails: error,
    });
  }
};

module.exports = deletefruitsControllers;
