import { useContext } from 'react'
import Search from './Search'
import { CartContext } from '../context/CartProvider'

const Header = ({ setSelectedTab }) => {
	const { cart } = useContext(CartContext)
	return (
		<header className='header'>
			<div onClick={() => setSelectedTab('home')}>React Shop</div>
			<Search />
			<button onClick={() => setSelectedTab('cart')} className='btn border'>
				Cart {cart.length ? <div className='iconCheck'>{cart.length}</div> : null}
			</button>
		</header>
	)
}

export default Header
