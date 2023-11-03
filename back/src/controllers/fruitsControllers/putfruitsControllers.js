const fruitsModel = require("../../models/fruits");

const putfruitsControllers = async (req, res) => {
  const { id, name, price, sku, media, is_seasonal, quantity, category } =
    req.body;
  try {
    const putFruits = await fruitsModel.updateOne(
      { _id: id },
      { $set: { name, price, sku, media, is_seasonal, quantity, category } }
    );
    if (putFruits.nModified === 0) {
      return res.status(404).json({ error: "Fruta no encontrada" });
    }
    res.status(200).json(putFruits);
  } catch (error) {
    console.error("Error al actualizar la fruta", error);
    res.status(500).json({ error: "Error al actualizar la fruta", error });
  }
};

module.exports = putfruitsControllers;
