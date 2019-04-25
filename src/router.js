import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用Vue.use来加载路由功能
Vue.use(VueRouter)


// ----------引入模块
// 首页
import Home from './pages/Home.vue'
// 详情页
import Detail from './pages/Detail.vue'
// 左侧滑屏
import LeftSideBar from './pages/LeftSideBar.vue'
// 右侧滑屏
import RightSideBar from './pages/RightSideBar.vue'
// 搜索页面
import Search from './pages/Search.vue'
// 编辑个人信息页面
import ChangeEdit from './pages/ChangeEdit.vue'

// 登陆
import Log1 from './pages/Log1.vue'
// 注册1
import Reg1 from './pages/Reg1.vue'
// 注册2
import Reg2 from './pages/Reg2.vue'


// 首页下面的嵌套组件
import Tantan from './pages/Home/Tantan.vue'
import Crown from './pages/Home/Crown.vue'
import Help from './pages/Home/Help.vue'
import Indentity from './pages/Home/Indentity.vue'
import Install from './pages/Home/Install.vue'
import Message from './pages/Home/Message.vue'
import Share from './pages/Home/Share.vue'
import Edit from './pages/Home/Edit.vue'



// ------------定义路由
const routes = [
    { path: '/home', component: Home, name: 'home',
    children: [
        { path: 'tantan', component: Tantan, name: 'tantan', },
        { path: 'crown', component: Crown, name: 'crown', },
        { path: 'help', component: Help, name: 'help', },
        { path: 'indentity', component:Indentity, name: 'indentity', },
        { path: 'install', component: Install, name: 'install', },
        { path: 'message', component:Message, name: 'message', },
        { path: 'share', component: Share, name: 'share', },
        { path: 'edit', component: Edit, name: 'edit', },
    ]

 },
    { path: '/detail', component: Detail, name: 'detail' },
    { path: '/leftSideBar', component: LeftSideBar, name: 'leftSideBar' },
    { path: '/rightSideBar', component: RightSideBar, name: 'rightSideBar' },
    { path: '/Search', component: Search, name: 'search' },
    { path: '/changeEdit', component: ChangeEdit, name: 'changeEdit' },

    { path: '/log1', component: Log1, name: 'log1' },
    { path: '/reg1', component: Reg1, name: 'reg1' },
    { path: '/reg2', component: Reg2, name: 'reg2' },

    // 设置默认重定向
    { path: '/', redirect: '/home/tantan' }
]


// -------------实例化路由
const router = new VueRouter({
    routes
})


//--------------- 暴露路由对象，为后续挂载容器做准备
export default router
