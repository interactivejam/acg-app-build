(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{599:function(t,n,o){},609:function(t,n,o){"use strict";var e=o(599);o.n(e).a},621:function(t,n,o){"use strict";o.r(n);var e={data:function(){return{story:{content:{}},vic:"VIC"}},asyncData:function(t){t.query._storyblok||t.isDev;return t.app.$storyapi.get("cdn/stories/vic/faq",{version:t.isDev?"draft":"published"}).then((function(t){return t.data})).catch((function(n){t.error({statusCode:n.response.status,message:n.response.data})}))},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):window.location.reload()}))}},c=(o(609),o(3)),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("section",[t._m(0),t._v(" "),t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content,path:t.vic,slug:t.story.full_slug}}):t._e()],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"find_sec"},[n("div",{staticClass:"container"},[n("h2",[this._v("What do you need to find out more about?")]),this._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-xl-5 col-lg-7 col-md-8 col-sm-12"},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Type keywords to find answers"}})])])])])])}],!1,null,"37999ed0",null);n.default=component.exports}}]);