import React, { Component } from 'react';
import Checklist from 'react-icons/lib/fa/list'

class Header extends Component {
  render() {
    return (
		<div className="heading">
			<img src="http://moziru.com/images/drawn-santa-hat-animated-17.png" className="heading-img" />
			<h2 className="heading-title"> Welcome to your TO-DO list </h2>

		</div>
  	)
  }
}

export default Header;