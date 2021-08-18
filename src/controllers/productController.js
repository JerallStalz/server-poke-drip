const Product = require("../models/Product");

exports.getProduct = async (req, res) => {
  try {
    const result = await Product.find({}).limit(10);
    res.json({ result });
    console.log("Productos Enviados");
  } catch (error) {
    console.log(error);
  }
};

exports.sendProduct = async (req, res) => {
  try {
    const { precio, nombre } = req.body;
    if (!nombre || !precio) {
      res.status(400).json({ msg: "Todos los campos son necesarios" });
    } else {
      const product = new Product(req.body);
      await product.save();
      res.json({ msg: "Producto guardado correctamente" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.editProduct = async (req, res) => {
  try {
    console.log(req.body);
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.json({ msg: "Producto no encontrado" });
    } else {
      console.log(req.body);
      const resulta = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json(resulta);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ _id: req.params.id });
    if (!result) {
      res.status(400).json({ msg: "El producto seleccionado no existe" });
    } else {
      res.status(200).json({ msg: "Borrado correctamente" });
    }
  } catch (error) {
    console.log(error);
  }
};
