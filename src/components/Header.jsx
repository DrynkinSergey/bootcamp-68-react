import Search from './Search'

const Header = ({ setSelectedTab }) => {
	return (
		<header className='header'>
			<div onClick={() => setSelectedTab('home')}>React Shop</div>
			<Search />
			<button onClick={() => setSelectedTab('cart')} className='btn border'>
				Cart
			</button>
		</header>
	)
}

export default Header
