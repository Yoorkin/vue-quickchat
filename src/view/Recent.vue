<template>
    <div id='main'>
        <div id='list'>
            <list v-on:item-click='openDialog($event)' id='scroll'/>
        </div>
        <div id='content'>
            <router-view/>
        </div>
    </div>
</template>

<script>
import List from '../components/List.vue'
// import MessageList from '../components/MessageList.vue'
// import Editor from '../components/Editor.vue'
export default {
    components:{List},
    methods:{
        openDialog:function(item){
            this.$router.push('/chat/recent/'+item.attribute.id);
            console.log(item);
        }
    },
    data:function(){
        return {
            
        }
    }
}
</script>

<style scoped>
#main{
    display:flex;
}

#content{
    display: flex;
    flex-direction: column;
    height:100vh;
}
#scroll{
    flex-grow: 1;
    width:100%;
}
@media screen and (min-width:700px){
    #list{
        width:25%;
        min-width: 250px;
        max-width:350px;
        background: white;
        display: flex;
        flex-direction: column;
        height:100vh;
    }
    #content{
        flex-grow: 1;
        background: rgb(228, 236, 240);
    }
}
@media screen and (max-width:700px){
    #list{
        background:  rgb(228, 236, 240);
        display: flex;
        flex-direction: column;
        height:100vh;
        flex-grow: 1;
    }
    #content{
        display: none;
    }
}
</style>