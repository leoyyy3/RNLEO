import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import Category from '../../components/cateGory'
import AddSuser from '../../components/AddSuser'

import {addUserAction} from '../../actions/adduser'

import {connect} from 'react-redux'

class Adduser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        
    }

    addUserFun(data){
        this.props.dispatch(addUserAction(data))
    }

    render() {
        // console.log('adduser')
        return (
            <AddSuser 
                loading={false}
                addUserFun={this.addUserFun.bind(this)}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        userlist:state.userlist
    }
}


export default connect(
    mapStateToProps
)(Adduser)
