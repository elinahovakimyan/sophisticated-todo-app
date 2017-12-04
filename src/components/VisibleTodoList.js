import React, {Component} from 'react'
import Todo from './Todo'
import '../Style.css'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { Row, Col } from 'antd'

const TodoList = ({todos, onTodoClick}) => (
	<Row>
		<Col span={8}>
			<div className="listDiv">
				<h3> Work Todos </h3>
				{todos.filter(function({theType}) {
				    return theType == 'work'
				}).map(todo => (
			    	<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
			    ))}
			</div>
		</Col>
		<Col span={8}>
			<div className="listDiv">
				<h3> Study Todos </h3>
				{todos.filter(function({theType}) {
				    return theType == 'study'
				}).map(todo => (
			    	<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
			    ))}
			</div>
		</Col>
		<Col span={8}>
			<div className="listDiv">
				<h3> Family Todos </h3>
				{todos.filter(function({theType}) {
				    return theType == 'family'
				}).map(todo => (
			    	<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
			    ))}
			</div>
		</Col>
	</Row>		
)

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
		default:
			return todos
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList