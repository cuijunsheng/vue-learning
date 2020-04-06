<template>
  <div>
    <!--router-link是vueRouter内注册的全局组件-->
    <!--<router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <!-- <button @click="homeClick">首页</button>
     <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--<router-link :to="'/user/'+userId">用户</router-link>
&lt;!&ndash;    <router-link to="/profile">档案</router-link>&ndash;&gt;
    &lt;!&ndash;传递参数&ndash;&gt;
    <router-link :to="{path:'/profile',query:{id:1,name:'cjs',age:18} }">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


    <!--router-view起占位符的作用，写上这个，使用路由跳转的时候才会将对应组件渲染在
    页面上-->
<!--    <router-view></router-view>-->

    <!--keep-alive每次路由跳转后，组件会不停的创建，删除，使用这个标签可以保证路由跳转组件只
      创建一次，组件能够保持存活，使用了keep-alive后，组件才会有对应的activated和deactivated两个函数
      keep-alive是Vue内置的组件，可以使被包裹的组件保留状态或避免重新渲染-->
    <!--include,exclude将组件排除在保持活跃状态外，即每次不保持活跃的组件会被重新创建和删除-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      /**
       * 通过代码的方式修改路由
       */
      homeClick() {
        //push->history.pushState({},'','/home')
        // this.$router.push("/home")
        this.$router.replace("/home")
      },
      aboutClick() {
        // this.$router.push("/about")
        this.$router.replace("/about")
      },
      userClick() {
        this.$router.push("/user/" + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            id: 2,
            name: '小明',
            age: 20
          }
        })
      }
    }
  }
</script>

<style>
  /**
   * 当<router-link>对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class值，
      设置active-class可以修改默认的值，在高亮显示导航菜单或者底部tabbar时会用到该class
   */
  .router-link-active {
    color: #ff0000;
  }
</style>
