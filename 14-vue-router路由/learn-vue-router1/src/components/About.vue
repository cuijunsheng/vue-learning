<template>
  <div class="about">
    <h2>我是关于</h2>
    <p>我是关于内容，哈哈哈</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    created() {
      //document.title = '关于'
      console.log('about created');
    },
    destroyed() {
      console.log('about destroyed');
    },
    activated() {
      console.log('about activated');
    },
    deactivated() {
      console.log('about deactivated');

    }
  }
</script>

<style scoped>
  .about {
    background-color: #42b983;
  }
</style>
