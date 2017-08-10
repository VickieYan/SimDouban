import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../pages/homepage.vue'
import Audio from '../pages/audio.vue'
import Broadcast from '../pages/broadcast.vue'
import Group from '../pages/group.vue'
import User from '../pages/user.vue'
import Movie from '../pages/movie.vue'
import Read from '../pages/read.vue'
import Tv from '../pages/tv.vue'
import City from '../pages/city.vue'
import Music from '../pages/music.vue'
import All from '../miniprogram/all.vue'
import Moremovie from '../pages/moremovie.vue'
import Moviedetail from '../components/moviedetail.vue'
import Hotdetail from '../components/hotdetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[{
        path:'/audio/0',
        name: 'Movie',
        component:Movie,
      },{
        path:'/audio/1',
        name: '/Read',
        component:Read
      },{
        path:'/audio/2',
        name: 'Tv',
        component:Tv
      },{
        path:'/audio/3',
        name: 'City',
        component:City
      },{
        path:'/audio/4',
        name: 'Music',
        component:Music
      },{
          path:'/audio/moremovie',
          component:Moremovie
        },{
          path:'/audio/moviedetail/:id',
          name:"Moviedetail",
          component:Moviedetail
        }]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/hotdetail/:id',
      name: 'Hotdetail',
      component: Hotdetail
    }
  ]
})
