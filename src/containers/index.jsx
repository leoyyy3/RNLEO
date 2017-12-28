import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {BrowserRouter} from 'react-router-dom'
import localStore from '../util/localStore'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import Wlayout from './Wlayout'

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
            {/*<BrowserRouter>*/}
                {this.state.initDone?<Wlayout />:<p>正在加载中。。。。。。</p>}
            </div>
        )
    }
    componentDidMount() {
        let cityName = localStore.getItem('CITYNAME');
        if(cityName == null){
            localStore.setItem('CITYNAME','北京')
        }
        // setTimeout(()=>{
        //     this.setState({
        //         initDone:true
        //     })
        // },2000)

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
