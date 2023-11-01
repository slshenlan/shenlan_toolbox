"use strict";(self["webpackChunkshenlan_tool"]=self["webpackChunkshenlan_tool"]||[]).push([[607],{24607:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("Card",{staticClass:"sl-pub-card"},[t("p",{attrs:{slot:"title"},slot:"title"},[e._v("图片转base64")]),t("Button",{directives:[{name:"show",rawName:"v-show",value:e.base64.data,expression:"base64.data"}],attrs:{slot:"extra",type:"primary"},on:{click:e.handleCopyBase64},slot:"extra"},[e._v("复制")]),t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.base64.data,expression:"base64.data"}],staticClass:"card-content base64-data"},[t("Card",{staticClass:"base64-card"},[t("p",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.base64.size))]),t("div",{attrs:{slot:"extra"},slot:"extra"},[t("Button",{attrs:{type:"error"},on:{click:e.handleClean}},[e._v("清空")])],1),t("div",{staticClass:"b-d"},[t("Input",{attrs:{readonly:"",type:"textarea",rows:10},model:{value:e.base64.data,callback:function(t){e.$set(e.base64,"data",t)},expression:"base64.data"}})],1)])],1),t("div",{staticClass:"card-content img-preview"},[e.image.src?t("img",{attrs:{src:e.image.src}}):t("div",[t("sl-upload",{attrs:{"has-border":"",multiple:!1},on:{onToImage:e.handleBeforeUpload}},[t("div",{staticStyle:{padding:"80px 0"}},[t("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t("p",[e._v("点击或者拖拽图片到这里")])],1)])],1)])])],1)],1)},i=[],l=a(44512),n={components:{SlUpload:l.Z},data(){return{image:{src:"",name:"",size:""},base64:{data:"",size:""}}},mounted(){},methods:{handleBeforeUpload(e){let t=e.img,a=this.image;a.src=t.src,a.name=e.fileName,a.size=`${(e.size/1024).toFixed(2)}kb`,this.base64Handle(t)},base64Handle(e){let t=this.base64,a=document.createElement("canvas");a.width=e.width,a.height=e.height;let s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let i=a.toDataURL("image/ipeg",1);t.data=i,t.size=this.getBase64Size(i)},getBase64Size(e){if(e){e=e.split(",")[1].split("=")[0];let t=e.length,a=t-t/8*2;return`${(a/1024).toFixed(2)}kb`}return null},handleCopyBase64(){this.$pub.slBrowserCopyToClipboard(this.base64.data)},handleClean(){this.image.src="",this.base64.data=""}}},o=n,r=a(43736),d=(0,r.Z)(o,s,i,!1,null,null,null),c=d.exports},44512:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",[t("Upload",{staticClass:"sl-upload",class:{border:e.hasBorder},attrs:{accept:e.accept,multiple:e.multiple,type:"drag",action:"","before-upload":e.handleBeforeUpload}},[e._t("default")],2)],1)},i=[],l=a(14836),n={name:"SlUpload",components:{},mixins:[],props:{multiple:{type:Boolean,default:!0},hasBorder:{type:Boolean,default:!1},accept:{type:String,default:l.Z6.join(",")},maxNumber:{type:Number,default:0}},data(){return{}},computed:{},watch:{},beforeDestroy(){},mounted(){this.$nextTick((()=>{}))},methods:{handleBeforeUpload(e){let t=Math.abs(this.maxNumber);return t?this.table.data.length<t?this.handleFileToImage(e):this.$Message.warning(`最多上传${t}张图片`):this.handleFileToImage(e),!1},handleFileToImage(e){(0,l.ci)(e)&&(0,l.yc)(e).then((t=>{t.onload=()=>{let a={img:t,fileName:e.name,size:e.size,type:e.type,width:t.width,height:t.height};this.$emit("onToImage",a)}}))}}},o=n,r=a(43736),d=(0,r.Z)(o,s,i,!1,null,"e557de30",null),c=d.exports,u=c},14836:function(e,t,a){a.d(t,{Z6:function(){return s},ci:function(){return n},sd:function(){return l},yc:function(){return i}});const s=["image/jpeg","image/png","image/webp"],i=e=>new Promise(((t,a)=>{try{let a=new FileReader;a.readAsDataURL(e),a.onload=function(e){var a=new Image;a.src=e.target.result,t(a)}}catch(s){a(s)}})),l=(e,t)=>{t||(t="水印");let a=document.createElement("a");a.setAttribute("href",e.src),a.setAttribute("download","download"),a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},n=e=>s.includes(e.type)}}]);