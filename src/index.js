import React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './Style.css'

render(
	<LocaleProvider locale={enUS}>
		<Provider store={store}>
			<App />
		</Provider>
	</LocaleProvider>,
  	document.getElementById('root')
)