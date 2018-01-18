import React from 'react'
import Filters from './footer/Filters'
import AddTodo from './header/AddTodo'
import Header from './header/Header'
import VisibleTodoList from './todos/VisibleTodoList'
import TodoTable from './todos/TodoTable'
import Nav from './header/Nav'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router';

const App = () => (
	<div className="todoStyle">
		<Header />
		<Nav />
		<AddTodo />

		<Switch>
			<Route exact path="/" component={VisibleTodoList} />
	    <Route path="/table" component={TodoTable} />
	    <Route component={NotFound} />
	  </Switch>

	  <Filters/>
	</div>
)

export default App;
