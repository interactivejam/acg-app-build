import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46f6e8a1 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _b36a00ae = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _f93071f4 = () => interopDefault(import('../pages/global/index.vue' /* webpackChunkName: "pages/global/index" */))
const _223d04e5 = () => interopDefault(import('../pages/nsw/index.vue' /* webpackChunkName: "pages/nsw/index" */))
const _aa1d6308 = () => interopDefault(import('../pages/qld/index.vue' /* webpackChunkName: "pages/qld/index" */))
const _b0f267ba = () => interopDefault(import('../pages/vic/index.vue' /* webpackChunkName: "pages/vic/index" */))
const _27ef30e8 = () => interopDefault(import('../pages/nsw/FAQ/index.vue' /* webpackChunkName: "pages/nsw/FAQ/index" */))
const _07c00da3 = () => interopDefault(import('../pages/qld/FAQ/index.vue' /* webpackChunkName: "pages/qld/FAQ/index" */))
const _c6ff406c = () => interopDefault(import('../pages/vic/FAQ/index.vue' /* webpackChunkName: "pages/vic/FAQ/index" */))
const _fed35b94 = () => interopDefault(import('../pages/vic/organise-your-team/index.vue' /* webpackChunkName: "pages/vic/organise-your-team/index" */))
const _7033eef0 = () => interopDefault(import('../pages/vic/sport/index.vue' /* webpackChunkName: "pages/vic/sport/index" */))
const _2b5c7378 = () => interopDefault(import('../pages/nsw/FAQ/_slug.vue' /* webpackChunkName: "pages/nsw/FAQ/_slug" */))
const _06096c5b = () => interopDefault(import('../pages/qld/FAQ/_slug.vue' /* webpackChunkName: "pages/qld/FAQ/_slug" */))
const _ca6c82fc = () => interopDefault(import('../pages/vic/FAQ/_slug.vue' /* webpackChunkName: "pages/vic/FAQ/_slug" */))
const _7edfb0ee = () => interopDefault(import('../pages/vic/organise-your-team/_slug.vue' /* webpackChunkName: "pages/vic/organise-your-team/_slug" */))
const _73a13180 = () => interopDefault(import('../pages/vic/sport/_slug.vue' /* webpackChunkName: "pages/vic/sport/_slug" */))
const _45404759 = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _b6d7433e = () => interopDefault(import('../pages/faq/_slug.vue' /* webpackChunkName: "pages/faq/_slug" */))
const _fc9db484 = () => interopDefault(import('../pages/global/_slug.vue' /* webpackChunkName: "pages/global/_slug" */))
const _2086639d = () => interopDefault(import('../pages/nsw/_slug.vue' /* webpackChunkName: "pages/nsw/_slug" */))
const _ad8aa598 = () => interopDefault(import('../pages/qld/_slug.vue' /* webpackChunkName: "pages/qld/_slug" */))
const _b45faa4a = () => interopDefault(import('../pages/vic/_slug.vue' /* webpackChunkName: "pages/vic/_slug" */))
const _b6b1613c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _ba1ea3cc = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _46f6e8a1,
    name: "category"
  }, {
    path: "/faq",
    component: _b36a00ae,
    name: "faq"
  }, {
    path: "/global",
    component: _f93071f4,
    name: "global"
  }, {
    path: "/nsw",
    component: _223d04e5,
    name: "nsw"
  }, {
    path: "/qld",
    component: _aa1d6308,
    name: "qld"
  }, {
    path: "/vic",
    component: _b0f267ba,
    name: "vic"
  }, {
    path: "/nsw/FAQ",
    component: _27ef30e8,
    name: "nsw-FAQ"
  }, {
    path: "/qld/FAQ",
    component: _07c00da3,
    name: "qld-FAQ"
  }, {
    path: "/vic/FAQ",
    component: _c6ff406c,
    name: "vic-FAQ"
  }, {
    path: "/vic/organise-your-team",
    component: _fed35b94,
    name: "vic-organise-your-team"
  }, {
    path: "/vic/sport",
    component: _7033eef0,
    name: "vic-sport"
  }, {
    path: "/nsw/FAQ/:slug",
    component: _2b5c7378,
    name: "nsw-FAQ-slug"
  }, {
    path: "/qld/FAQ/:slug",
    component: _06096c5b,
    name: "qld-FAQ-slug"
  }, {
    path: "/vic/FAQ/:slug",
    component: _ca6c82fc,
    name: "vic-FAQ-slug"
  }, {
    path: "/vic/organise-your-team/:slug?",
    component: _7edfb0ee,
    name: "vic-organise-your-team-slug"
  }, {
    path: "/vic/sport/:slug",
    component: _73a13180,
    name: "vic-sport-slug"
  }, {
    path: "/category/:slug",
    component: _45404759,
    name: "category-slug"
  }, {
    path: "/faq/:slug",
    component: _b6d7433e,
    name: "faq-slug"
  }, {
    path: "/global/:slug",
    component: _fc9db484,
    name: "global-slug"
  }, {
    path: "/nsw/:slug",
    component: _2086639d,
    name: "nsw-slug"
  }, {
    path: "/qld/:slug",
    component: _ad8aa598,
    name: "qld-slug"
  }, {
    path: "/vic/:slug",
    component: _b45faa4a,
    name: "vic-slug"
  }, {
    path: "/",
    component: _b6b1613c,
    name: "index"
  }, {
    path: "/:slug",
    component: _ba1ea3cc,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
