(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b85e74c8"],{"454f":function(t,e,a){a("46a7");var r=a("584a").Object;t.exports=function(t,e,a){return r.defineProperty(t,e,a)}},"46a7":function(t,e,a){var r=a("63b6");r(r.S+r.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"54b5":function(t,e,a){"use strict";var r=a("8adc"),l=a.n(r);l.a},"85f2":function(t,e,a){t.exports=a("454f")},"8adc":function(t,e,a){},bd86:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("85f2"),l=a.n(r);function o(t,e,a){return e in t?l()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},e0a5:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n}));var r=a("b775");function l(t){return Object(r["a"])({url:"/ci/editCiCompanyLoan",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/ci/findCiCompanyLoanList",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/ci/getCiCompanyLoanById?id=".concat(t),method:"post"})}},f034:function(t,e,a){"use strict";a.r(e);var r,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"wscn-http404-container6"},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.ruleForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"贷款期限",prop:"loanTerm"}},[a("el-select",{attrs:{placeholder:"状态"},model:{value:t.ruleForm.loanTerm,callback:function(e){t.$set(t.ruleForm,"loanTerm",e)},expression:"ruleForm.loanTerm"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"1个月",value:"1"}}),a("el-option",{attrs:{label:"2个月",value:"2"}}),a("el-option",{attrs:{label:"3个月",value:"3"}}),a("el-option",{attrs:{label:"4个月",value:"4"}}),a("el-option",{attrs:{label:"5个月",value:"5"}}),a("el-option",{attrs:{label:"6个月",value:"6"}})],1)],1),a("el-form-item",{attrs:{label:"贷款状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"状态"},model:{value:t.ruleForm.status,callback:function(e){t.$set(t.ruleForm,"status",e)},expression:"ruleForm.status"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"审核中",value:"1"}}),a("el-option",{attrs:{label:"已终止",value:"2"}}),a("el-option",{attrs:{label:"放款中",value:"3"}}),a("el-option",{attrs:{label:"未结清",value:"4"}}),a("el-option",{attrs:{label:"已逾期",value:"5"}}),a("el-option",{attrs:{label:"已结清",value:"6"}}),a("el-option",{attrs:{label:"还款中",value:"7"}})],1)],1),a("el-form-item",[a("div",{staticClass:"submit-btn",on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("查询")])])],1),a("el-button",{staticStyle:{float:"right"},attrs:{type:"text"}},[a("router-link",{attrs:{to:"/registerEnd"}},[t._v("返回")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"loanNo",label:"货款编号",width:"250"}}),a("el-table-column",{attrs:{prop:"contactName",label:"店铺名称",width:"280"}}),a("el-table-column",{attrs:{prop:"loanTerm",label:"贷款期限（月）",width:"120"}}),a("el-table-column",{attrs:{prop:"loanAmount",label:"贷款金额（元）",width:"180"}}),a("el-table-column",{attrs:{prop:"applyTime",label:"申请时间",width:"",formatter:t.dateFormat}}),a("el-table-column",{attrs:{prop:"status",formatter:t.statusText,label:"贷款状态",width:""}}),a("el-table-column",{attrs:{prop:"name",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.customerInsureDetails(e.row)}}},[t._v("\n                        详情\n                    ")])]}}])})],1),a("div",{staticClass:"pageDown"},[a("el-pagination",{attrs:{"current-page":t.ruleForm.pageNum,"page-sizes":[10,20,30,50],"page-size":t.ruleForm.pageSize,layout:t.tablePageFoot,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],n=a("bd86"),u=a("c1df"),s=a.n(u),i=a("e0a5"),c={data:function(){return{tablePageFoot:"total, sizes, prev, pager, next, jumper",tableData:[],total:0,ruleForm:{pageNum:1,pageSize:10,status:"",loanTerm:""},rules:{}}},computed:{},created:function(){this.fetchData(),document.body.clientWidth<780?this.tablePageFoot="pager":this.tablePageFoot="total, sizes, prev, pager, next, jumper"},methods:(r={fetchData:function(){var t=this;Object(i["b"])(this.ruleForm).then((function(e){t.tableData=e.data.list,t.total=e.data.total})).catch((function(e){t.$message.error(e.msg)}))},handleSizeChange:function(t){this.ruleForm.pageSize=t,this.ruleForm.pageNum=1,this.fetchData()},handleCurrentChange:function(t){this.ruleForm.pageNum=t,this.fetchData()},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.ruleForm.time&&e.ruleForm.time.length>0?(e.ruleForm.applyStartTime=e.ruleForm.time[0],e.ruleForm.applyEndTime=e.ruleForm.time[1]):(e.ruleForm.applyStartTime="",e.ruleForm.applyEndTime=""),e.ruleForm.pageNum=1,e.fetchData()}))},resetForm:function(t){this.$refs[t].resetFields()},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":s()(a).format("YYYY-MM-DD HH:mm:ss")},statusText:function(t,e){return formatterColumn(t.status)},customerInsureDetails:function(t){this.$router.push({path:"/loanDetails",query:{id:t.id,productId:t.productId}})}},Object(n["a"])(r,"statusText",(function(t){return 1==t.status?"审核中":2==t.status?"已终止":3==t.status?"放款中":4==t.status?"未结清":5==t.status?"已逾期":6==t.status?"已结清":7==t.status?"还款中":void 0})),Object(n["a"])(r,"dateFormat",(function(t,e){var a=t[e.property];return void 0==a?"":s()(a).format("YYYY-MM-DD HH:mm:ss")})),r)},m=c,p=(a("54b5"),a("2877")),d=Object(p["a"])(m,l,o,!1,null,null,null);e["default"]=d.exports}}]);