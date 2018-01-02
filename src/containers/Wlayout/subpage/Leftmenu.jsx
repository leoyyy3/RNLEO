import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Leftmenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />员工管理</span>}>
                    <Menu.Item key="1">
                      <Link to="/">员工列表</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/addUser">添加员工</Link>
                    </Menu.Item>
                  </SubMenu>
                  {/*<SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                  </SubMenu>*/}
                </Menu>
              </Sider>
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
)(Leftmenu)
