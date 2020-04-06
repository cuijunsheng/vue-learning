export default {
    template: `
     <div>
            <h2>我是vue实例</h2>
            <h2>{{msg}}</h2>
            <button @click="btnClick">按钮</button>
     </div>
    `,
    data(){
        return {
            msg:'hello webpack'
        }
    },
    methods:{
        btnClick(){
            alert("按钮")
        }
    }
}