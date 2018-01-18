import React, { Component } from 'react';
import ColView from 'react-icons/lib/fa/columns';
import TableView from 'react-icons/lib/fa/list';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
		<div className="nav-icons">
			<Link to="/table">
				<span className="nav-item" id="tableView">
					<TableView/>
				</span>
			</Link>
			<Link to="/">
				<span className="nav-item left-nav" id="colView">
					<ColView/>  
				</span>
			</Link>
		</div>      
    );
  };
};

export default Nav;