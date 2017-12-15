import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import Delete from 'react-icons/lib/fa/close'
import { Icon, Modal, Button } from 'antd'
import ReactTimeout from 'react-timeout'

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseIn: false,
			visible: false,
		}
		this.handleMouseIn = this.handleMouseIn.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.showModal = this.showModal.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleDeleteClick(id) {
		this.props.onDeleteClick(id);
	}

	handleMouseIn() {
		this.setState({
			mouseIn: true,
		});
	}

	handleMouseOut() {
		this.setState({
			mouseIn: false,
		});
	}

	showModal() {
		this.setState({
			visible: true,
		});
	}

	handleCancel() {
		this.setState({ 
			visible: false 
		});
	}


	render() {
		const {id} = this.props;

		return (
			<div className="todo"
				 onMouseOver={this.handleMouseIn}
				 onMouseOut={this.handleMouseOut}
				 ref={elem => this.todoSq = elem}
				 style={{
					textDecoration: 
					this.props.completed ? 'line-through' : 'none',
					background: 
					this.state.mouseIn ? '#ECE0D3' : '#FAFBF7'
				 }}>

				 <div className="todoText"
				 	  onClick={this.props.onClick}>

					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
					{!!this.props.loc &&
					<p> <i>At</i> {this.props.loc} </p>}

				</div>

				<span onClick={this.showModal}>
					<Icon type="delete" onClick={this.showModal}/>
				</span>

				<Modal
					visible={this.state.visible}
					title="Do you want to get rid of this todo permanently?"
					onCancel={this.handleCancel}
					footer={[]}
				>
		          	<Button onClick={() => this.handleDeleteClick(id)}>
						Confirm
					</Button>

					<Button onClick={this.handleCancel}>
						O no, please keep it 
					</Button>
				</Modal>
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