import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Button} from 'antd'

import './style.less'

class homeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ul>
                <li></li>
            </ul>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default homeAd
// module.exports = Search