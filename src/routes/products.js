const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/getProduct", productController.getProduct);
router.post("/sendProduct", productController.sendProduct);
router.put("/editProduct/:id", productController.editProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
