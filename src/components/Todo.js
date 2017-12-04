import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import Delete from 'react-icons/lib/fa/close'
import '../Style.css'

class Todo extends Component {
	handleDeleteClick(id) {
		this.props.onDeleteClick(id);
	}
	render() {
		const {id} = this.props

		return (
			<div onClick={this.props.onClick}
				 style={{
					textDecoration: 
					this.props.completed ? 'line-through' : 'none'
				 }}
				 className="todo">
				<h3>
			 		{this.props.title}
				</h3>
				<p> {this.props.description} </p>
				<span onClick={() => this.handleDeleteClick(id)}>
					<Delete />
				</span>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick: id => {
			dispatch(deleteTodo(id));
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Todo)