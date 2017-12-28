import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import Category from '../../components/cateGory'
import Ad from './subpage/Ad'

import {getUserListAction,updateUserAction,deleteAction} from '../../actions/home'

import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.getUserList()
    }

    updateUser(data,successCall){
        this.props.dispatch(updateUserAction(data,successCall))
    }

    getUserList(){
        this.props.dispatch(getUserListAction())
    }

    deleteUser(data){
        console.log('delete',data)
        let id = data.id;
        this.props.dispatch(deleteAction({id:id},()=>{
            this.props.dispatch(getUserListAction())
        }))
    }

    render() {
        return (
            <div>
                <Ad 
                    userlist={this.props.userlist}
                    updateUser={this.updateUser.bind(this)}
                    getUserList={this.getUserList.bind(this)}
                    delete={this.deleteUser.bind(this)}
                />
            </div>
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
)(Home)
