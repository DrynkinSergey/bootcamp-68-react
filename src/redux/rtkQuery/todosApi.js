import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://661ccf58e7b95ad7fa6b33a5.mockapi.io/',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => 'todos',
		}),
	}),
})

export const { useGetTodosQuery } = todoApi
