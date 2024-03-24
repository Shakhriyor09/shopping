import React from 'react'
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom';
import './style.css'

const All = () => {
    const { data, error, loading } = useAxios('https://dummyjson.com/products')
    console.log(data);
    return (
        <div className='container row mx-auto'>
            {
                loading ? (<span class="loader"></span>) : (
                    data?.products?.map((item, id) => (
                        <div className='col-md-3 p-3' key={id}>
                            <div className="card">
                                <img src={item.thumbnail} className="card-img-top" alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.title.slice(0, 15)}</h4>
                                    <h5 className='py-2'>{item.price} $</h5>
                                    <p className="card-text">{item.description.slice(0, 50)}</p>
                                    <Link to={`products/${id + 1}`} href="#" className="btn btn-primary">Product Info</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default All