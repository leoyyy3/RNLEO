import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Button,List, Avatar,Modal} from 'antd'

import './style.less'

class homeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    // edit(data){
    //   console.log('edit',data)
    // }

    render() {
        return (
            <List
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.userimg}/>}
                  title={<a href="">{item.username}</a>}
                  description={`员工年龄:${item.age} ，员工手机号:${item.phone}`}
                />
                <a href="javascript:;" onClick={()=>{this.props.edit(item)}}>编辑</a>&nbsp;|&nbsp;
                <a>更多</a>&nbsp;|&nbsp;
                <a href="javascript:;" onClick={()=>{this.props.delete(item)}}>删除</a>
              </List.Item>
            )}
          />
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default homeAd
// module.exports = Search