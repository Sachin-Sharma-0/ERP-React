// Products.js
import React, { useState } from 'react';
import './Products.css';


const Products = () => {
  // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Category 1', price: 50, stock: 100 },
    { id: 2, name: 'Product B', category: 'Category 2', price: 30, stock: 75 },
    // Add more mock data as needed
  ]);

  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = () => {
    // logic to add a new produc
    const newProduct = { id: products.length + 1, name: 'New Product', category: '', price: 0, stock: 0 };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId, updatedProduct) => {
    // logic to edit a product
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    setEditProduct(null); // Close the edit form after updating
  };

  const handleDeleteProduct = (productId) => {
    // logic to delete a product
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-container">
      <h1>Products Management</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      {/* Display product list with details */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => setEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add edit and delete functionality modals/forms */}
      {/* Edit Product Form */}
      {editProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setEditProduct(null)}>
              &times;
            </span>
            <h2>Edit Product</h2>
            <label>
              Name:
              <input
                type="text"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                value={editProduct.category}
                onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={editProduct.price}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                value={editProduct.stock}
                onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
              />
            </label>
            <button onClick={() => handleEditProduct(editProduct.id, editProduct)}>Save</button>
          </div>
        </div>
      )}
       {/* Button to Access Calendar */}
       <button onClick={() => window.location.assign('/calendar')}>Access Calendar</button>
    </div>
  );
};

export default Products;
