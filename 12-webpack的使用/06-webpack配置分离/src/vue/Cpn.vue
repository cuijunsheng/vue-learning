<template>
    <div class="cpn_class">
        <h2>我是组件的标题</h2>
        <h2>{{msg}}</h2>
        <p>我是组件的内容</p>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                msg:'我是组件的msg'
            }
        }
    }
</script>

<style scoped>
    .cpn_class{
        color: purple;
    }
</style>