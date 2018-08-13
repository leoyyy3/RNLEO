import React from 'react'
import PropTypes from 'prop-types';
import { Modal, Button, message} from 'antd';

import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/test'
import HomeAd from '../../../components/HomePage'
// import UpdatePop from '../../../components/AddSuser'
import UpdatePop from '../../../components/HomePage/UpdatePop'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	data:[],
            visible:false,
            editData:null
        }
    }

    handleCancel(){
        this.setState({visible:false})
    }

    handleOk(){
        // this.props.updateUser(data)
        this.setState({visible:false})
    }

    edit(data){
        this.setState({editData:data})
        this.setState({visible:true})
    }


    updateUser(data){
        this.props.updateUser(data,()=>{
            message.success('用户更新成功！');
            this.setState({visible:false})
            this.props.getUserList();
        })
    }

    render() {
        return (
        	<div>
            	<HomeAd
                    data={this.props.userlist.data}
                    edit={this::this.edit}
                    delete={this.props.delete}
                />
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  footer={null}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                >
                  <UpdatePop loading={false} addUserFun={this.updateUser.bind(this)} editData={this.state.editData}/>
                </Modal>
            </div>
        )
    }
}

Ad.propTypes = {
    userlist: PropTypes.object
}
// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default Ad
module.exports = Ad
