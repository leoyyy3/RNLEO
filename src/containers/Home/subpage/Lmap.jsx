import React from 'react'
import mapv from "mapv"
import {Map,Marker,InfoWindow,NavigationControl} from "react-bmap"
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
            	<Map center={{lng: 116.402544, lat: 39.928216}} zoom="5" enableScrollWheelZoom="true" mapStyle={{style: 'grayscale'}}>
                    <Marker position={{lng: 116.402544, lat: 39.928216}} />
                    <NavigationControl /> 
                    <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
                </Map>
            </div>
        )
    }
    componentWillMount() {
        console.log("BMap",Map)
    }
    componentDidMount() {
        
    	var result = getAdData()
    	result.then((res)=>{
    		// console.log('res',res.json())
    		return res.json()
    	}).then((json)=>{
    		this.setState({data:json})
    	})

        console.log("__DEV__",__DEV__)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default NotFound
// module.exports = NotFound