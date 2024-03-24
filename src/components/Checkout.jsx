import React, { useContext } from 'react'
import CartContext from '../CartContext'
import './style.css'

const Checkout = () => {
  const { items } = useContext(CartContext)
  const total = items.reduce((acc, item) => acc + item.item.data.price, 0)
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.item.data.id} className='container'>
          <div className='box-shop'>
            <img src={item.item.data.thumbnail} alt="" />
            <p className='title'>{item.item.data.title}</p>
            <p className='price'>${item.item.data.price}</p>
          </div>
        </div>
      ))} 
      <h5 className='container my-4 text-end'>Total price: ${total}</h5>
    </div>
  )
}

export default Checkout