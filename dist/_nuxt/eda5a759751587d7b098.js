(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{417:function(t,n,e){"use strict";e.r(n);var o={layout:"vic",data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/qld",{version:t.isDev?"draft":"published"}).then((function(t){return t.data})).catch((function(n){n.response?(console.error(n.response.data),t.error({statusCode:n.response.status,message:n.response.data})):(console.error(n),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},r=e(3),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"util__container container col-c-xl-12"},[this.story.content.component?n(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);