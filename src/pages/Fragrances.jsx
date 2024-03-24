import React from 'react'
import useAxios from '../hooks/useAxios'
import Components from './Components'
import { Link } from 'react-router-dom'

const Fragrances = () => {
    const { data, loading } = useAxios('/products/category/fragrances')

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

            <div className='col-md-3 p-3' key={data.id}>
                {

                    <div div className="card" >
                        <img src={data.thumbnail} className="card-img-top" alt={data.title} style={{ height: "250px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h4 className="card-title">{data.title.slice(0, 15)}</h4>
                            <h5 className='py-2'>{data.price} $</h5>
                            <p className="card-text">{data.description.slice(0, 50)}</p>
                            <Link to={`${data.id + 1}`} href="#" className="btn btn-primary">Product Info</Link>
                        </div>
                    </div >

                }

            </div >
            loading ? (<span class="loader" ></span>) : (
            <div className='container row mx-auto'>
                {
                    data?.products?.map(item => <Components data={item} />)
                }
            </div >
            )

            )
            loading ? (<span class="loader" ></span>) : (
            <div className='container row mx-auto'>
                {
                    data?.products?.map(item => <Components data={item} />)
                }
            </div >
            )
        </>

    )
}

export default Fragrances
