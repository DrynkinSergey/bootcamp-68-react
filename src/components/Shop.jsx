import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import Product from './Product'
import Pagination from './Pagination'

const Shop = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [totalProducts, setTotalProducts] = useState(0)
	const [page, setPage] = useState(1)
	const limit = 6
	const pages = Math.ceil(totalProducts / limit)

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				setIsError(false)
				const { products, total } = await fetchProducts({ limit, skip: (page - 1) * limit })
				setItems(products)
				setTotalProducts(total)
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [page])
	return (
		<div>
			<Pagination currentPage={page} pages={pages} setPage={setPage} />
			<ul className='list'>
				{items.map(item => (
					<Product key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Shop
