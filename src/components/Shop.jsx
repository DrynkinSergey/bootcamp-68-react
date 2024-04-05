import { useEffect, useState } from 'react'
import { fetchProducts, fetchProductsByQuery } from '../services/api'
import Product from './Product'
import Pagination from './Pagination'
import NoContent from './NoContent'
import { useToggle } from '../hooks/useToggle'
import Modal from '../modal/Modal'
import ProductDetails from './ProductDetails'

const Shop = ({ query }) => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [totalProducts, setTotalProducts] = useState(0)
	const [page, setPage] = useState(1)
	const limit = 6
	const pages = Math.ceil(totalProducts / limit)
	const [content, setContent] = useState(null)
	const { isOpen, toggle } = useToggle()

	const showProductDetails = product => {
		toggle()
		setContent(product)
	}

	useEffect(() => {
		setPage(1)
	}, [query])

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				setIsError(false)
				const { products, total } = query
					? await fetchProductsByQuery({ q: query, skip: (page - 1) * limit, limit })
					: await fetchProducts({ limit, skip: (page - 1) * limit })
				setItems(products)
				setTotalProducts(total)
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [page, query])
	return (
		<div>
			{totalProducts > limit && <Pagination currentPage={page} pages={pages} setPage={setPage} />}
			{!items.length && query && !isLoading && <NoContent />}
			<ul className='list'>
				{items.map(item => (
					<Product key={item.id} item={item} showProductDetails={showProductDetails} />
				))}
			</ul>
			{isOpen && (
				<Modal title={content.title} closeModal={toggle}>
					<ProductDetails product={content} />
				</Modal>
			)}
		</div>
	)
}

export default Shop
