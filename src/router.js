import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventsList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'events-list',
      component: EventsList
    },
    {
      path: '/event',
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
