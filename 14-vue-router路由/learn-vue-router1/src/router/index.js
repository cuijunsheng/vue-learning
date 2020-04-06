import Vue from 'vue'
import Router from 'vue-router'

/*import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'*/

/**
 *    路由懒加载
 *  在后续开发中，业务代码会越来越多，不应该全部打包在app相关的js文件中，因为一下请求大量js文件
 * 可能会页面空白，体验不好，这个时候需要把一个路由对应的组件单独打包成一个js文件，等到用户点击
 * 获取的时候再加载即：用的时候再去加载，就是懒加载
 *  使用下面箭头函数的方式导入后，打包的时候就会实现懒加载打包，用户请求的事还懒加载
 */
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

/**
 *  嵌套路由：
 *    1。创建子组件，并且在路由映射中配置对应的子路由
 *    2. 在组件内部使用<router-view>
 */
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')


/**
 *  前端路由的核心：改变url但是页面不进行整体的刷新，2种方案
 *    1.url的hash
 *    2.html5中的history模式
 */

//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//2.创建vueRouter对象
const router = new Router({
  //3.routes[] 配置路由和组件的映射关系
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title:'首页'
      },
      //配置对应的子路由
      children: [
        /*{
          path: '',
          redirect: 'news'
        },*/
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta:{
        title:'关于'
      },
    },
    {
      //动态路由
      path: '/user/:userId',
      component: User,
      meta:{
        title:'用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        title:'档案'
      },
    }
  ],
  //修改路由改变url的方式为history,默认是修改url的hash,url上会有#
  mode: 'history',
  //全局修改活跃状态下路由对应的页面的生成的class
  // linkActiveClass:'active'
})

router.beforeEach(function (to,from,next) {
  next();
  // document.title=to.meta.title;
  //由于首页有路由的嵌套，/home/news路径下首页拿不到，如果是/home可以拿到
  document.title=to.matched[0].meta.title

  // console.log(to);
})

//4.将vueRouter对象导出，在Vue实例中使用
export default router
