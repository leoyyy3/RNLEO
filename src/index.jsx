import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route ,BrowserRouter,Switch} from 'react-router-dom'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'
import 'antd/dist/antd.css'

import App from './containers'
import Login from './containers/Login'


// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

// import { testFetch } from './fetch/test.js'
// testFetch();

render(
    <Provider store={store}>
    	<BrowserRouter>
	        <App />
	        	{/*<Route path='/login' component={Login}/>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
