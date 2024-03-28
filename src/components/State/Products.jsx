import { useEffect, useState } from 'react'
import productsData from '../../assets/products.json'
import { ProductCard } from './ProductCard'
import s from './Products.module.css'
import Modal from '../Modal/Modal'
const Products = () => {
	const [products] = useState(productsData)
	const [cart, setCart] = useState(() => {
		const savedData = JSON.parse(window.localStorage.getItem('cart'))
		if (savedData?.length) {
			return savedData
		}
		return []
	})
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenViewMore, setIsOpenViewMore] = useState(false)
	const [searchStr, setSearchStr] = useState('')
	const [contentModal, setContentModal] = useState({})

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const openModalWithProduct = product => {
		setContentModal(product)
		setIsOpenViewMore(true)
	}
	const closeModalWithProduct = () => {
		setIsOpenViewMore(false)
	}
	const toggleModal = () => setIsOpen(prev => !prev)
	// spread
	// const pr = [{ info: 'phone' }, { info: 'tablet' }]
	// const newEl = { info: 'laptop' }
	// console.log([...pr, { info: 'laptop' }])
	// console.log([...pr, newEl])

	// rest
	// const arr = [1, 2, 3, 4, 5]
	// const [firstEl, ...restEl] = arr
	// console.log(firstEl)
	// console.log(restEl)
	const handleAddToCart = product => {
		setCart(prev => [...prev, product])
	}

	const handleDeleteFromCart = id => {
		setCart(prev => prev.filter(item => item.id !== id))
	}

	const getFilteredData = () => {
		return products.filter(item => item.title.toLowerCase().includes(searchStr.toLowerCase()))
	}
	const filteredData = getFilteredData()

	return (
		<>
			<header className={s.header}>
				<div>Logo</div>
				<input
					value={searchStr}
					onChange={e => setSearchStr(e.target.value)}
					type='text'
					placeholder='Enter product name...'
				/>
				<button onClick={toggleModal}>Cart</button>
			</header>
			<ul className={s.list}>
				{filteredData.map(item => (
					<ProductCard
						key={item.id}
						item={item}
						handleAddToCart={handleAddToCart}
						openModalWithProduct={openModalWithProduct}
					/>
				))}
			</ul>
			{isOpenViewMore && (
				<Modal closeModal={closeModalWithProduct}>
					<img src={contentModal.thumbnail} width='400' />
					<h2>{contentModal.title}</h2>
					<p>{contentModal.description}</p>
					<p>Brand: {contentModal.brand}</p>
					<p>Category: {contentModal.category}</p>
					<p>Rating: {contentModal.rating}</p>
				</Modal>
			)}

			{isOpen && (
				<Modal closeModal={toggleModal}>
					<h2>CART</h2>
					{!cart.length ? (
						<p>no data</p>
					) : (
						<ul>
							{cart.map(item => (
								<li key={item.id}>
									{item.title} {item.price}$<button onClick={() => handleDeleteFromCart(item.id)}>Delete</button>
								</li>
							))}
						</ul>
					)}
				</Modal>
			)}
		</>
	)
}

export default Products
