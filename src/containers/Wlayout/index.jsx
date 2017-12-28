import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Route ,BrowserRouter,Switch} from 'react-router-dom'
import Head from './subpage/Head'
import Leftmenu from './subpage/Leftmenu'
import {connect} from 'react-redux'

import Home from '../Home'
import Adduser from '../Adduser'
import User from '../User'
import Detail from '../Detail'
import NotFound from '../404'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;


class Wlayout extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Layout style={{height:"100%"}}>
                <Head />
                <Layout>
                <Leftmenu />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>List</Breadcrumb.Item>
                      <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/addUser' component={Adduser}/>
                        <Route path='/User' component={User}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='*' component={NotFound}/>
                      </Switch>
                    </Content>
                  </Layout>
                
            </Layout>
            </Layout>

        )
    }
}

function mapStateToProps(state){
    return {
    }
}

function mapDispatchToProps(dispatch){
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wlayout)
