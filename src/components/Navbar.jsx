import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartContext from '../CartContext'
const Navbar = () => {
    const { items } = useContext(CartContext)

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">Navbar</Link>
                    <form className="d-flex align-items-center gap-3" role="search">
                        <Link className='nav-link' to={'customer'}>Customer</Link>
                        <Link to={'products'} className='nav-link'>Products</Link>
                        <Link to={'register'} className='btn btn-primary'>Register</Link>
                        <Link to={'login'} className='btn btn-success'>Login</Link>
                        
                        <Link to={'/chekout'} >
                            <button className='btn ms-3 btn-primary p-2 d-flex align-items-center gap-2 px-2 fs-6'>
                                <AiOutlineShoppingCart className='fs-4' />
                                <span>{items.length}</span>
                            </button>
                        </Link>

                    </form>
                </div>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

export default Navbar