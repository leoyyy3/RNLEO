import React from 'react'
import { Route ,BrowserRouter,Switch} from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

import Login from '../containers/Login'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login' component={Login}/>
                    <Route path='*' component={NotFound}/>
                  </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterMap
