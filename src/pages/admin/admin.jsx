import React, {Component} from "react"
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';

import LeftNav from "../../components/left-nav";
import RightHeader from "../../components/header";
import Home from "../home/index"
import Category from "../category/index"
import Product from "../product/index"
import Role from "../role/index"
import User from "../user/index"
import Bar from "../charts/bar"
import Pie from "../charts/pie"
import Line from "../charts/line"

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render () {
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <RightHeader>Header</RightHeader>
                    <Content style={{margin:20, backgroundColor:'#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/> 
                            <Route path='/product' component={Product}/> 
                            <Route path='/role' component={Role}/> 
                            <Route path='/user' component={User}/> 
                            <Route path='/charts/bar' component={Bar}/> 
                            <Route path='/charts/line' component={Line}/> 
                            <Route path='/charts/pie' component={Pie}/> 
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center', color:'#cccccc'}}>
                        推荐使用谷歌浏览器，可以获得更佳的页面操作体验
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}