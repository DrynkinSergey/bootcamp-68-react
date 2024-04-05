import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchProducts = async args => {
	const { data } = await axios.get('products', {
		params: {
			...args,
		},
	})
	return data
}
export const fetchProductsByQuery = async args => {
	const { data } = await axios.get('products/search', {
		params: {
			...args,
		},
	})
	return data
}
