import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({ active, children, onClick }) => {
	if(active) {
		return <span> {children} </span>
	}

	return( 
		<Button
			onClick={e => {
				e.preventDefault()
				onClick()
			}} 
		>
			{children}
		</Button>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.VisibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))

		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink;