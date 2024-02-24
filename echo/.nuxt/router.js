import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _87aac27c = () => interopDefault(import('../pages/bookaboard.vue' /* webpackChunkName: "pages/bookaboard" */))
const _05b7932f = () => interopDefault(import('../pages/competencies.vue' /* webpackChunkName: "pages/competencies" */))
const _c0e6c748 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _47315908 = () => interopDefault(import('../pages/howwethink.vue' /* webpackChunkName: "pages/howwethink" */))
const _75a27b09 = () => interopDefault(import('../pages/indexold.vue' /* webpackChunkName: "pages/indexold" */))
const _3f3ba8c6 = () => interopDefault(import('../pages/ourworksmob.vue' /* webpackChunkName: "pages/ourworksmob" */))
const _6f292bbe = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _0607dde4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bookaboard",
    component: _87aac27c,
    name: "bookaboard"
  }, {
    path: "/competencies",
    component: _05b7932f,
    name: "competencies"
  }, {
    path: "/contact",
    component: _c0e6c748,
    name: "contact"
  }, {
    path: "/howwethink",
    component: _47315908,
    name: "howwethink"
  }, {
    path: "/indexold",
    component: _75a27b09,
    name: "indexold"
  }, {
    path: "/ourworksmob",
    component: _3f3ba8c6,
    name: "ourworksmob"
  }, {
    path: "/works",
    component: _6f292bbe,
    name: "works"
  }, {
    path: "/",
    component: _0607dde4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
