<template>
  <div class="hello">
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'hello vuex'
      }
    }
  }
</script>

<style scoped>

</style>
