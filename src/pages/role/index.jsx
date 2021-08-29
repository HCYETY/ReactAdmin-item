import React, {Component} from "react"
import {Card, Table, Button, Modal} from 'antd'

import AddForm from './add-role'

export default class Role extends Component {
    state = {
        roles:[
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9eac0b49ef916541160d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9edsfef916541160d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9eacdf9ef916541160d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9eac0bsdfef916541160d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9eac0b49sdf1sdaf60d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id":"5ca9eac0b49esf6541160d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
            {
                "menus":[
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                _id:"5ca9eac0b49ef916sdf60d5",
                name:"角色1",
                create_time:1554639552758,
                "__v":0,
                auth_time:1557630307021,
                auth_name:"admin"
            },
        ],
        role:{},
        isShowAdd:false
    }

    initColumn = () => {
        this.columns = [
            {title:'角色名称', dataIndex:'name'},
            {title:'创建时间', dataIndex:'create_time'},
            {title:'授权时间', dataIndex:'auth_time'},
            {title:'授权人', dataIndex:'auth_name'},
        ]
    }
    componentWillMount () {
        this.initColumn()
    }

    // 方便选中
    onRow = (role) => {
        return {
            onClick:event => {
                this.setState({
                    role
                })
            }
        }
    }

    // 添加角色
    addRole = () => {

    }

    render () {
        const {roles, role, isShowAdd} = this.state
        const title = (
            <span>
                <Button type='primary' onClick={() => this.setState({isShowAdd:true})}>创建角色</Button> &nbsp;&nbsp;
                <Button type='primary' disabled={!role._id}>设置角色权限</Button>
            </span>
        )

        return (
            <Card title={title}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={roles}
                    columns={this.columns}
                    pagination={{defaultCurrent:5, showQuickJumper:true}}
                    rowSelection={{type:'radio', selectedRowKeys:[role._id]}}
                    onRow={this.onRow}
                />

                <Modal
                    title="添加角色"
                    visible={isShowAdd}
                    onOk={this.addRole}
                    onCancel={() => {this.setState({
                        isShowAdd:false
                    })}}
                >
                    <AddForm
                        setForm={(form) => this.form = form}
                    />
                </Modal>
            </Card>
        )
    }
}