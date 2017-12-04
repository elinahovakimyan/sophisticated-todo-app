const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					description: action.description,
					deadline: action.deadline,
					theType: action.theType,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => 
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		case 'DELETE_TODO':
			return state.filter( todo => 
				todo.id !== action.id
			)
		default:
			return state
	}
}

export default todos