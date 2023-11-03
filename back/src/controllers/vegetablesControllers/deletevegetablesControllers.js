const vegetablesModel = require("../../models/vegetables");

const deletevegetablesControllers = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await vegetablesModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "La verdura ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró la verdura para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar la verdura", error);
    res.status(500).json({
      error: "Error al eliminar la verdura",
      errorDetails: error,
    });
  }
};

module.exports = deletevegetablesControllers;
