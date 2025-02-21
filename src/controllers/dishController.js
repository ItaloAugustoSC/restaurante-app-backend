const Dish = require("../models/Dish");

exports.createDish = async (req, res) => {
  try {
    const { name, description, price, restaurant, rating } = req.body;

    const dish = new Dish({
      name,
      description,
      price,
      restaurant,
      user: req.user.id,
      rating: rating || 0
    });

    await dish.save();
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar prato" });
  }
};

exports.getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find().populate("restaurant", "name").populate("user", "name");
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar pratos" });
  }
};

exports.getDishById = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id).populate("restaurant", "name").populate("user", "name");

    if (!dish) {
      return res.status(404).json({ message: "Prato não encontrado" });
    }

    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar prato" });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const { name, description, price, rating } = req.body;
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      return res.status(404).json({ message: "Prato não encontrado" });
    }

    if (req.user.id !== dish.user.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    dish.name = name || dish.name;
    dish.description = description || dish.description;
    dish.price = price || dish.price;
    dish.rating = rating || dish.rating;

    await dish.save();
    res.json({ message: "Prato atualizado", dish });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar prato" });
  }
};

exports.deleteDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      return res.status(404).json({ message: "Prato não encontrado" });
    }

    if (req.user.id !== dish.user.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    await dish.deleteOne();
    res.json({ message: "Prato excluído" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir prato" });
  }
};