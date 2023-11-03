const fruitsModel = require("../../models/fruits");

const postfruitsControllers = async (req, res) => {
  const { name, price, sku, media, is_seasonal, quantity, category } = req.body;
  if (!media.images)
    media.images = {
      imageName: "Las frutas son buenas para la salud",
      imageUrl:
        "https://www.fisenf.com/wp-content/uploads/2015/11/frutas-y-frutos-secos.jpg",
    };
  try {
    const newFruits = new fruitsModel({
      name,
      price,
      sku,
      media,
      is_seasonal,
      quantity,
      category,
    });

    await newFruits.save();

    res.status(201).json(newFruits);
  } catch (error) {
    console.error("Error al crear la fruta", error);
    res.status(500).json({ error: "Error al crear la fruta", error });
  }
};

module.exports = postfruitsControllers;
