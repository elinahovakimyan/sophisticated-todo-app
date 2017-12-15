import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import TodoTable from './components/TodoTable'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router';

const App = () => (
	<div className="todoStyle">
		<Header />
		<AddTodo />
		
		<Switch>
			<Route exact path="/" component={VisibleTodoList} />
	        <Route path="/table" component={TodoTable} />
	        <Route component={NotFound} />
        </Switch>

        <Footer/>
	</div>
)

export default App;