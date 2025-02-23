const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  var token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "Acesso negado" });
  if (token.startsWith("Bearer")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido" });
  }
};
