<template>
  <div class="profile">
    <h2>我是profile组件</h2>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.id}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      //document.title = '档案'
      console.log('profile created');
    },
    destroyed() {
      console.log('profile destroyed');
    },
    activated() {
      console.log('profile activated');
    },
    deactivated() {
      console.log('profile deactivated');

    }
  }
</script>

<style scoped>
  .profile {
    background-color: peachpuff;
  }
</style>
