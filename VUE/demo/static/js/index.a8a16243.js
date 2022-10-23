(function(){"use strict";var t={20:function(t,e,i){var n=i(144),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.go}},[t._v("go")])])])},a=[],l={name:"BannerVue",methods:{back(){this.$router.back()},forward(){this.$router.forward()},go(){this.$router.go(3)}}},u=l,c=i(1),v=(0,c.Z)(u,o,a,!1,null,null,null),f=v.exports,p={name:"App",components:{Banner:f}},h=p,d=(0,c.Z)(h,r,s,!1,null,"36f385eb",null),m=d.exports,_=i(345),w=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},g=[],b={name:"AboutVue",beforeRouteEnter(t,e,i){t.meta.isAuth?"yang"===localStorage.getItem("name")?i():alert("用户名不对无权限"):i()},afterRouterLeave(t,e,i){i()}},y=b,k=(0,c.Z)(y,w,g,!1,null,null,null),x=k.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是Home的内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News ")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v(" Message")])],1)]),e("keep-alive",{attrs:{include:["NewsVue","MessageVue"]}},[e("router-view")],1)],1)])},Z=[],O={name:"HomeVue"},A=O,V=(0,c.Z)(A,C,Z,!1,null,"4d82c72f",null),j=V.exports,P=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习")]),t._m(0),t._m(1),t._m(2)])},S=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],$={name:"NewsVue",data(){return{opacity:1}},activated(){console.log("切换到news组件，news组件被激活了"),this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("离开news组件，news组件失活了"),clearInterval(this.timer)}},q=$,B=(0,c.Z)(q,P,S,!1,null,"5e8ce7d4",null),H=B.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(i){return e("li",{key:i.id},[e("router-link",{attrs:{to:{name:"detail",query:{id:i.id,title:i.title}}}},[t._v(" "+t._s(i.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(i)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(i)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},L=[],M={name:"MessageVue",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"detail",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"detail",query:{id:t.id,title:t.title}})}}},N=M,R=(0,c.Z)(N,I,L,!1,null,"2f168ede",null),T=R.exports,D=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},E=[],F={name:"DetailVue",props:["id","title"]},z=F,G=(0,c.Z)(z,D,E,!1,null,null,null),J=G.exports;const K=new _.Z({mode:"history",routes:[{name:"about",path:"/about",component:x,meta:{isAuth:!0,title:"关于"}},{name:"home",path:"/home",component:j,meta:{title:"主页"},children:[{name:"news",path:"news",component:H,meta:{isAuth:!0,title:"新闻"}},{name:"message",path:"message",component:T,meta:{isAuth:!0,title:"信息"},children:[{name:"detail",path:"detail/:id/:title",component:J,meta:{isAuth:!0,title:"详情"},props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});var Q=K;n.ZP.config.productionTip=!1,n.ZP.use(_.Z),new n.ZP({el:"#root",render:t=>t(m),router:Q})}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,r,s){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],s=t[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,r,s]}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,o=n[0],a=n[1],l=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var c=l(i)}for(e&&e(n);u<o.length;u++)s=o[u],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(c)},n=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(20)}));n=i.O(n)})();
//# sourceMappingURL=index.a8a16243.js.map