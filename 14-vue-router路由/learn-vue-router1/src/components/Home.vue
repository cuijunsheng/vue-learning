<template>
  <div class="home">
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        path:'/home/news'
      }
    },
    created() {
      //document.title = '首页'
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    //这两个函数只有再使用了keep-alive保持活跃的状态才会有这两个函数
    activated() {
      console.log('home activated');
      this.$router.push(this.path)
    },
    deactivated() {
      console.log('home deactivated');
      //这里是拿不到home的路由的，因为代码顺序，这里的$route.path已经变成了跳转后的活跃路由组件
      //this.path=this.$route.path
    },
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path=this.$route.path
      next()
    }
  }
</script>

<style scoped>
  .home {
    background-color: greenyellow;
  }
</style>
