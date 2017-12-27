import React from 'react'
import {utilCityCenter} from "mapv"
import {Map,Marker,InfoWindow,NavigationControl,MapvLayer} from "react-bmap"
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/test'
import HomeAd from '../../../components/homeAd'

// console.log('mapv',mapv)
var randomCount = 300;

var data = [];

var citys = ["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];

// 构造数据
while (randomCount--) {
    var cityCenter = utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length)]);
    data.push({
        geometry: {
            type: 'Point',
            coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
        },
        count: 30 * Math.random()
    });
}



class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // this.state=[]
        
    }
    render() {
        return (
        	<Map center = {{
                    lng: 105.403119,
                    lat: 38.028658
                }}
                zoom={5} 
                mapStyle={{style: 'grayscale'}} 
                options={{draw:"grid"}}>
            <MapvLayer data={data} zIndex="1" options={{
                fillStyle: 'rgba(255, 250, 50, 1)',
                methods: {click: (item)=>{console.log(item)}},
                globalCompositeOperation: 'lighter',
                // size: 30,
                // unit:'px',
                // type:'rect',
                // symbol: 'rect',
                label:{ 
                    show:true,
                    fillStyle: '#fff',
                },
                draw: 'grid',
                autoViewport: true,
                viewportOptions: {zoomFactor: 1},
                gradient: { 0.25: "red"}
            }} />   
            </Map>
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
    		// this.setState({data:json})
    	})

        console.log("__DEV__",__DEV__)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default NotFound
// module.exports = NotFound