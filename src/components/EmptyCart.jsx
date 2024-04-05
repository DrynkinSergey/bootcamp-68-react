const EmptyCart = ({ setSelectedTab }) => {
	return (
		<section className='noContent'>
			<img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png' />
			<h1>Cart is empty!</h1>
			<button onClick={() => setSelectedTab('home')} className='btn border'>
				Go home
			</button>
		</section>
	)
}

export default EmptyCart
