(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{759:function(t,n,o){},768:function(t,n,o){"use strict";var e=o(759);o.n(e).a},782:function(t,n,o){"use strict";o.r(n);var e={layout:"default_following",data:function(){return{story:{content:{}},vic:"VIC"}},asyncData:function(t){t.query._storyblok||t.isDev;return t.app.$storyapi.get("cdn/stories/vic/faq",{version:t.isDev?"draft":"published"}).then((function(t){return t.data})).catch((function(n){t.error({statusCode:n.response.status,message:n.response.data})}))},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):window.location.reload()}))}},r=(o(768),o(3)),component=Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("section",[this.story.content.component?n(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content,path:this.vic,slug:this.story.full_slug}}):this._e()],1)])}),[],!1,null,"31433a9e",null);n.default=component.exports}}]);