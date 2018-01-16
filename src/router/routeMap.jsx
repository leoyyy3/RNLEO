import React from 'react'
import { Route ,BrowserRouter,Switch,Router} from 'react-router-dom'

// import App from '../containers'
import Home from '../containers/Home'
// import City from '../containers/City'
import Adduser from '../containers/Adduser'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'
import Wlayout from '../containers/Wlayout'

// import Login from '../containers/Login'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap {
    render() {
        return (
            <Router history={browserHistory}>
                    {/*<Route path='/' component={Wlayout}>*/}
                    {/*<Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login' component={Login}/>
                    <Route path='*' component={NotFound}/>*/}
                    {/*<Route exact path='/' component={Home} />*/}
                        <IndexRoute component={Home} />
                        <Route path='addUser' component={Adduser}/>
                        <Route path='detail/:id' component={Detail}/>
                        <Route path='*' component={NotFound}/>
                    {/*</Route>*/}
            </Router>
            
        )
    }
}

export default RouterMap
