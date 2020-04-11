<template>
  <div id="app">
    <h2>App内容:store中modules里的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateName()">修改name</button>
    <button @click="aysncUpdateName">异步修改name</button>
    <br>
    <h2>App内容:Vuex里store中state是响应式的验证</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>App内容-------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--将变量交给vuex管理后，就可以多个组件共享，同时也可以在某个组件里修改共享状态，但是vue不推荐这样修改，
      因为出问题后无法跟踪，所以推荐组件->commit到mutation中，这样vue的浏览器插件devtools可以记录每次修改的状态,
      跟踪到是哪一个组件修改了状态-->
    <button @click="addition()">+</button>
    <button @click="subtraction()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    <br>
    <h2>HelloWorld内容-------------------</h2>
    <hello-world/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import {INCREMENT} from './store/mutations-types'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    methods: {
      addition() {
        /**
         *    这里不是通过组件直接修改共享状态，而是通过mutations修改
         * 在通过mutations修改时，不是直接调mutations中的方法，而是通过this.$store.commit('方法名')
         */
        this.$store.commit(INCREMENT);
      },
      subtraction() {
        this.$store.commit("decrement")
      },
      addCount(count) {
        //携带的参数称之为payload,负载，载荷
        //1.普通的提交风格
        //this.$store.commit("addCount", count)

        //2.特殊的提交风格，传递一个对象，mutation里事件结构的时候，第二个参数就是一个payload对象
        //而不是一个简单的count数值
        this.$store.commit({
          type:'addCount', //type对应的就是mutation里的方法名，也就是事件类型,
          count:count
        })
      },
      addStudent() {
        const student = {id: 5, name: '小崔', age: 35}
        this.$store.commit("addStudent", student)
      },
      //验证store中的state是否是响应式的
      updateInfo(){
        // this.$store.commit("updateInfo")
        //因为是异步，所以通过dispatch分发，派遣到actions中，然后再通过commit到mutations中
        //this.$store.dispatch('asyncUpdateInfo')
        /*this.$store.dispatch('asyncUpdateInfo',{
          message:'小狗',
          success:()=>{
            console.log('已经修改好了');
          }
        })*/

        this.$store
          .dispatch('asyncUpdateInfo','我是message')
          .then(res=>{
            console.log('里面已经修改完成');
            console.log(res);
          })
      },
      updateName(){
        //按照普通方式提交，去store根下mutations找，找不到就会去modules的mutations里找
        this.$store.commit("updateName",'lisi')
      },
      aysncUpdateName(){
        this.$store.dispatch('aysncUpdateName','wangwu')
      }
    }
  }
</script>

<style>

</style>
