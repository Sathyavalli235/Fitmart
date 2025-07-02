import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import EditProduct from './EditProduct';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/productslist" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditProduct />} />

    </Routes>
  </Router>
);

export default App;

