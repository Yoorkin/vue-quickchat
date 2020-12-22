import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './view/Login.vue'
import Chat from './view/Chat.vue'
import Recent from './view/Recent.vue'
import Friend from './view/Friend.vue'
import Group from './view/Group.vue'
import Profile from './view/Profile.vue'
import Setting from './view/Setting.vue'
import Home from './view/Home.vue'
import Conversation from './view/Conversation.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes=[
  {path:'/login',component:Login},
  {
    path:'/chat',
    component:Chat,
    children:[
      {
        path:'recent',component:Recent,
        children:[
          {path:'/',component:Home},
          {path:'/:conversationID',component:Conversation}
        ]
      },
      {path:'friend',component:Friend},
      {path:'group',component:Group},
      {path:'profile',component:Profile},
      {path:'setting',component:Setting}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
