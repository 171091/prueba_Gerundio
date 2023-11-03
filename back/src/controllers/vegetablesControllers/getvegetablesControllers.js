const vegetablesModel = require("../../models/vegetables");

const getvegetablesControllers = async (req, res) => {
  const { id, name, category } = req.query;
  try {
    const query = {};
    if (id) query._id = id;
    if (name) query.name = { $regex: new RegExp(name, "i") };
    if (category) query.category = { $regex: new RegExp(category, "i") };

    const vegetables = await vegetablesModel.find(query);

    vegetables.length
      ? res.status(200).json(vegetables)
      : res.status(404).json({
          error: "No se encontraron las/la verdura",
        });
  } catch (error) {
    console.error("Error al requerir todas las verduras", error);
    res
      .status(500)
      .json({ error: "Error al requerir todas las verduras", error });
  }
};

module.exports = getvegetablesControllers;
