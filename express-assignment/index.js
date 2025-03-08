
require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default
const logger = require('./middleware/logger'); // Import logger middleware
const userRoutes = require('./routes/userRoutes'); // Import user routes
const productRoutes = require('./routes/productRoutes'); // Import product routes

app.use(logger); // Apply logger middleware globally
app.use(express.json()); // Parse JSON request bodies

// Mount routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});