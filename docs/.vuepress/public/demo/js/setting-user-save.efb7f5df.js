(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-user-save"],{"113d":function(e,t,r){"use strict";r.r(t);r("b0c0");var o=r("7a23"),a={key:0,class:"el-form-item-msg"};var n=r("1da1"),u=(r("96cf"),{props:{mode:{type:String,default:"add"}},data:function(){var e=this;return{uploadUrl:this.$API.demo.upload.url,form:{id:"",userName:"",avatar:"",name:"",group:""},rules:{avatar:[{required:!0,message:"请上传头像"}],userName:[{required:!0,message:"请输入登录账号"}],name:[{required:!0,message:"请输入真实姓名"}],password:[{required:!0,message:"请输入登录密码"},{validator:function(){""!==e.form.password2&&e.$refs.dialogForm.validateField("password2")}}],password2:[{required:!0,message:"请再次输入密码"},{validator:function(t,r){t!==e.form.password&&r(new Error("两次输入密码不一致!"))}}],group:[{required:!0,message:"请选择所属角色"}]},groups:[],groupsProps:{value:"id",multiple:!0,checkStrictly:!0}}},mounted:function(){"add"!=this.mode&&(this.rules.password=[],this.rules.password2=[]),this.getGroup()},methods:{getGroup:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.role.select.get();case 2:r=t.sent,e.groups=r.data;case 4:case"end":return t.stop()}}),t)})))()},submit:function(e){var t=this;this.$refs.dialogForm.validate((function(r){if(!r)return!1;e(t.form)}))},setData:function(e){this.form.id=e.id,this.form.userName=e.userName,this.form.avatar=e.avatar,this.form.name=e.name,this.form.group=e.group}},render:function(e,t,r,n,u,l){var c=Object(o.resolveComponent)("sc-upload"),d=Object(o.resolveComponent)("el-form-item"),s=Object(o.resolveComponent)("el-col"),i=Object(o.resolveComponent)("el-row"),m=Object(o.resolveComponent)("el-input"),p=Object(o.resolveComponent)("el-cascader"),f=Object(o.resolveComponent)("el-form");return Object(o.openBlock)(),Object(o.createBlock)(f,{model:u.form,rules:u.rules,disabled:"show"==r.mode,ref:"dialogForm","label-width":"80px","label-position":"top"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"头像",prop:"avatar"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(c,{modelValue:u.form.avatar,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.form.avatar=e}),title:"上传头像",action:u.uploadUrl},null,8,["modelValue","action"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(i,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"登录账号",prop:"userName"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:u.form.userName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.form.userName=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"姓名",prop:"name"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:u.form.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return u.form.name=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(i,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"登录密码",prop:"password"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:u.form.password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return u.form.password=e}),clearable:""},null,8,["modelValue"]),"edit"==r.mode?(Object(o.openBlock)(),Object(o.createBlock)("div",a,"如不修改密码，可为空")):Object(o.createCommentVNode)("",!0)]})),_:1})]})),_:1}),Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"确认密码",prop:"password2"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{modelValue:u.form.password2,"onUpdate:modelValue":t[5]||(t[5]=function(e){return u.form.password2=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(i,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{label:"所属角色",prop:"group"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{modelValue:u.form.group,"onUpdate:modelValue":t[6]||(t[6]=function(e){return u.form.group=e}),options:u.groups,props:u.groupsProps,"show-all-levels":!1,clearable:""},null,8,["modelValue","options","props"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules","disabled"])}});t.default=u}}]);