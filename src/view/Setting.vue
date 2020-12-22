<template>
    <div id='main'>
        <div id='list'>

        </div>
        <div id='content'>

        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            list:[
                {avatar:'',name:'',id:'',lastTime:''}
            ]
        }
    }
}
</script>

<style scoped>
#main{
    background: grey;
}
</style>