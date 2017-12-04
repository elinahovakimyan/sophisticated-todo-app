import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import TodoTable from './components/TodoTable'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

const App = () => (
	<div className="todoStyle">
		<Header />
		<AddTodo />
		<Tabs type="card" className="tabMain">
		    <TabPane tab="Columns" key="1">
		    	<VisibleTodoList />
		    	<Footer /> 
		    </TabPane>
		    <TabPane tab="Table" key="2">
		    	<h2> Todos' List :)  </h2>
		    	<TodoTable/>
		    </TabPane>
		</Tabs>			
	</div>
)

export default App