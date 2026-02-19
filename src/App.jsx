import { useState } from "react"

function App() {
  const products = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Shoes", price: 50 },
    { id: 3, name: "Hat", price: 15 }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div>
      <h1>E-commerce App</h1>

      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 && <p>No items</p>}

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
