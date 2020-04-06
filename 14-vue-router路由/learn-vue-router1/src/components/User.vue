<template>
  <div class="user">
    <h2>我是用户页面</h2>
    <p>我是用户内容，呵呵呵</p>
    <!--哪个路由对应的页面是活跃状态，$route拿到的就是哪个路由对象-->
    <p>{{$route.params.userId}}</p>
    <p>{{userId}}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      //计算属性，其实是计算属性的getter方法
      userId() {
        //哪个路由对应的页面是活跃状态，$route拿到的就是哪个路由对象
        return this.$route.params.userId
      }
    },
    created() {
      //document.title = '用户'
      console.log('user created');
    },
    destroyed() {
      console.log('user destroyed');
    },

    activated() {
      console.log('user activated');
    },
    deactivated() {
      console.log('user deactivated');

    },
    methods: {
      btnClick() {
        /**
         * --所有的组件都继承自Vue类的原型，组件能拿到$router和$route，就是因为Vue-router给Vue类的
         * 原型里添加了这两个东西
         *
         *    $router获取的就是导入的路由对象，$route就是哪个路由处于活跃状态获取的就是哪个路由对象，
         * $route里有params和query属性
         */

        /*console.log(this.$router);
        console.log(this.$route);*/

        //Vue类原型里加了test，因为组件都继承自Vue的原型，验证是否能拿到test
        /*this.test()

        console.log(this.name);*/
      }
    }
  }
</script>

<style scoped>
  .user {
    background-color: deepskyblue;
  }
</style>
