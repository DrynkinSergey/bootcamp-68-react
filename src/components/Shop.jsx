import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import Product from './Product'

const Shop = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				setIsError(false)
				const { products } = await fetchProducts({ limit: 6 })
				setItems(products)
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [])
	return (
		<div>
			<ul className='list'>
				{items.map(item => (
					<Product key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Shop
