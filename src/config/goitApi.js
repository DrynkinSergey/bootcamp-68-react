import axios from 'axios'

export const goitApi = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
