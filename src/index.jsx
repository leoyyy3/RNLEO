import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter,
		  Route,
		  Link} from 'react-router-dom'
// import { updateLocation, history } from './location'
import configureStore from './store/configureStore'
// import { browserHistory } from 'react-router'

import './static/css/common.less'
import './static/css/font.css'
// import 'antd/dist/antd.css'

// import App from './containers'
import Login from './containers/Login'

import Wlayout from './containers/Wlayout'


// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

// import { testFetch } from './fetch/test.js'
// testFetch();

render(
    <Provider store={store}>
    <BrowserRouter>
    	{/*<Router>*/}
	        {/*<App />*/}
	        {/*<RouteMap />*/}
	        	<Route  component={Wlayout}/>
        {/*</Router>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
