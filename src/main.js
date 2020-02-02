import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Dogger from './demos/dogger/Home'

const routes = [
  { path: '/dogger', component: Dogger },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

import ContentBlocks from 'contentblocks-vuejs'
Vue.use(ContentBlocks, {project_id: 'kj0MCiAolLHGnx9PPbsO', key:'e' })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
