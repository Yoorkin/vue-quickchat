<template>
    <div id='root'>
    <div id='login'>
            <transition name="fade" mode="out-in" :duration="200">
            <div class='login-view' v-if='showLogin' :key='login' >
                <div>
                <p class='title'>QuickChat</p>
                <input class="login-input" v-model='attributes.user' placeholder="用户名"/>
                <input class="login-input" v-model='attributes.pwd' placeholder="密码"/>
                <div id='login-button' @click='login(attributes.user,attributes.pwd)'>
                    <svg t="1608694455596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3112" width="200" height="200"><path d="M844.15488 512.70656L571.58656 254.95552c-11.84768-11.84768-29.62432-11.84768-41.48224 0-11.84768 11.84768-11.84768 29.62432 0 41.472L749.34272 503.808H201.2672c-17.77664 0-29.62432 11.84768-29.62432 29.63456 0 17.7664 11.84768 29.62432 29.62432 29.62432h548.08576l-219.2384 207.38048c-11.84768 11.84768-11.84768 29.63456 0 41.48224 5.92896 5.92896 14.81728 8.88832 20.736 8.88832 5.92896 0 14.81728-2.95936 20.736-8.88832l272.55808-257.7408c5.92896-5.92896 8.88832-14.81728 8.88832-20.736 0.01024-5.92896-2.94912-14.81728-8.87808-20.74624z m0 0"  p-id="3113"></path></svg>
                </div>
                <div class='bottom-link' @click="showLogin=false">没有账号？注册</div>
                </div>
            </div>
            <div class='login-view' v-else :key='register'>
                <div>
                <p class='title'>注册QuickChat</p>
                <input class="login-input" v-model='attributes.pwd' placeholder="邮箱"/>
                <input class="login-input" v-model='attributes.user' placeholder="用户名"/>
                <input class="login-input" v-model='attributes.pwd' placeholder="密码"/>
                <input class="login-input" v-model='attributes.pwd' placeholder="确认密码"/>
                <div id='login-button' @click='login(attributes.user,attributes.pwd)'>
                    <svg t="1608694455596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3112" width="200" height="200"><path d="M844.15488 512.70656L571.58656 254.95552c-11.84768-11.84768-29.62432-11.84768-41.48224 0-11.84768 11.84768-11.84768 29.62432 0 41.472L749.34272 503.808H201.2672c-17.77664 0-29.62432 11.84768-29.62432 29.63456 0 17.7664 11.84768 29.62432 29.62432 29.62432h548.08576l-219.2384 207.38048c-11.84768 11.84768-11.84768 29.63456 0 41.48224 5.92896 5.92896 14.81728 8.88832 20.736 8.88832 5.92896 0 14.81728-2.95936 20.736-8.88832l272.55808-257.7408c5.92896-5.92896 8.88832-14.81728 8.88832-20.736 0.01024-5.92896-2.94912-14.81728-8.87808-20.74624z m0 0"  p-id="3113"></path></svg>
                </div>
                <div class='bottom-link' @click="showLogin=true">已有账号？登录</div>
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            showLogin:true,
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
.hide{
    display: none;
}

.bottom-link{
    font-size: 15px;
    color:grey;
}
#root{
    background: url('../assets/background.jpg');
    width:100vw;
    height:100vh;
}
#login{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.356);
    width:100vw;
    height:100vh;
}
@media screen and (min-width:700px){
    .login-view{
        background: white;
        padding:50px 100px 10px 100px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.37); 
        transition: all 100ms;
    }
}
@media screen and (max-width:700px){
    .login-view{
        background: none;
    }
    #login{
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.76);
        width:100vw;
        height:100vh;
    }
    .title,.login-input,.bottom-link{
        color:white;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter {
    opacity: 0;
    transform: translate(40px);
}
.fade-leave-to{
    opacity: 0;
    transform: translate(-40px);
}

.login-input{
    display: block;
    border-style:none;
    outline-style: none ;
    border-bottom: 2px solid rgb(99, 156, 14);
    padding:10px 15px;
    margin-bottom:15px;
    /* box-shadow: 0px 0px 5px rgba(190, 190, 190, 0.315); */
    background: none;
    font-size:16px;
    width:300px;
    transition: 100ms all;
}
.login-input:hover{
    border-color:rgb(99, 156, 14)
}

.login-input:focus{
    background:rgb(99, 156, 14,0.1) ;
    border-color:rgb(99, 156, 14)
}

#login-button{
    margin:50px auto;
    padding:10px;
    border-radius: 42px;
    border:2px solid rgb(99, 156, 14);
    width:50px;
    height:50px;
    color:white;
    transition: 100ms all;
    fill:rgb(99, 156, 14);
}
#login-button .icon{
    width:40px;
    height:45px;
}
#login-button:hover{
    box-shadow: 0px 0px 10px rgba(14, 156, 14, 0.411);
    fill:white;
    background: rgb(99, 156, 14);
}
#login-button:active{
    background: rgb(70, 110, 10);
}
</style>