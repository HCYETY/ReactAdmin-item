import React, {Component} from "react"
import {Card, Table, Button, Space} from 'antd'
import { BorderInnerOutlined } from '@ant-design/icons';

export default class Categoty extends Component {

  state = {
    categorys:[]  // 一级分类列表
  }
  initColumns = () => {
    const columns = [
      {
        title: '分类的名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width:300,
        render: () => (
          <Space size="middle">
            <a>修改分类</a>
            <a>删除分类</a>
            <a>查看子分类</a>
          </Space>
        )
      }
    ];
  }
  componentWillMount () {
    this.initColumns()
  }

  render () {
    const {categorys} = this.state
    const title = '一级商品分类列表'
    const extra = (
        <Button type='primary'>
            <BorderInnerOutlined />
            添加
        </Button>
    )

    // const dataSource = [
    //   {key: '1',name: '胡彦斌',},
    //   {key: '2',name: '胡彦祖',},
    // ];

    return (
        <Card title={title} extra={extra}>
            <Table bordered dataSource={categorys} columns={this.columns} />;
        </Card>
    )
  }
}