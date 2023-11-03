const vegetablesModel = require("../../models/vegetables");

const postvegetablesControllers = async (req, res) => {
  const { name, price, sku, media, is_seasonal, quantity, category } = req.body;
  if (!media.images)
    media.images = {
      imageName: "Las verduras son buenas para la salud",
      imageUrl:
        "https://phantom-marca.unidadeditorial.es/c4f9e7c1e501c881b8a4ad3ea1da85de/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/17/16450935672558.jpg",
    };
  try {
    const newVegetables = new vegetablesModel({
      name,
      price,
      sku,
      media,
      is_seasonal,
      quantity,
      category,
    });

    await newVegetables.save();

    res.status(201).json(newVegetables);
  } catch (error) {
    console.error("Error al crear la verdura", error);
    res.status(500).json({ error: "Error al crear la verdura", error });
  }
};

module.exports = postvegetablesControllers;
