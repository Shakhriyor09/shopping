import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Checkout from '../components/Checkout'
import CartDetail from '../components/CartDetail'
import { CartProvider } from '../CartContext'
import Smartphones from '../pages/Smartphones'
import Laptops from '../pages/Laptops'
import Fragrances from '../pages/Fragrances'
import Skincare from '../pages/Skincare'
import Groceries from '../pages/Groceries'
import HomeDecoration from '../pages/HomeDecoration'
import Furniture from '../pages/Furniture'
import Tops from '../pages/Tops'
import WomensDresses from '../pages/WomensDresses'
import All from '../pages/All'
import Register from '../components/Register'
import Login from '../components/Login'
import Customer from '../components/Customer'
import ProductsPage from '../pages/ProductsPage'


const Rout = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Product />} />
              <Route path='chekout' element={<Checkout />} />
              <Route path='register' element={<Register />} />
              <Route path='customer' element={<Customer />} />
              <Route path='login' element={<Login />} />
              <Route path=':id' element={<CartDetail />} />
              <Route path='all' element={<All />} />
              <Route path='products/smartphones' element={<Smartphones />} />
              <Route path='products/laptops' element={<Laptops />} />
              <Route path='products/fragrances' element={<Fragrances />} />
              <Route path='products/skincare' element={<Skincare />} />
              <Route path='products/groceries' element={<Groceries />} />
              <Route path='products/home-decoration' element={<HomeDecoration />} />
              <Route path='products/furniture' element={<Furniture />} />
              <Route path='products/tops' element={<Tops />} />
              <Route path='products/womens-dresses' element={<WomensDresses />} />
              <Route path='products/' element={<ProductsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default Rout