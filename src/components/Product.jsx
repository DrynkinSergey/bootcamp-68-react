import { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa6'
import { CartContext } from '../context/CartProvider'

const Product = ({ item }) => {
	const { addToCart } = useContext(CartContext)
	return (
		<li className='card'>
			<div>
				<img src={item.thumbnail} alt={item.title} />
			</div>
			<div className='content'>
				<h3>{item.title}</h3>
				<div className='btns'>
					<span>{item.price}$</span>
					<div className='btns'>
						<button className='btn border'>Show info</button>
						<button className='btn border' onClick={() => addToCart(item)}>
							<FaCartArrowDown />
						</button>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Product
