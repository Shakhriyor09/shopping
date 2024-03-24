import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Components = ({ data }) => {
    return (

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
    )
}

export default Components