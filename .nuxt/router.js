import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a9252dc = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _090246e4 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _bc82f7fe = () => interopDefault(import('../pages/global/index.vue' /* webpackChunkName: "pages/global/index" */))
const _7770e1ca = () => interopDefault(import('../pages/nsw/index.vue' /* webpackChunkName: "pages/nsw/index" */))
const _00252b61 = () => interopDefault(import('../pages/qld/index.vue' /* webpackChunkName: "pages/qld/index" */))
const _068aadf0 = () => interopDefault(import('../pages/vic/index.vue' /* webpackChunkName: "pages/vic/index" */))
const _ceed6c1e = () => interopDefault(import('../pages/nsw/FAQ/index.vue' /* webpackChunkName: "pages/nsw/FAQ/index" */))
const _977e1ff0 = () => interopDefault(import('../pages/qld/FAQ/index.vue' /* webpackChunkName: "pages/qld/FAQ/index" */))
const _4901422f = () => interopDefault(import('../pages/vic/FAQ/index.vue' /* webpackChunkName: "pages/vic/FAQ/index" */))
const _0881b931 = () => interopDefault(import('../pages/vic/organise-your-team/index.vue' /* webpackChunkName: "pages/vic/organise-your-team/index" */))
const _57b7e5ad = () => interopDefault(import('../pages/vic/sport/index.vue' /* webpackChunkName: "pages/vic/sport/index" */))
const _d25aaeae = () => interopDefault(import('../pages/nsw/FAQ/_slug.vue' /* webpackChunkName: "pages/nsw/FAQ/_slug" */))
const _9aeb6280 = () => interopDefault(import('../pages/qld/FAQ/_slug.vue' /* webpackChunkName: "pages/qld/FAQ/_slug" */))
const _474aa0e7 = () => interopDefault(import('../pages/vic/FAQ/_slug.vue' /* webpackChunkName: "pages/vic/FAQ/_slug" */))
const _06cb17e9 = () => interopDefault(import('../pages/vic/organise-your-team/_slug.vue' /* webpackChunkName: "pages/vic/organise-your-team/_slug" */))
const _2ba02b28 = () => interopDefault(import('../pages/vic/sport/_slug/index.vue' /* webpackChunkName: "pages/vic/sport/_slug/index" */))
const _2e4ecd5b = () => interopDefault(import('../pages/vic/sport/_slug/_mapdetails.vue' /* webpackChunkName: "pages/vic/sport/_slug/_mapdetails" */))
const _28dbb194 = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _0c6f8974 = () => interopDefault(import('../pages/faq/_slug.vue' /* webpackChunkName: "pages/faq/_slug" */))
const _bff03a8e = () => interopDefault(import('../pages/global/_slug.vue' /* webpackChunkName: "pages/global/_slug" */))
const _75ba4082 = () => interopDefault(import('../pages/nsw/_slug.vue' /* webpackChunkName: "pages/nsw/_slug" */))
const _0322ebce = () => interopDefault(import('../pages/qld/_slug.vue' /* webpackChunkName: "pages/qld/_slug" */))
const _09f7f080 = () => interopDefault(import('../pages/vic/_slug.vue' /* webpackChunkName: "pages/vic/_slug" */))
const _97a13272 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _9b0e7502 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _2a9252dc,
    name: "category"
  }, {
    path: "/faq",
    component: _090246e4,
    name: "faq"
  }, {
    path: "/global",
    component: _bc82f7fe,
    name: "global"
  }, {
    path: "/nsw",
    component: _7770e1ca,
    name: "nsw"
  }, {
    path: "/qld",
    component: _00252b61,
    name: "qld"
  }, {
    path: "/vic",
    component: _068aadf0,
    name: "vic"
  }, {
    path: "/nsw/FAQ",
    component: _ceed6c1e,
    name: "nsw-FAQ"
  }, {
    path: "/qld/FAQ",
    component: _977e1ff0,
    name: "qld-FAQ"
  }, {
    path: "/vic/FAQ",
    component: _4901422f,
    name: "vic-FAQ"
  }, {
    path: "/vic/organise-your-team",
    component: _0881b931,
    name: "vic-organise-your-team"
  }, {
    path: "/vic/sport",
    component: _57b7e5ad,
    name: "vic-sport"
  }, {
    path: "/nsw/FAQ/:slug",
    component: _d25aaeae,
    name: "nsw-FAQ-slug"
  }, {
    path: "/qld/FAQ/:slug",
    component: _9aeb6280,
    name: "qld-FAQ-slug"
  }, {
    path: "/vic/FAQ/:slug",
    component: _474aa0e7,
    name: "vic-FAQ-slug"
  }, {
    path: "/vic/organise-your-team/:slug?",
    component: _06cb17e9,
    name: "vic-organise-your-team-slug"
  }, {
    path: "/vic/sport/:slug",
    component: _2ba02b28,
    name: "vic-sport-slug"
  }, {
    path: "/vic/sport/:slug/:mapdetails",
    component: _2e4ecd5b,
    name: "vic-sport-slug-mapdetails"
  }, {
    path: "/category/:slug",
    component: _28dbb194,
    name: "category-slug"
  }, {
    path: "/faq/:slug",
    component: _0c6f8974,
    name: "faq-slug"
  }, {
    path: "/global/:slug",
    component: _bff03a8e,
    name: "global-slug"
  }, {
    path: "/nsw/:slug",
    component: _75ba4082,
    name: "nsw-slug"
  }, {
    path: "/qld/:slug",
    component: _0322ebce,
    name: "qld-slug"
  }, {
    path: "/vic/:slug",
    component: _09f7f080,
    name: "vic-slug"
  }, {
    path: "/",
    component: _97a13272,
    name: "index"
  }, {
    path: "/:slug",
    component: _9b0e7502,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
