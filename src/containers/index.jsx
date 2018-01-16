import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import localStore from '../util/localStore'
import Bundle from '../util/bundle'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import Wlayout from './Wlayout'
// import Login from './Login'
// import aLogin from 'bundle-loader?lazy!./Login'
import aLogin from 'bundle-loader?lazy&name=app-[name]!./Login';

const Login = () => (
      <Bundle load={aLogin}>
        {(Login) => <Login />}
      </Bundle>
    )

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:true
        }
    }

    

    render() {
        return (
            <div style={{height:"100%"}}>
            <Switch>
                <Route path='/login' component={Login}/>
                {this.state.initDone?<Wlayout />:<p>正在加载中。。。。。。</p>}
            </Switch>
            </div>
        )
    }
    componentDidMount() {
        aLogin(() => {});
        let cityName = localStore.getItem('CITYNAME');
        if(cityName == null){
            localStore.setItem('CITYNAME','北京')
        }

        this.props.userInfoActions.update({
            cityName:cityName
        })
    }
}

function mapStateToProps(state){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
