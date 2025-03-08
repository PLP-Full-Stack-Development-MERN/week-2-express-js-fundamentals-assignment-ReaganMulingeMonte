
let products = [];
let productIdCounter = 1;

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
};

const createProduct = (req, res) => {
  const product = { id: productIdCounter++, ...req.body };
  products.push(product);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
};

const deleteProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');
  products.splice(productIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};