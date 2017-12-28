import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Form,
    Input,
    InputNumber,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Radio,
    AutoComplete,
    Spin
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

// import './style.less'

class UpdatePop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            svalue:"",
            sage:0,
            sphone:null,
            flag:true
        }
    }

    componentWillReceiveProps(){console.log('willreceive')
        if(this.state.flag){
            this.props.form.setFieldsValue({
                username: this.props.editData.username,
                age: this.props.editData.age,
                phone: this.props.editData.phone,
            });
            this.setState({flag:false})
        }
        // this.props.form.setFieldsValue({
        //   username: this.props.editData.username,
        //   // age: this.props.editData.age,
        //   // phone: this.props.editData.phone,
        // });
    }

    componentDidMount(){
        this.setState({svalue:this.props.editData.username})
        this.setState({sage:this.props.editData.age})
        this.setState({sphone:this.props.editData.phone})
        // this.props.form.setFieldsValue({
        //   username: this.props.editData.username,
        //   age: this.props.editData.age,
        //   phone: this.props.editData.phone,
        // });
    }

    handleSubmit(e){
        e.preventDefault();
        const {onSubmit} = this.props;
        const {validateFieldsAndScroll, getFieldsValue, resetFields} = this.props.form

        validateFieldsAndScroll((err, values) => {
            // console.log('--------',getFieldsValue())
            if (!err) {
                let udata = Object.assign({},getFieldsValue(),{
                    id:this.props.editData.id
                })
                this.props.addUserFun(udata)
                // console.log('Received values of form: ', values);
                // console.log(getFieldsValue())
                // onSubmit(getFieldsValue())
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;

        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        return (
            <div style={styles.container}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem {...formItemLayout} label="员工姓名" hasFeedback>
                    {getFieldDecorator('username', {
                        //initialValue:"123123123132",
                        rules: [{required: true, message: '请填写员工姓名!'}]
                    })(
                        <div style={styles.searchWrap}>
                            <Input placeholder="员工姓名"
                                   value={this.state.svalue}
                                   onChange={(e, x) => {
                                       let svalue = e.currentTarget.value;
                                       if (svalue.length > 20) {
                                           svalue = svalue.substr(0, 20)
                                       }
                                       this.setState({svalue: svalue})
                                       {/*this.props.nowSearch(svalue)*/}
                                   }
                            }/>
                        </div>
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="员工年龄" hasFeedback>
                    {getFieldDecorator('age', {
                        initialValue:"100",
                        rules: [{required: true, message: '请填写员工年龄!'}],
                    })(
                        <div style={styles.searchWrap}>
                            <Input placeholder="员工年龄"
                                   value={this.state.sage}
                                   onChange={(e, x) => {
                                       let svalue = e.currentTarget.value;
                                       
                                       this.setState({sage: svalue})
                                       {/*this.props.nowSearch(svalue)*/}
                                   }
                            }/>
                        </div>
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="员工手机号" hasFeedback>
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: '请填写员工手机号!'}],
                    })(
                        <div style={styles.searchWrap}>
                            <Input placeholder="员工手机号"
                                   value={this.state.sphone}
                                   onChange={(e, x) => {
                                       let svalue = e.currentTarget.value;
                                       {/*if (svalue.length > 20) {
                                           svalue = svalue.substr(0, 20)
                                       }*/}
                                       this.setState({sphone: svalue})
                                   }
                            }/>
                        </div>
                    )}
                </FormItem>

                <FormItem justify="center" style={styles.submitWrap}>
                    <Spin spinning={this.props.loading} style={styles.loading}>
                        <Button type="primary" htmlType="submit">添加</Button>
                    </Spin>
                </FormItem>
            </Form>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default homeAd
// module.exports = Search
export default UpdatePop = Form.create()(UpdatePop);

const styles = {
    title: {
        textAlign: 'center',
        padding: '20px 0 50px',
        background: '#f5f5f6',
        h3: {
            color: '#878787',
            marginTop: 15
        }
    },
    container: {
        maxWidth: 600,
        margin: '0 auto',
        paddingTop: '20px'
    },
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
    submit: {
        width: '',
        margin: '0 0 '
    },
    submitWrap: {
        textAlign: "center"
    },
    searchWrap: {
        position: "relative"
    },
    loading: {
        left: 0
    }
}


