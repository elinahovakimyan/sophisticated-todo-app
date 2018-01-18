import React from 'react'
import FilterLink from './FilterLink'

const Filters = () => (
	<p className="footer">
		<span className="filterTag">
			<FilterLink filter="SHOW_ALL">
				All
			</FilterLink>
		</span>
		<span className="filterTag">
			<FilterLink filter="SHOW_ACTIVE">
				Active
			</FilterLink>
		</span>
		<span className="filterTag">
			<FilterLink filter="SHOW_COMPLETED">
				Done
			</FilterLink>
		</span>
	</p>
)

export default Filters;
