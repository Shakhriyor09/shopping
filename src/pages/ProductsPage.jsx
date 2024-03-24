import React from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const ProductsPage = () => {
  const { data, error, loading } = useAxios('https://dummyjson.com/products')
  return (
    <>
      <div className='d-flex align-items-center justify-content-between container'>
        <Link className='btn btn-primary' to={'all'}>All</Link>
        <Link className='btn btn-primary' to={'smartphones'}>smartphones</Link>
        <Link className='btn btn-primary' to={'laptops'}>Laptops</Link>
        <Link className='btn btn-primary' to={'fragrances'}>Fragrances</Link>
        <Link className='btn btn-primary' to={'skincare'}>Skincare</Link>
        <Link className='btn btn-primary' to={'groceries'}>groceries</Link>
        <Link className='btn btn-primary' to={'home-decoration'}>home-decoration</Link>
        <Link className='btn btn-primary' to={'furniture'}>furniture</Link>
        <Link className='btn btn-primary' to={'tops'}>Tops</Link>
        <Link className='btn btn-primary' to={'womens-dresses'}>womens-dresses</Link>
      </div>
      <div>
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
      </div>
      </>
  )
}

export default ProductsPage