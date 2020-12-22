<template>
    <div @click='$emit("click")' class='iconButton'>
        <slot id='content'></slot>
    </div>
</template>

<style>

</style>

<style scoped>
.iconButton{
    transition: all 130ms;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.iconButton:hover{
    background: rgba(223, 228, 233, 0.534);
}
.iconButton:active{
    background: rgba(45, 48, 51, 0.575);
}
.iconButton >>> .icon{
    width:1.2em;
    height:1.2em;
}

</style>