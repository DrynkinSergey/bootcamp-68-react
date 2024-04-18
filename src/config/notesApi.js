import axios from 'axios'

export const notesApi = axios.create({
	baseURL: 'https://661ccf58e7b95ad7fa6b33a5.mockapi.io/',
})
