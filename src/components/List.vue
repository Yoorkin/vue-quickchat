<template>
    <div id='root' class='scroller'>
        <div id='root-space'/>
        <div class='item' v-for='item in list' :key='item.id' v-on:click='$emit("item-click",item)'>
            <div class='item-mask'>
                <img v-bind:src='item.picture'/>
            </div>
            <p class='item-topic'>{{item.topic}}</p>
            <p class='item-msg'>{{item.message}}</p>
            <p class='item-time'>{{item.time}}</p>
            <div v-if='item.count!=0' class='item-count'><p>{{item.count}}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    
    data:function(){
        return{
            list:[
                {id:1,picture:'http://q1.qlogo.cn/g?b=qq&nk=937697555&s=640',topic:'炸裂的方程',time:'2020-12-15',count:'1',message:'啦啦啦啦啦123message asdfasdfasdf',attribute:{id:'88923'}},
            ]
        }
    }
}
</script>

<style scoped>
#root{
    display: flex;
    flex-direction: column;
    overflow:auto;
}
@media screen and (min-width:700px) {
}
@media screen and (max-width:700px) {
    #root-space{
        height:60px;
    }
}
.item{
    transition: all 100ms ease-out;
    height:60px;
    padding:10px;
    display: grid;
    grid-template-columns: 70px 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: left;
}

.item:hover{
    background: rgba(55, 163, 206, 0.137);
}
.item:active{
    background: rgba(85, 85, 85, 0.267);
}
.item-mask{
    margin:5px;
    overflow: hidden;
    width:50px;
    height:50px;
    border-radius: 2em;
    grid-row-start:1;
    grid-row-end:3;
    grid-column: 1;
}
.item-mask img{
    width:50px;
    height:50px;
}
.item-topic{
    padding-top:15px;
    grid-column: 2;
    grid-row:1;
    font-size: 0.8em;
    margin:0px;
    white-space: nowrap;
}
.item-msg{
    grid-column: 2;
    grid-row: 2;
    font-size: 0.5em;
    margin:0px;
    white-space: nowrap;
    overflow: hidden;
}
.item-time{
    margin:0px;
    padding-top:20px;
    grid-column: 3;
    grid-row: 1;
    font-size: 10px;
    color:gray;
    text-align: right;
}
.item-count{
    grid-column: 3;
    grid-row: 2;
    display: flex;
    justify-content: flex-end;
}
.item-count p{
    margin:0px;
    border-radius: 9px;
    height:10px;
    min-width:10px;
    background: red;
    color:white;
    font-size: 10px;
    text-align: center;
    padding: 4px;
}


</style>