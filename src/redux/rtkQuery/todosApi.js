import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	tagTypes: ['todos', 'filter'],
	reducerPath: 'todoApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://661ccf58e7b95ad7fa6b33a5.mockapi.io/',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => 'todos',
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, completed: !body.completed },
			}),
			invalidatesTags: ['todos'],
		}),
		changeName: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, todo: prompt('New title') },
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleTodoMutation,
	useChangeNameMutation,
} = todoApi
