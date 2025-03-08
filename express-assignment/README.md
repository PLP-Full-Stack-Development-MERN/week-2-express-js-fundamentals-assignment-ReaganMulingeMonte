 Express.js Assignment

## Setup

1.  Install Node.js (using NVM is recommended).
2.  Clone the repository.
3.  Run `npm install` to install dependencies.
4.  Create a `.env` file with `PORT=3000` (or your desired port).

## Run

```bash
node index.js
API Endpoints
Users
GET /users:

Retrieves a list of all users.
Example Request: GET /users
Example Response: [{"id": 1, "name": "John Doe"}, {"id": 2, "name": "Jane Smith"}]
GET /users/:id:

Retrieves a specific user by their ID.
Example Request: GET /users/1
Example Response: {"id": 1, "name": "John Doe"}
POST /users:

Creates a new user.
Example Request Body: {"name": "New User"}
Example Request: POST /users
Example Response: {"id": 3, "name": "New User"}
PUT /users/:id:

Updates an existing user by their ID.
Example Request Body: {"name": "Updated User"}
Example Request: PUT /users/1
Example Response: {"id": 1, "name": "Updated User"}
DELETE /users/:id:

Deletes a user by their ID.
Example Request: DELETE /users/1
Example Response: 204 No Content
Products
GET /products:

Retrieves a list of all products.
Example Request: GET /products
Example Response: [{"id": 1, "name": "Laptop"}, {"id": 2, "name": "Smartphone"}]
GET /products/:id:

Retrieves a specific product by its ID.
Example Request: GET /products/1
Example Response: {"id": 1, "name": "Laptop"}
POST /products:

Creates a new product.
Example Request Body: {"name": "Tablet"}
Example Request: POST /products
Example Response: {"id": 3, "name": "Tablet"}
PUT /products/:id:

Updates an existing product by its ID.
Example Request Body: {"name": "Updated Laptop"}
Example Request: PUT /products/1
Example Response: {"id": 1, "name": "Updated Laptop"}
DELETE /products/:id:

Deletes a product by its ID.
Example Request: DELETE /products/1
