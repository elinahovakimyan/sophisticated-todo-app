import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';

const ClearTodos  = () => {
	return(
		<Button
			onClick={e => {
				e.preventDefault();
				localStorage.clear();
			}}
		>
			Clear All Todos
		</Button>
	)
}


export default ClearTodos;
