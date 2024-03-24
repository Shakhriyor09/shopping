import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import '../pages/style.css';
import { Modal, Button, Form } from 'react-bootstrap';

const Customer = () => {
    const { data, error, loading } = useAxios('/products');
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newProductData, setNewProductData] = useState({
        title: '',
        price: '',
        thumbnail: '',
    });

    useEffect(() => {
        if (data && data.products) {
            setItems(data.products);
        }
    }, [data]);

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    const handleEdit = (id, newTitle) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, title: newTitle };
            }
            return item;
        });
        setItems(updatedItems);
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: newTitle,
            })
        })
        .then((res) => res.json())
        .then(console.log);
    };

    const addNewProduct = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProductData)
        })
        .then((res) => res.json())
        .then((newProduct) => {
            setItems([...items, newProduct]);
            setShowModal(false); 
            setNewProductData({ title: '', price: '', thumbnail: '' });
        });
    };

    return (
        <div className="container py-4">
            <button className=' btn btn-primary' onClick={() => setShowModal(true)}>Add +</button>
            {loading ? (
                <span className="loader"></span>
            ) : items.length === 0 ? (
                <p>No products available</p>
            ) : (
                items.map((item, id) => (
                    <div key={id} className="border-bottom d-flex flex-wrap-reverse align-items-center justify-content-around bottomer">
                        <img
                            className="p-3 admin-img"
                            style={{ width: '15%' }}
                            src={item.thumbnail}
                            alt=""
                        />
                        <div>
                            <h2>{item.title}</h2>
                            <h5>Price: {item.price}$</h5>
                        </div>
                        <div className='d-flex gap-3 ' style={{ flexDirection: 'column' }}>
                            <button className='btn btn-success'
                                onClick={() => {
                                    const newTitle = prompt('Enter a new title:', item.title);
                                    if (newTitle) {
                                        handleEdit(item.id, newTitle);
                                    }
                                }}
                            >
                                Edit
                            </button>
                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                value={newProductData.title}
                                onChange={(e) => setNewProductData({ ...newProductData, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                value={newProductData.price}
                                onChange={(e) => setNewProductData({ ...newProductData, price: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formThumbnail">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image link"
                                value={newProductData.thumbnail}
                                onChange={(e) => setNewProductData({ ...newProductData, thumbnail: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNewProduct}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Customer;
