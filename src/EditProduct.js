import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [ProductName, setProductName] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`https://fitmart.onrender.com/getpost/${id}`);
                setProductName(res.data[0].ProductName);
                setDescription(res.data[0].Description);
                setPrice(res.data[0].Price);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://fitmart.onrender.com/updatepost/${id}`, { ProductName,Description,Price });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Product</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Productname">ProductName</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ProdutName"
                                        placeholder="Enter Productname"
                                        value={ProductName}
                                        onChange={(e) => setProductName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Description">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="Description"
                                        rows="5"
                                        placeholder="Enter Description"
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                 <div className="form-group">
                                    <label htmlFor="Price">Price</label>
                                    <textarea
                                        className="form-control"
                                        id="Price"
                                        rows="5"
                                        placeholder="Enter Price"
                                        value={Price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Update Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;