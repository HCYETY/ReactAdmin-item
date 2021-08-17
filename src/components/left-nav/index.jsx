import React, {Component} from "react"
import {Link, withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';

import menuList from '../../config/index'
import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
    getMenuNode = (menuList) => {
        return menuList.map(item => {
            if(!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNode(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    render () {
        const path = this.props.location.pathname
        return (
            <div className='left'>
                <div className='left-nav'>
                    <Link to='/' className='left-nav-header'>
                        <img src={logo} alt="logo" />
                        <h1>后台管理</h1>
                    </Link>
                </div>

                {/* 根据 menu 的数据数组动态生成对应的标签数组 */}
                <Menu mode="inline" theme="dark" selectedKeys={[path]} >
                    { this.getMenuNode(menuList) }
                </Menu>
            </div>
        )
    }
}
/*
withRouter高阶组件:
包装非路由组件, 返回一个新的组件
新的组件向非路由组件传递3个属性: history/location/match
 */ 
export default withRouter(LeftNav)