import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addToCart = product => {
		setCart(prev => [...prev, { ...product, qty: 1 }])
		toast.success(`Product "${product.title}" was added to cart! 🔥`)
	}
	const removeFromCart = product => {
		setCart(prev => prev.filter(item => item.id !== product.id))
	}

	const increaseQty = product => {
		setCart(prev => prev.map(item => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)))
	}
	const decreaseQty = product => {
		if (product.qty === 1) {
			return removeFromCart(product)
		}
		setCart(prev => prev.map(item => (item.id === product.id ? { ...item, qty: item.qty - 1 } : item)))
	}

	const totalCart = cart.reduce((total, product) => (total += product.price * product.qty), 0)

	const removeCart = () => setCart([])

	const checkInside = product => cart.some(item => item.id === product.id)

	const contextValue = {
		cart,
		addToCart,
		removeFromCart,
		totalCart,
		increaseQty,
		decreaseQty,
		removeCart,
		checkInside,
	}

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartProvider
