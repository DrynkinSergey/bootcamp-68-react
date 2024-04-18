import { createAsyncThunk } from '@reduxjs/toolkit'
import { notesApi } from '../../config/notesApi'

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (_, thunkAPI) => {
	try {
		const { data } = await notesApi.get('notes')
		const author = thunkAPI.getState().auth.user.name
		return data.filter(note => note.author === author)
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addNoteThunk = createAsyncThunk('notes/addNote', async (note, thunkAPI) => {
	try {
		await notesApi.post('notes', note)
		await thunkAPI.dispatch(fetchNotes())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteNoteThunk = createAsyncThunk('notes/deleteNote', async (id, thunkAPI) => {
	try {
		await notesApi.delete(`notes/${id}`)
		await thunkAPI.dispatch(fetchNotes())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const updateNoteThunk = createAsyncThunk('notes/update', async (note, thunkAPI) => {
	try {
		await notesApi.put(`notes/${note.id}`, { ...note, liked: !note.liked })
		await thunkAPI.dispatch(fetchNotes())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const updateFullNoteThunk = createAsyncThunk('notes/updateFullNote', async (note, thunkAPI) => {
	try {
		await notesApi.put(`notes/${note.id}`, note)
		await thunkAPI.dispatch(fetchNotes())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
