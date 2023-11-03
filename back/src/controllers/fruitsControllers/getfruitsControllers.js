const fruitsModel = require("../../models/fruits");

const getfruitsControllers = async (req, res) => {
  const { id, name, category } = req.query;
  try {
    const query = {};
    if (id) query._id = id;
    if (name) query.name = { $regex: new RegExp(name, "i") };
    if (category) query.category = { $regex: new RegExp(category, "i") };

    const fruits = await fruitsModel.find(query);

    fruits.length
      ? res.status(200).json(fruits)
      : res.status(404).json({
          error: "No se encontraron las/la fruta",
        });
  } catch (error) {
    console.error("Error al requerir todas las frutas", error);
    res
      .status(500)
      .json({ error: "Error al requerir todas las frutaa", error });
  }
};

module.exports = getfruitsControllers;
