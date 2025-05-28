import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/productslist" element={<ProductList />} />

    </Routes>
  </Router>
);

export default App;

