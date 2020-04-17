import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8e9a466e = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _52211281 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _4862a52e = () => interopDefault(import('../pages/global/index.vue' /* webpackChunkName: "pages/global/index" */))
const _63d9d086 = () => interopDefault(import('../pages/nsw/index.vue' /* webpackChunkName: "pages/nsw/index" */))
const _56c76154 = () => interopDefault(import('../pages/qld/index.vue' /* webpackChunkName: "pages/qld/index" */))
const _535cdefb = () => interopDefault(import('../pages/vic/index.vue' /* webpackChunkName: "pages/vic/index" */))
const _7178c527 = () => interopDefault(import('../pages/vic/FAQs/index.vue' /* webpackChunkName: "pages/vic/FAQs/index" */))
const _0ac03f44 = () => interopDefault(import('../pages/vic/organise-your-team/index.vue' /* webpackChunkName: "pages/vic/organise-your-team/index" */))
const _e4aecd40 = () => interopDefault(import('../pages/vic/sport/index.vue' /* webpackChunkName: "pages/vic/sport/index" */))
const _6fc223df = () => interopDefault(import('../pages/vic/FAQs/_slug.vue' /* webpackChunkName: "pages/vic/FAQs/_slug" */))
const _0e2d81d4 = () => interopDefault(import('../pages/vic/organise-your-team/_slug.vue' /* webpackChunkName: "pages/vic/organise-your-team/_slug" */))
const _e81c0fd0 = () => interopDefault(import('../pages/vic/sport/_slug.vue' /* webpackChunkName: "pages/vic/sport/_slug" */))
const _920788fe = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _506a7139 = () => interopDefault(import('../pages/faq/_slug.vue' /* webpackChunkName: "pages/faq/_slug" */))
const _46ac03e6 = () => interopDefault(import('../pages/global/_slug.vue' /* webpackChunkName: "pages/global/_slug" */))
const _67471316 = () => interopDefault(import('../pages/nsw/_slug.vue' /* webpackChunkName: "pages/nsw/_slug" */))
const _5510c00c = () => interopDefault(import('../pages/qld/_slug.vue' /* webpackChunkName: "pages/qld/_slug" */))
const _51a63db3 = () => interopDefault(import('../pages/vic/_slug.vue' /* webpackChunkName: "pages/vic/_slug" */))
const _23688e3a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _21b1ecf2 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _8e9a466e,
    name: "category"
  }, {
    path: "/faq",
    component: _52211281,
    name: "faq"
  }, {
    path: "/global",
    component: _4862a52e,
    name: "global"
  }, {
    path: "/nsw",
    component: _63d9d086,
    name: "nsw"
  }, {
    path: "/qld",
    component: _56c76154,
    name: "qld"
  }, {
    path: "/vic",
    component: _535cdefb,
    name: "vic"
  }, {
    path: "/vic/FAQs",
    component: _7178c527,
    name: "vic-FAQs"
  }, {
    path: "/vic/organise-your-team",
    component: _0ac03f44,
    name: "vic-organise-your-team"
  }, {
    path: "/vic/sport",
    component: _e4aecd40,
    name: "vic-sport"
  }, {
    path: "/vic/FAQs/:slug",
    component: _6fc223df,
    name: "vic-FAQs-slug"
  }, {
    path: "/vic/organise-your-team/:slug?",
    component: _0e2d81d4,
    name: "vic-organise-your-team-slug"
  }, {
    path: "/vic/sport/:slug",
    component: _e81c0fd0,
    name: "vic-sport-slug"
  }, {
    path: "/category/:slug",
    component: _920788fe,
    name: "category-slug"
  }, {
    path: "/faq/:slug",
    component: _506a7139,
    name: "faq-slug"
  }, {
    path: "/global/:slug",
    component: _46ac03e6,
    name: "global-slug"
  }, {
    path: "/nsw/:slug",
    component: _67471316,
    name: "nsw-slug"
  }, {
    path: "/qld/:slug",
    component: _5510c00c,
    name: "qld-slug"
  }, {
    path: "/vic/:slug",
    component: _51a63db3,
    name: "vic-slug"
  }, {
    path: "/",
    component: _23688e3a,
    name: "index"
  }, {
    path: "/:slug",
    component: _21b1ecf2,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
