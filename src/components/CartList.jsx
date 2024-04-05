import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

const CartList = () => {
	const { cart, removeFromCart, totalCart, increaseQty, decreaseQty, removeCart } = useContext(CartContext)
	return (
		<section className='cartWrapper'>
			<ul className='cartList'>
				{cart.map(item => (
					<li className='cartItem' key={item.id}>
						<img width='150' height='100' src={item.thumbnail} alt={item.title} />
						<h3>{item.title}</h3>
						<div>
							<button className='btn border' onClick={() => decreaseQty(item)}>
								-
							</button>
							<span> {item.qty} </span>
							<button className='btn border' onClick={() => increaseQty(item)}>
								+
							</button>
						</div>
						<span>{item.price}$</span>
						<button className='btn border' onClick={() => removeFromCart(item)}>
							Remove
						</button>
					</li>
				))}
			</ul>
			<div className='amount'>
				<button onClick={removeCart} className='btn border'>
					Clear all cart
				</button>
				<p>Total amount: {totalCart}$</p>
			</div>
		</section>
	)
}

export default CartList
