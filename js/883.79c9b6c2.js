"use strict";(self["webpackChunkshenlan_tool"]=self["webpackChunkshenlan_tool"]||[]).push([[883],{14883:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("Card",{staticClass:"sl-card"},[t("div",{attrs:{slot:"title"},slot:"title"},[t("p",[e._v("对比")])]),t("div",{attrs:{slot:"extra"},slot:"extra"},[t("Button",{staticClass:"sl-margin-right-10",attrs:{type:"primary"},on:{click:function(t){return e.setCode(0)}}},[e._v("oldCode")]),t("Button",{attrs:{type:"primary"},on:{click:function(t){return e.setCode(1)}}},[e._v("newCode")])],1),t("div",{staticClass:"code-diff-content"},[t("code-diff",{attrs:{"old-string":e.oldCode.code,"new-string":e.newCode.code,"output-format":"side-by-side"}})],1)]),t("com-code-drawer",{ref:"comOldCode",attrs:{title:e.oldCode.title,placement:e.oldCode.placement},on:{onChange:e.oldCodeChange}}),t("com-code-drawer",{ref:"comNewCode",attrs:{title:e.newCode.title,placement:e.newCode.placement},on:{onChange:e.newCodeChange}})],1)},a=[],s=function(){var e=this,t=e._self._c;return t("div",[t("Drawer",{attrs:{title:e.title,placement:e.placement,width:"40%"},model:{value:e.drawer.show,callback:function(t){e.$set(e.drawer,"show",t)},expression:"drawer.show"}},[t("Input",{attrs:{type:"textarea",placeholder:"输入代码",autosize:e.autosize},on:{"on-change":e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},d=[],l={name:"ComCodeDrawer",components:{},mixins:[],props:{title:{type:String,default:""},placement:{type:String,default:"right"}},data(){return{drawer:{show:!1},value:"",autosize:{minRows:6,maxRows:26}}},computed:{},watch:{},beforeDestroy(){},mounted(){this.$nextTick((()=>{}))},methods:{show(){this.drawer.show=!0},onChange(){this.$emit("onChange",this.value)}}},r=l,i=o(43736),c=(0,i.Z)(r,s,d,!1,null,"baad2c5c",null),u=c.exports,C=u,h={components:{ComCodeDrawer:C},mixins:[],inject:["reload"],data(){return{oldCode:{title:"oldCode",placement:"left",code:""},newCode:{title:"newCode",placement:"right",code:""},split1:"400px",editorData:null,language:"json"}},watch:{},beforeDestroy(){},mounted(){this.$nextTick((()=>{}))},activated(){},methods:{setCode(e){e?this.$refs.comNewCode.show():this.$refs.comOldCode.show()},oldCodeChange(e){this.oldCode.code=e},newCodeChange(e){this.newCode.code=e}}},w=h,m=(0,i.Z)(w,n,a,!1,null,"4a8e550c",null),p=m.exports}}]);