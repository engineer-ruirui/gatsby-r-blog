(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{J4bc:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return T}));var a=n("q1tI"),o=n.n(a),r=n("Zttt"),i=n("/d1K"),s=n("Wbzz"),l=n("7Qib"),u=n("d+ly"),c=n.n(u),m=n("gGy4"),d=function(){var t=Object(m.b)().author;return o.a.createElement("div",{className:c.a.author},o.a.createElement("p",{className:c.a.author__bio},t.bio,o.a.createElement("a",{className:c.a["author__bio-twitter"],href:Object(l.a)("twitter",t.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,t.name)," on Twitter")))},f=n("RPjP"),p=n.n(f),_=function(t){var e=t.postTitle,n=t.postSlug,a=Object(m.b)(),r=a.url,i=a.disqusShortname;return i?o.a.createElement(p.a,{shortname:i,identifier:e,title:e,url:r+n}):null},g=n("Mvws"),h=n.n(g),b=function(t){var e=t.body,n=t.title;return o.a.createElement("div",{className:h.a.content},o.a.createElement("h1",{className:h.a.content__title},n),o.a.createElement("div",{className:h.a.content__body,dangerouslySetInnerHTML:{__html:e}}))},y=n("wd/R"),v=n.n(y),w=n("myfg"),E=n.n(w),N=function(t){var e=t.date;return o.a.createElement("div",{className:E.a.meta},o.a.createElement("p",{className:E.a.meta__date},"投稿日 ",v()(e).format("YYYY/MM/DD")))},k=n("WXWR"),O=n.n(k),j=function(t){var e=t.tags,n=t.tagSlugs;return o.a.createElement("div",{className:O.a.tags},o.a.createElement("ul",{className:O.a.tags__list},n&&n.map((function(t,n){return o.a.createElement("li",{className:O.a["tags__list-item"],key:e[n]},o.a.createElement(s.Link,{to:t,className:O.a["tags__list-item-link"]},e[n]))}))))},P=n("gt/k"),S=n.n(P),q=function(t){var e=t.post,n=e.html,a=e.fields,r=a.tagSlugs,i=a.slug,l=e.frontmatter,u=l.tags,c=l.title,m=l.date;return o.a.createElement("div",{className:S.a.post},o.a.createElement("div",{className:S.a.post__content},o.a.createElement(s.Link,{className:S.a["post__home-button"],to:"/"},"ホーム"),o.a.createElement(b,{body:n,title:c})),o.a.createElement("div",{className:S.a.post__footer},o.a.createElement(N,{date:m}),u&&r&&o.a.createElement(j,{tags:u,tagSlugs:r}),o.a.createElement(d,null)),o.a.createElement("div",{className:S.a.post__comments},o.a.createElement(_,{postSlug:i,postTitle:e.frontmatter.title})))},T="73744609";e.default=function(t){var e=t.data,n=Object(m.b)(),a=n.title,s=n.subtitle,l=e.markdownRemark.frontmatter,u=l.title,c=l.description,d=l.socialImage,f=null!==c?c:s;return o.a.createElement(r.a,{title:u+" - "+a,description:f,socialImage:d},o.a.createElement(q,{post:e.markdownRemark}),o.a.createElement(i.a,null))}},Mvws:function(t,e,n){t.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(t,e,n){"use strict";t.exports=n("SLms")},SLms:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=s(n("q1tI")),i=s(n("17x9"));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(t,e){var n=e.onNewComment,a=e.language,o=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}(e,["onNewComment","language"]);for(var r in o)t.page[r]=o[r];t.language=a,n&&(t.callbacks={onNewComment:[n]})}var f=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce((function(e,n){return c.some((function(t){return t===n}))?e:a({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t.props[n]))}),{});return r.default.createElement("div",e,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),m=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};c.forEach((function(n){"shortname"!==n&&t.props[n]&&(e[n]=t.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,e)},this.addDisqusScript())}}]),e}(r.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=f},WXWR:function(t,e,n){t.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(t,e,n){t.exports={author:"Author-module--author--2Yefr","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(t,e,n){t.exports={post:"Post-module--post--2ySQi",post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0",post__inner:"Post-module--post__inner--3n3q_"}},myfg:function(t,e,n){t.exports={meta__date:"Meta-module--meta__date--29eD7"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-c60b560e2828dc02da07.js.map