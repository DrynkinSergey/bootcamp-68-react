import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

// https://dummyjson.com/posts
export const fetchPosts = async args => {
	const response = await axios.get(`posts`, {
		params: {
			limit: 6,
			...args,
		},
	})
	return response.data
}

//https://dummyjson.com/posts/search?q=love
export const fetchPostsByQuery = async args => {
	const response = await axios.get(`posts/search`, {
		params: {
			limit: 6,
			...args,
		},
	})
	return response.data
}

// https://dummyjson.com/products
export const fetchProducts = async (id, limit) => {
	const response = await axios.get(`products?limit=${limit}&id=${id}`)
	return response.data
}

export const fetchUsers = async () => {
	const { data } = await axios.get(`users?limit=40`)
	return data.users
}
export const fetchUsersById = async userId => {
	const { data } = await axios.get(`users/${userId}?limit=40`)
	return data
}

export const fetchPostsByUserId = async userId => {
	const { data } = await axios.get(`posts/user/${userId}`)
	return data.posts
}
