(window.webpackJsonp=window.webpackJsonp||[]).push([["home-components","home-components-C1","home-components-C2","home-components-C3","home-components-C4"],{3732:function(t,e,n){"use strict";n.r(e);var o=n("7a23");var i={title:"模块4",props:{msg:String},mounted:function(){console.log("加载C4")},render:function(t,e,n,i,r,c){var a=Object(o.resolveComponent)("el-empty");return Object(o.openBlock)(),Object(o.createBlock)(a,{description:"描述文字"})}};e.default=i},"403d":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),i={style:{height:"248px"}},r={style:{"margin-top":"20px"}},c=Object(o.createTextVNode)("反馈讨论"),a=Object(o.createTextVNode)("gitee");var s={title:"模块2",data:function(){return{activities:[{content:["[优化] 代码生成器重构移位"],timestamp:"2021-06-03"},{content:["[新增] 扩展图标"],timestamp:"2021-06-01"},{content:["[新增] 布局实时演示","[优化] 抽离tinymce、echarts模块","[优化] 更换富文本编辑为tinymce","[优化] 打印工具可直接传入html","[删除] 诺干个无用的模板"],timestamp:"2021-05-30"},{content:["[优化] 上传组件上传行为","[优化] 富文本上传行为"],timestamp:"2021-05-25"},{content:["[优化] 重构上传组件","[新增] 富文本编辑器"],timestamp:"2021-05-24"},{content:["[优化] 控制台自由布局开关","[优化] 增加菜单管理新增和删除","[优化] 角色管理增加权限配置"],timestamp:"2021-05-17"},{content:["[新增] 组件sortablejs","[新增] 7类系统基础页面","[新增] 表格新增params，hidePagination参数","[新增] 新的全局组件 sc-upload","[优化] 路由表新增type属性 判断菜单、链接等","[优化] iframe的表现形式,地址栏用别名代替","[修复] 图表和表格切换标签时宽高异常"],timestamp:"2021-05-16"},{content:["[新增] 打印工具","[新增] 移动端菜单布局","[修复] scEcharts数据双向绑定"],timestamp:"2021-05-09"},{content:["[新增] 个性列表模板","[调整] 大布局更换为flex布局"],timestamp:"2021-05-09"},{content:["[新增] 增加自定义隐藏排序列","[修复] scEcharts组件主题警"],timestamp:"2021-05-08"},{content:["[调整] 提升部分组件为全局组件"],timestamp:"2021-05-07"},{content:['1.0.0 版本开源 <i class="el-icon-present"></i>'],timestamp:"2021-05-07"}]}},mounted:function(){},methods:{go:function(){window.open("https://support.qq.com/product/323856")},gogit:function(){window.open("https://gitee.com/lolicode/scui")}},render:function(t,e,n,s,l,u){var d=Object(o.resolveComponent)("el-timeline-item"),p=Object(o.resolveComponent)("el-timeline"),m=Object(o.resolveComponent)("el-scrollbar"),h=Object(o.resolveComponent)("el-button");return Object(o.openBlock)(),Object(o.createBlock)(o.Fragment,null,[Object(o.createVNode)("div",i,[Object(o.createVNode)(m,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{style:{"padding-left":"20px"}},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(l.activities,(function(t,e){return Object(o.openBlock)(),Object(o.createBlock)(d,{key:e,timestamp:t.timestamp,color:0==e?"#409EFF":"",placement:"top"},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(t.content,(function(t){return Object(o.openBlock)(),Object(o.createBlock)("li",{key:t,innerHTML:t},null,8,["innerHTML"])})),128))]})),_:2},1032,["timestamp","color"])})),128))]})),_:1})]})),_:1})]),Object(o.createVNode)("div",r,[Object(o.createVNode)(h,{type:"primary",round:"",onClick:u.go},{default:Object(o.withCtx)((function(){return[c]})),_:1},8,["onClick"]),Object(o.createVNode)(h,{type:"primary",round:"",onClick:u.gogit},{default:Object(o.withCtx)((function(){return[a]})),_:1},8,["onClick"])])],64)}};e.default=s},"591b":function(t,e,n){"use strict";var o=n("7a23");var i=n("5530"),r=n("313e"),c={color:["#409EFF","#36CE9E","#E6A23C","#626c91","#F56C6C","#909399"],grid:{left:"3%",right:"3%",bottom:"3%",top:"40",containLabel:!0},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#eee",width:1}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{color:"#999"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(255,255,255,0.01)","rgba(0,0,0,0.01)"]}}},valueAxis:{axisLine:{show:!1,lineStyle:{color:"#999"}}}};r.registerTheme("T",c);var a=Object(i.a)(Object(i.a)({},r),{},{name:"scEcharts",props:{height:{type:String,default:"100%"},width:{type:String,default:"100%"},nodata:{type:Boolean,default:!1},option:{type:Object,default:function(){}}},data:function(){return{myChart:null}},watch:{option:{deep:!0,handler:function(t){var e;(e=this.myChart,e&&(e.__v_raw||e.valueOf()||e)).setOption(t)}}},computed:{myOptions:function(){return this.option||{}}},activated:function(){var t=this;this.$nextTick((function(){t.myChart.resize()}))},mounted:function(){this.draw()},methods:{draw:function(){var t=r.init(this.$refs.scEcharts,"T");t.setOption(this.myOptions),this.myChart=t,window.addEventListener("resize",(function(){return t.resize()}))}}});a.render=function(t,e,n,i,r,c){return Object(o.openBlock)(),Object(o.createBlock)("div",{ref:"scEcharts",style:{height:n.height,width:n.width}},null,4)};e.a=a},7578:function(t,e,n){"use strict";n.r(e);var o=n("7a23");var i={title:"模块3",components:{scEcharts:n("591b").a},data:function(){return{loading:!0,option:{}}},created:function(){var t=this;setTimeout((function(){t.loading=!1}),500);this.option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["支出","收入"],right:13},xAxis:{data:["周一","周二","周三","周四","周五"]},yAxis:[{type:"value",name:"价格"}],series:[{name:"支出",barWidth:"15px",type:"bar",data:[5,20,36,10,10]},{name:"收入",type:"bar",barWidth:"15px",data:[15,20,16,20,30]}]}},render:function(t,e,n,i,r,c){var a=Object(o.resolveComponent)("scEcharts"),s=Object(o.resolveDirective)("loading");return Object(o.withDirectives)((Object(o.openBlock)(),Object(o.createBlock)("div",null,[Object(o.createVNode)(a,{height:"220px",option:r.option},null,8,["option"])],512)),[[s,r.loading]])}};e.default=i},a6ff:function(t,e,n){"use strict";n.r(e);var o=n("7a23");n("ac1f"),n("5319");var i={title:"模块1",components:{scEcharts:n("591b").a},data:function(){return{loading:!0,option:{}}},created:function(){var t=this;setTimeout((function(){t.loading=!1}),500);var e={tooltip:{trigger:"axis"},xAxis:{boundaryGap:!1,type:"category",data:function(){for(var t=new Date,e=[],n=30;n--;)e.unshift(t.toLocaleTimeString().replace(/^\D*/,"")),t=new Date(t-2e3);return e}()},yAxis:[{type:"value",name:"价格",splitLine:{show:!1}}],series:[{name:"收入",type:"line",symbol:"none",lineStyle:{width:1,color:"#F56C6C"},areaStyle:{opacity:.1,color:"#F56C6C"},data:function(){for(var t=[],e=30;e--;)t.push(Math.round(0*Math.random()));return t}()}]};this.option=e},mounted:function(){var t=this;setInterval((function(){var e=t.option;e.series[0].data.shift(),e.series[0].data.push(Math.round(100*Math.random())),e.xAxis.data.shift(),e.xAxis.data.push((new Date).toLocaleTimeString().replace(/^\D*/,""))}),2100)},render:function(t,e,n,i,r,c){var a=Object(o.resolveComponent)("scEcharts"),s=Object(o.resolveDirective)("loading");return Object(o.withDirectives)((Object(o.openBlock)(),Object(o.createBlock)("div",null,[Object(o.createVNode)(a,{ref:"c1",height:"300px",option:r.option},null,8,["option"])],512)),[[s,r.loading]])}};e.default=i},d3d3:function(t,e,n){"use strict";n.r(e);n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var o=n("7a23"),i={},r=n("dd5c");r.keys().forEach((function(t){var e=r(t);i[t.replace(/^\.\/(.*)\.\w+$/,"$1")]=e.default})),e.default=Object(o.markRaw)(i)},dd5c:function(t,e,n){var o={"./C1.vue":"a6ff","./C2.vue":"403d","./C3.vue":"7578","./C4.vue":"3732"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id="dd5c"}}]);