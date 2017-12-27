import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Logins from '../../components/Login'

import {loginAction} from '../../actions/login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    login(u,p){
        this.props.dispatch(loginAction({username:u,password:p}))
    }
    render() {
        return (
            <Logins 
                login={this.login.bind(this)}
                loginInfo = {this.props.loginInfo}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        loginInfo:state.loginInfo
    }
}


export default connect(
    mapStateToProps
)(Login)
