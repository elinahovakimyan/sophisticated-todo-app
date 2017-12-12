import React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './App'
import './css/styles.css'

import './firebase';

render(
	<LocaleProvider locale={enUS}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</LocaleProvider>,
  	document.getElementById('root')
)