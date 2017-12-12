import { v4 } from 'node-uuid';

export const addTodo = (values) => {
	return {
		type: 'ADD_TODO',
		id: v4(),
		title: values.title,
		description: values.description,
		theType: values.theType,
		loc: values.loc 
	}
}

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
} 