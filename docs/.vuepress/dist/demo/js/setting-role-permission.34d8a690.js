(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-role-permission"],{6383:function(e,t,n){"use strict";n("666e")},"666e":function(e,t,n){},"73f2":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"treeMain"},l={class:"treeMain"},a={class:"treeMain"},r={style:{float:"left"}},i={style:{float:"right",color:"#8492a6","font-size":"12px"}},s=function(e){return Object(o.pushScopeId)("data-v-fcd309be"),e=e(),Object(o.popScopeId)(),e}((function(){return Object(o.createElementVNode)("div",{class:"el-form-item-msg"},"用于控制角色登录后控制台的视图",-1)})),u=Object(o.createTextVNode)("取 消"),d=Object(o.createTextVNode)("保 存");var b=n("1da1"),p=(n("96cf"),{emits:["success","closed"],data:function(){return{visible:!1,isSaveing:!1,menu:{list:[],checked:["test","system","user","role"],props:{label:function(e){return e.meta.title}}},group:{list:[],checked:[],props:{}},type:{list:[],checked:[],props:{}},dashboard:"0",dashboardOptions:[{value:"0",label:"数据统计",views:"stats"},{value:"1",label:"工作台",views:"work"}]}},mounted:function(){this.getMenu(),this.getGroup(),this.getType()},methods:{open:function(){this.visible=!0},submit:function(){var e=this;this.isSaveing=!0,setTimeout((function(){e.isSaveing=!1,e.visible=!1,e.$message.success("操作成功"),e.$emit("success")}),1e3)},getMenu:function(){var e=this;return Object(b.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.system.menu.list.get();case 2:n=t.sent,e.menu.list=n.data;case 4:case"end":return t.stop()}}),t)})))()},getGroup:function(){this.group.list=[{label:"JL00"},{label:"LP01"},{label:"LP07"},{label:"SL01"},{label:"TL06"},{label:"TL09"},{label:"YP07"}]},getType:function(){this.type.list=[{label:"原料采购"},{label:"厂内互供"},{label:"炼销订单"},{label:"化工统销订单"},{label:"移库单"},{label:"自销订单"}]}}}),f=(n("6383"),n("6b0d"));const O=n.n(f)()(p,[["render",function(e,t,n,b,p,f){var O=Object(o.resolveComponent)("el-tree"),m=Object(o.resolveComponent)("el-tab-pane"),j=Object(o.resolveComponent)("el-option"),h=Object(o.resolveComponent)("el-select"),v=Object(o.resolveComponent)("el-form-item"),k=Object(o.resolveComponent)("el-form"),w=Object(o.resolveComponent)("el-tabs"),g=Object(o.resolveComponent)("el-button"),y=Object(o.resolveComponent)("el-dialog");return Object(o.openBlock)(),Object(o.createBlock)(y,{title:"角色权限设置",modelValue:p.visible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.visible=e}),width:500,"destroy-on-close":"",onClosed:t[4]||(t[4]=function(t){return e.$emit("closed")})},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(g,{onClick:t[1]||(t[1]=function(e){return p.visible=!1})},{default:Object(o.withCtx)((function(){return[u]})),_:1}),Object(o.createVNode)(g,{type:"primary",loading:p.isSaveing,onClick:t[2]||(t[2]=function(e){return f.submit()})},{default:Object(o.withCtx)((function(){return[d]})),_:1},8,["loading"])]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{"tab-position":"top"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{label:"菜单权限"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",c,[Object(o.createVNode)(O,{ref:"menu","node-key":"name",data:p.menu.list,"default-checked-keys":p.menu.checked,props:p.menu.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(o.createVNode)(m,{label:"部门权限"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",l,[Object(o.createVNode)(O,{ref:"group","node-key":"name",data:p.group.list,"default-checked-keys":p.group.checked,props:p.group.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(o.createVNode)(m,{label:"类型权限"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",a,[Object(o.createVNode)(O,{ref:"type","node-key":"name",data:p.type.list,"default-checked-keys":p.type.checked,props:p.type.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(o.createVNode)(m,{label:"控制台"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(k,{"label-width":"100px","label-position":"left"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,{label:"控制台视图"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{modelValue:p.dashboard,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.dashboard=e}),placeholder:"请选择"},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createElementBlock)(o.Fragment,null,Object(o.renderList)(p.dashboardOptions,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(j,{key:e.value,label:e.label,value:e.value},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("span",r,Object(o.toDisplayString)(e.label),1),Object(o.createElementVNode)("span",i,Object(o.toDisplayString)(e.views),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"]),s]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}],["__scopeId","data-v-fcd309be"]]);t.default=O}}]);