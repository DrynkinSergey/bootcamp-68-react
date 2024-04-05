import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

const Cart = ({ setSelectedTab }) => {
	const { cart } = useContext(CartContext)
	return <div>{cart.length ? <CartList cart={cart} /> : <EmptyCart setSelectedTab={setSelectedTab} />}</div>
}

export default Cart
