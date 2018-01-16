import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Route ,Switch} from 'react-router-dom'
import Head from './subpage/Head'
import Leftmenu from './subpage/Leftmenu'
import {connect} from 'react-redux'
import Bundle from '../../util/bundle'

import Adduser from '../Adduser'
import Detail from '../Detail'
import NotFound from '../404'
import Login from '../Login';
import aHome from 'bundle-loader?lazy&name=app-[name]!../Home'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

const Home = () => (
      <Bundle load={aHome}>
        {(Home) => <Home />}
      </Bundle>
    )


class Wlayout extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Switch>
            <Route path='/login' component={Login}/>
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
                        {/*{this.props.children}*/}
                          <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/addUser' component={Adduser}/>
                            <Route path='/detail/:id' component={Detail}/>
                            <Route path='*' component={NotFound}/>
                          </Switch>
                        </Content>
                  </Layout>
                
                </Layout>
            
            </Layout>
            </Switch>
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
