// src/pages/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   axios.post('https://fitmart.onrender.com/addpost', {  
  productname: productName, 
  description,
  price,
})

    .then(res => {
      console.log(res.data);
      navigate('/productslist'); 
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="form-group mb-3">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
