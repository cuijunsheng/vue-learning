<template>
    <div>
        <h2 class="title">我是vue实例</h2>
        <h2>{{msg}}</h2>
        <button @click="btnClick">按钮</button>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn'
    export default {
        name: "App",
        data(){
            return {
                msg:'hello webpack'
            }
        },
        methods:{
            btnClick(){
                alert("按钮")
            }
        },
        components:{
            Cpn
        }
    }
</script>

<style>
    .title{
        color: green;
    }
</style>