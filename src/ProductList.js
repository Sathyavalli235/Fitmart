import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getposts')
            .then(res => setPosts(res.data));
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/deletepost/${id}`);
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2>Products List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ProductName</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
               <tbody>
  {posts.map(post => (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.productname}</td>
      <td>{post.description}</td>
      <td>{post.price}</td>
      <td>
        <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
        <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  ))}
</tbody>
            </table>
        </div>
    );
};

export default ProductList;