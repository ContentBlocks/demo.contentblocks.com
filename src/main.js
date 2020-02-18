import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Dogger from './demos/dogger/Home'


var vueMeta = {
  title: 'ContentBlocks Vue.js example',
  metaTags: [
    {
      name: 'description',
      content: 'Example of ContentBlocks Reactive CMS in a Vue.js website.'
    },
    {
      property: 'og:description',
      content: 'Example of ContentBlocks Reactive CMS in a Vue.js website.'
    }
  ]
}

import kitchenSinkRoutes from './demos/kitchen-sink/routes'

const routes = [
  { path: '/', component: () => import('./demos/Index'), meta: vueMeta },
  { path: '/dogger', component: Dogger, meta: vueMeta },
  { path: '/vuejs', component: Dogger, meta: vueMeta },
  kitchenSinkRoutes
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

Vue.config.productionTip = false

import ContentBlocks from 'contentblocks-vuejs'
Vue.use(ContentBlocks, {project_id: 'kj0MCiAolLHGnx9PPbsO' })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
