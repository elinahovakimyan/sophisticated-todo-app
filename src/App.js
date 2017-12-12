import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import TodoTable from './components/TodoTable'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router-dom';

const App = () => (
	<div className="todoStyle">
		<Header />
		<AddTodo />
		<Switch>
			<Route path="/" component={VisibleTodoList} />
			<Route path="/tableView" component={TodoTable} />
			<Route component={NotFound} />
        </Switch>
	</div>
)

export default App;