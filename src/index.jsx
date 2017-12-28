import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route ,BrowserRouter,Router,HashRouter,history} from 'react-router-dom'
// import { updateLocation, history } from './location'
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
    	<HashRouter history={history}>
	        {/*<App />*/}

	        	<Route  component={App}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
