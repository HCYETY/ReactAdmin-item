import React, {Component} from "react"
// import { Form, Icon, Input, Button } from 'antd';
import { Form, Input, Button, Checkbox, message } from 'antd';

import './login.less'
import logo from '../../assets/images/logo.png'
import { reqLogin, reqAddUser } from "../../api";

export default class Login extends Component {
    render () {
        const onFinish = (values) => {
            console.log('登录成功:', values);
            const {username, password} = values
            try{
                // 对所有表单字段进行检验
                this.props.form.validateFields(async (err, values) => {
                    // 检验成功
                    if (!err) {
                        console.log('提交登陆的ajax请求', values)
                        // 请求登陆
                        const {username, password} = values
                        const result = await reqLogin(username, password)
                        console.log('请求成功', result)
                        if (result.status===0) { // 登陆成功
                            // 提示登陆成功
                            message.success('登陆成功@ q')
                
                            // 保存user
                            // const user = result.data
                            // memoryUtils.user = user // 保存在内存中
                            // storageUtils.saveUser(user) // 保存到local中
                
                            // 跳转到管理界面 (不需要再回退回到登陆)
                            this.props.history.replace('/')
                
                        } else { // 登陆失败
                            // 提示错误信息
                            message.error(result.msg)
                        }
                    } else {
                        console.log('检验失败!')
                    }
                });
            } catch(error) {
                console.log('请求失败', error.message)
            }
        };
        const onFinishFailed = (errorInfo) => {
            console.log('登录失败:', errorInfo);
        };
        // const onFinish = async(values) => {
        //     console.log('登录成功:', values);
        //     const {username, password} = values
        //     try{
        //         // 对所有表单字段进行检验
        //         this.props.form.validateFields(async (err, values) => {
        //             // 检验成功
        //             if (!err) {
        //                 console.log('提交登陆的ajax请求', values)
        //                 // 请求登陆
        //                 const {username, password} = values
        //                 const result = await reqLogin(username, password)
        //                 console.log('请求成功', result)
        //                 if (result.status===0) { // 登陆成功
        //                     // 提示登陆成功
        //                     message.success('登陆成功@ q')
                
        //                     // 保存user
        //                     // const user = result.data
        //                     // memoryUtils.user = user // 保存在内存中
        //                     // storageUtils.saveUser(user) // 保存到local中
                
        //                     // 跳转到管理界面 (不需要再回退回到登陆)
        //                     this.props.history.replace('/')
                
        //                 } else { // 登陆失败
        //                     // 提示错误信息
        //                     message.error(result.msg)
        //                 }
        //             } else {
        //                 console.log('检验失败!')
        //             }
        //         });
        //     } catch(error) {
        //         console.log('请求失败', error.message)
        //     }
        // };
        // const onFinishFailed = (errorInfo) => {
        //     console.log('登录失败:', errorInfo);
        // };

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form 
                        name="basic" 
                        labelCol={{ span: 8, }}
                        wrapperCol={{ span: 16, }}
                        initialValues={{ remember: true, }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[ 
                                {required: true, whitespace:true, message: '用户名必须输入!'},
                                {min:4, message:'用户名至少4位!'},
                                {max:12, message:'用户名最多12位!'},
                                {pattern:/^[a-zA-Z0-9_]+$/, message:'用户名必须是英文、数字或下划线组成！'}
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[ 
                                {required: true, whitespace:true, message: '密码必须输入!'},
                                {min:4, message:'密码至少4位!'},
                                {max:12, message:'密码最多12位!'},
                                {pattern:/^[a-zA-Z0-9_]+$/, message:'密码必须是英文、数字或下划线组成！'}
                             ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16, }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                            <Button type="primary" htmlType="submit"> 登录 </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}