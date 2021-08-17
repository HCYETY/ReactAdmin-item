import React, {Component} from "react"
import {Card, Table, Button} from 'antd'

export default class Role extends Component {

    state = {
        roles:[]
    }

    render () {
        const {roles} = this.state

        const title = (
            <span>
                <Button type='primary'>创建角色</Button> &nbsp;&nbsp;
                <Button type='primary' disabled>设置角色权限</Button>
            </span>
        )

        return (
            <Card title={title}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={roles}
                    columns={this.column}
                    pagination={{defaultCurrent:5, showQuickJumper:true}}
                />
            </Card>
        )
    }
}