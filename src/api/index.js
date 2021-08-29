import ajax from './ajax'
import jsonp from 'jsonp'

const BASE = ''
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')
// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')
// 获取一二级分类的列表
export const reqCategorys = (parentId) => ajax(BASE + '/manage/category/list', {parentId})
// 添加分类
export const reqAddCategory = (categoryName, parentId) => ajax(BASE + '/manage/category/add', {categoryName, parentId}, 'POST')
// 更新分类
export const reqUpdateCategory = ({categoryId, categoryName}) => ajax(BASE + '/manage/category/add', {categoryId, categoryName}, 'POST')
export const reqRoles = () => ajax(BASE + '/manage/role/list')