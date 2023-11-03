const vegetablesModel = require("../../models/vegetables");

const putvegetablesControllers = async (req, res) => {
  const { id, name, price, sku, media, is_seasonal, quantity, category } =
    req.body;
  try {
    const putVegetables = await vegetablesModel.updateOne(
      { _id: id },
      { $set: { id, name, price, sku, media, is_seasonal, quantity, category } }
    );
    if (putVegetables.nModified === 0) {
      return res.status(404).json({ error: "Verdura no encontrada" });
    }
    res.status(200).json(putVegetables);
  } catch (error) {
    console.error("Error al actualizar la verdura", error);
    res.status(500).json({ error: "Error al actualizar la verdura", error });
  }
};

module.exports = putvegetablesControllers;
