<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%
}
body{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
html{
  height:100%
}
*{
  user-select: none;
}
.scroller {
  overflow-y: scroll;
  scrollbar-color:  rgba(73, 174, 233, 0.61) rgba(0, 128, 0, 0);
  scrollbar-width: thin;
}
.scroller::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(0,0,0,0);
}

.scroller::-webkit-scrollbar-thumb {
  background: rgb(122, 192, 233);
  border-radius: 2px;
}
</style>
