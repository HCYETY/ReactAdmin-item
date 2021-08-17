import React, {Component} from "react"
import {Card, Table, Button, Icon} from 'antd'
import LinkButton from '../../components/link-button/index'

export default class Categoty extends Component {
    render () {
        const title = '一级商品分类列表'
        const extra = (
            <Button type='primary'>
                <Icon type='plus'></Icon>
                添加
            </Button>
        )

        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              
            },
            {
              key: '2',
              name: '胡彦祖',
            },
          ];
          
          const columns = [
            {
              title: '分类的名称',
              dataIndex: 'name',
            },
            {
              title: '操作',
              width:300,
              render:() => {
                  <span>
                      <LinkButton>修改分类</LinkButton>
                      <LinkButton>删除分类</LinkButton>
                      <LinkButton>查看子分类</LinkButton>
                  </span>
              }
            }
          ];

        return (
            <Card title={title} extra={extra}>
                <Table bordered dataSource={dataSource} columns={columns} />;
            </Card>
        )
    }
}