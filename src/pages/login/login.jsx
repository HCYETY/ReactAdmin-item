import React, {Component} from "react"
// import { Form, Icon, Input, Button } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import './login.less'
import logo from './images/logo.png'
import { reqLogin, reqAddUser } from "../../api";

export default class Login extends Component {
    render () {
        const onFinish = async(values) => {
            console.log('登录成功:', values);
            const {username, password} = values
            try{
                const response = await reqLogin(username, password)
                console.log('请求成功', response.data)
            } catch(error) {
                console.log('请求失败', error.message)
            }
            // reqLogin(username, password).then(response => {
            //     console.log('成功了', response.data)
            // }).catch(error => {
            //     console.log('失败了', error)
            // })
        };
        const onFinishFailed = (errorInfo) => {
            console.log('登录失败:', errorInfo);
        };

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
                    {/* <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form> */}
                </section>
            </div>
        )
    }
}