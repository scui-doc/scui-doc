(window.webpackJsonp=window.webpackJsonp||[]).push([["home"],{"7abe":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={key:0};n("d3b7"),n("3ca3"),n("ddb0");var a={components:{stats:Object(o.defineAsyncComponent)((function(){return Promise.all([n.e("echarts"),n.e("modules"),n.e("home-stats-gridLayout"),n.e("home-stats")]).then(n.bind(null,"611a"))})),work:Object(o.defineAsyncComponent)((function(){return n.e("home-work").then(n.bind(null,"b223"))}))},data:function(){return{pageLoading:!0,dashboard:"0"}},created:function(){this.dashboard=this.$TOOL.data.get("user").dashboard},mounted:function(){},methods:{onMounted:function(){this.pageLoading=!1}},render:function(e,t,n,a,r,d){var u=Object(o.resolveComponent)("el-skeleton"),s=Object(o.resolveComponent)("el-card"),l=Object(o.resolveComponent)("el-main"),b=Object(o.resolveComponent)("work"),i=Object(o.resolveComponent)("stats");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[r.pageLoading?(Object(o.openBlock)(),Object(o.createBlock)("div",c,[Object(o.createVNode)(l,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{shadow:"never"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u,{rows:1})]})),_:1}),Object(o.createVNode)(s,{shadow:"never",style:{"margin-top":"15px"}},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u)]})),_:1})]})),_:1})])):Object(o.createCommentVNode)("",!0),"1"==r.dashboard?(Object(o.openBlock)(),Object(o.createBlock)(b,{key:1,onOnMounted:d.onMounted},null,8,["onOnMounted"])):(Object(o.openBlock)(),Object(o.createBlock)(i,{key:2,onOnMounted:d.onMounted},null,8,["onOnMounted"]))],64)}};t.default=a}}]);