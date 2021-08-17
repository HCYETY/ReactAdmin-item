import React, {Component} from "react"
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd'

import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import menuList from '../../config/index'
import './index.less'

class RightHeader extends Component {
    state = {
        currentTime:formateDate(Date.now())
    }

    getTime = () => {
        // 每隔1s获取当前时间, 并更新状态数据currentTime
        this.intervalId = setInterval(() => {
          const currentTime = formateDate(Date.now())
          this.setState({currentTime})
        }, 1000)
    }
    getTitle = () => {
        // 得到当前请求路径
        // 注意：非路由组件没有该属性，必须将非路由组件改为路由组件才能使用该方法，因此需引入 withRouter
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
          if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
            title = item.title
          } else if (item.children) {
            // 在所有子item中查找匹配的
            const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
            // 如果有值才说明有匹配的
            if(cItem) {
              // 取出它的title
              title = cItem.title
            }
          }
        })
        return title
    }
    /*
    第一次render()之后执行一次
    一般在此执行异步操作: 发ajax请求/启动定时器
    */
    componentDidMount () {
        // 获取当前的时间
        this.getTime()
    }
    /*
    // 不能这么做: 不会更新显示
    componentWillMount () {
        this.title = this.getTitle()
    }*/

    /*
    当前组件卸载之前调用
    */
    componentWillUnmount () {
        // 清除定时器
        clearInterval(this.intervalId)
    }
    
    render () {
        // const btn = document.getElementsByClassName("btn")
        // btn.addEventListener('click',function () {
        //     const logout = document.getElementsByClassName('logout')
        //     logout.style.csstext('visibility','none')
        //  },false);
        // const username = memoryUtils.username.username
        const title = this.getTitle()
        
        return (
            <div className='header'>
                <span className='header-topic'>{title}</span>
                <span className='header-weather'>{this.state.currentTime}</span>
                <div className="header-info">
                    <span className="btn dropdown-toggle" data-toggle="dropdown">
                        Syandge
                        {/* {username} */}
                        <span className="caret"></span>
                    </span>
                    <ul className="logout">
                        <li><a href="/login">退出登录</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(RightHeader)