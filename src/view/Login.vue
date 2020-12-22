<template>
    <div id='login'>
        <div id='login-view'>
            <input class="login-input" v-model='attributes.user' placeholder="用户名"/>
            <input class="login-input" v-model='attributes.pwd' placeholder="密码"/>
            <div id='login-button' @click='login(attributes.user,attributes.pwd)'>
                登录
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            attributes:{user:'',pwd:''}
        }
    },
    methods:{
        login:function(user,pwd){
            axios.get('/api/login/?user='+user+'&pwd='+pwd).then(
                respone=>{
                    console.log(respone)
                    localStorage.setItem('token',respone.data)
                }
            )
        }
    }
}
</script>

<style scoped>
.login-input{
    display: block;
    border-style:solid;
    outline-style: none ;
    padding:10px 15px;
    margin:15px;
    border-color: rgb(146, 146, 146);
    /* box-shadow: 0px 0px 5px rgba(190, 190, 190, 0.315); */
    border-radius: 5px;
    background: none;
    font-size:20px;
    width:300px;
    transition: 100ms all;
}
.login-input:hover{
    border-color:rgb(99, 156, 14)
}

.login-input:focus{
    box-shadow: 0px 0px 10px rgba(14, 156, 14, 0.26);
    border-color:rgb(99, 156, 14)
}

#login-button{
    margin:15px;
    padding:10px 15px;
    border-radius: 5px;
    background: rgb(99, 156, 14);
    width:100px;
    color:white;
    box-shadow: 0px 0px 5px rgba(14, 156, 14, 0.26);
    transition: 100ms all;
}
#login-button:hover{
    box-shadow: 0px 0px 10px rgba(14, 156, 14, 0.411);
}
</style>