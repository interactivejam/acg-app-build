(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{648:function(t,n,o){"use strict";o.r(n);var e={layout:"games_following",data:function(){return{story:{content:{}}}},asyncData:function(t){var n=t.query._storyblok||t.isDev?"draft":"published";return t.app.$storyapi.get("cdn/stories/vic/".concat(t.params.slug),{version:n}).then((function(t){return t.data})).catch((function(n){t.error({statusCode:n.response.status,message:n.response.data})}))},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):window.location.reload()}))}},r=o(3),component=Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",[this.story.content.component?n(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);