const Restaurant = require("../models/Restaurant");

exports.createRestaurant = async (req, res) => {
  const { name, address, type } = req.body;
  const restaurant = new Restaurant({ name, address, type, user: req.user.id });
  await restaurant.save();
  res.json(restaurant);
};

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({ user: req.user.id });
  res.json(restaurants);
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }

    if (req.user.id !== restaurant.user.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    await restaurant.deleteOne();
    res.json({ message: "Restaurante excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir restaurante" });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const { name, address, type, rating } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }

    if (req.user.id !== restaurant.user.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    restaurant.name = name || restaurant.name;
    restaurant.address = address || restaurant.address;
    restaurant.type = type || restaurant.type;
    restaurant.rating = rating || restaurant.rating;

    await restaurant.save();
    res.json({ message: "Restaurante atualizado com sucesso", restaurant });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar restaurante" });
  }
};