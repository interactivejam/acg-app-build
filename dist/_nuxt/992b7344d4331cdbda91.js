(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{634:function(t,e,n){"use strict";n.r(e);var o={layout:"games_home",data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/vic/organise-your-team",{version:t.isDev?"draft":"published"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):t.error({statusCode:404,message:"Failed to receive content form api"})}))}},r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this.story.content.component?e(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);