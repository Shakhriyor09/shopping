import { createContext, useState } from 'react'

const CartContext = createContext()
export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addCard = (item, id) => {
    setItems((prev) => [...prev, { item, id }])
  }
console.log(items);
  return (
    <div>
      <CartContext.Provider value={{ items, addCard }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContext