<template>
    <div id='root' class='scroller'>
        <div id='content'>
        <div class='card' v-for="item in messages" :key="item.id">
            <div class='message-item' v-if='item.kind==="others-message"'>
                <div class='avatar'>
                    <img v-bind:src='item.attribute.avatar'/>
                </div>
                <div class='item-text'>
                    <p class='item-sender'>{{item.attribute.sender}}</p>
                    <div class='item-message'>
                        <p>{{item.attribute.message}}</p>
                    </div>
                </div>
            </div>

            <div class='message-item pad-right' v-if='item.kind==="self-message"'>
                <div class='item-text'>
                    <div class='item-message'>
                            <p>{{item.attribute.message}}</p>
                    </div>
                </div>
                <div class='avatar'>
                    <img v-bind:src='item.attribute.avatar'/>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            messages:[
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'self-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1831305534&s=640',sender:'Yorkin',message:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},{id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦'}},
                {id:1,kind:'others-message',attribute:{time:'',avatar:'http://q1.qlogo.cn/g?b=qq&nk=1604089411&s=640',sender:'王铜',message:'啦啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦啦啦'}}
            ]
        }
    }
}
</script>

<style scoped>
#root{
    display: flex;
    justify-content: center;
    overflow:auto;
}
#content{
    padding:100px 0px;
    min-width: 200px;
    max-width: 800px;
    flex-grow: 1;
}
.card{
    margin:20px;
}
.message-item{
    display: flex;
}
.avatar{
    min-width:40px;
    height:40px;
    overflow: hidden;
    border-radius: 2em;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column: 1;
}
.avatar img{
    width:40px;
    height:40px;
}
.item-text{
    display: flex;
    flex-direction: column;
}
.item-sender{
    font-size: 0.7em;
    text-align: left;
    padding:0px;
    margin:0px 10px;
}
.item-message{
    font-size: 1em;
    margin:5px 10px;
    text-align: left;
    display: flex;
    background: white;
    padding:5px 10px;
    border-radius: 10px;
}
.item-message p{
    padding:0px;
    margin:0px;
    user-select:text;
}

.pad-right{
    justify-content: flex-end;
}
.pad-right .item-sender{
   text-align: right;
}
</style>