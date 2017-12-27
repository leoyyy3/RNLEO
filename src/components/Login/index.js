import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../../static/css/login.css'
// import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            uname:'',
            pwd:""
        }
    }

    handleUname(e){
        this.setState({uname:e.target.value})
    }

    handlePwd(e){
        this.setState({pwd:e.target.value})
    }

    login(){
        this.props.login(this.state.uname,this.state.pwd)
    }

    render() {
        return (
            <div className="login_wrap">
                <h2>请登录</h2>
                <p className="login_p">
                    <input type="text" placeholder="请输入用户名" id="uname" value={this.state.uname} onChange={this.handleUname.bind(this)}/>
                </p>
                <p className="login_p">
                    <input type="text" placeholder="请输入密码" id="pwd" value={this.state.pwd} onChange={this.handlePwd.bind(this)}/>
                </p>
                <a href="javascript:;" onClick={this.login.bind(this)} className="login_sub" id="sub">登录</a>
                <p className="login_error" id="login_error">{this.props.loginInfo}</p>
            </div>
        )
    }
}

// // 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default homeAd
module.exports = Login