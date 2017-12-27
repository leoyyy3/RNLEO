import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/test'
import HomeAd from '../../../components/homeAd'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	data:[]
        }
    }
    render() {
        return (
        	<div>
            	<HomeAd data={this.state.data}></HomeAd>
            </div>
        )
    }
    componentDidMount() {

        console.log("__DEV__",__DEV__)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default NotFound
// module.exports = NotFound