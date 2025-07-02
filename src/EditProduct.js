// EditProduct.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        productname: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`https://fitmart.onrender.com/getpost/${id}`);
                // setFormData({
                //     productname: res.data.productname,
                //     description: res.data.description,
                //     price: res.data.price
                // });
                const data = res.data[0];
                setFormData({
                    productname: data.productname,
                    description: data.description,
                    price: data.price
                })
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
        // console.log(formData)
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
        })
        try {
            await axios.put(`https://fitmart.onrender.com/updatepost/${id}`, formData);
            navigate('/'); // redirect back to product list
        } catch (error) {
            console.error("Failed to update product:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="productname"
                        value={formData.productname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
};

export default EditProduct;
