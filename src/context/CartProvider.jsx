import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addToCart = product => {
		setCart(prev => [...prev, product])
	}
	const removeFromCart = product => {
		setCart(prev => prev.filter(item => item.id !== product.id))
	}

	const contextValue = {
		cart,
		addToCart,
		removeFromCart,
	}

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartProvider
