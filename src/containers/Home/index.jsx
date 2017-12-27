import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import Category from '../../components/cateGory'
import Ad from './subpage/Ad'
// import Wmap from './subpage/Wmap'
// import Lmap from './subpage/Lmap'
// import Rect from './subpage/Rect'

import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Ad />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
