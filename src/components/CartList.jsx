import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

const CartList = () => {
	const { cart, removeFromCart } = useContext(CartContext)
	return (
		<ul>
			{cart.map(item => (
				<li key={item.id}>
					<img width='150' height='100' src={item.thumbnail} alt={item.title} />
					<h3>{item.title}</h3>
					<div>
						<button className='btn border'>-</button>
						<span>1</span>
						<button className='btn border'>+</button>
					</div>
					<button className='btn border' onClick={() => removeFromCart(item)}>
						Remove
					</button>
				</li>
			))}
		</ul>
	)
}

export default CartList
