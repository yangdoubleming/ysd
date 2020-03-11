<template>
  <section>
      <div class="container">
        <Head :activeNum="num"></Head>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>产品信息</span>
            </div>
            <div class="text item">
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">本人期望贷款金额（人民币）：</span>{{loanFormInfo&&loanFormInfo.loanAmount}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">产品类型：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">贷款期限：</span>{{loanFormInfo&&loanFormInfo.loanTerm}}天</div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">合作银行：</span>{{loanFormInfo&&loanFormInfo.loanBank}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">银行日利率：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">银行利息费用：</span></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">合作保险公司：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">保险年利率：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">手续费：</span></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">保险利息费用：</span></div></el-col>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card" shadow="never" style="margin-top:5px;">
            <div slot="header" class="clearfix">
                <span>基本信息</span>
            </div>
            <div class="text item">
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">委托人姓名：</span>{{allInfo.controllerInfo.controllerName}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">委托人手机号：</span>{{allInfo.controllerInfo.controllerTelephone}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">委托人身份证号：</span>{{allInfo.controllerInfo.controllerCard}}</div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">委托人邮箱：</span>{{allInfo.controllerInfo.controllerEmail}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">企业授权委托书：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">近一年总销售额：</span>{{allInfo.enterpriseInfo.salesVolume}}</div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">退货率：</span>{{allInfo.enterpriseInfo.returnRate}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">企业名称：</span>{{allInfo.enterpriseInfo.companyName}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">统一社会信用代码：</span>{{allInfo.enterpriseInfo.creditCode}}</div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">营业执照：</span></div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">法人姓名：</span>{{allInfo.enterpriseInfo.legalPersonName}}</div></el-col>
                    <el-col :span="8"><div class=""><span class="bg-purple">法人身份证号：</span>{{allInfo.enterpriseInfo.idCard}}</div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="8"><div class=""><span class="bg-purple">法人身份证明书：</span></div></el-col>
                </el-row>
            </div>
        </el-card>
        <el-card class="box-card" shadow="never" style="margin-top:5px;">
            <div slot="header" class="clearfix">
                <span>企业文件</span>
            </div>
            <div class="text item">
                <el-col style="margin:20px auto;" :span="8" v-for="(item,index) in listA" :key="index"><div class=""><span class="bg-purple">{{item.name}}<a style="color:#75b9fe;cursor:pointer;margin-right:3px;" v-for="(ite,inde) in item.imgPath" :key="inde" :href="IMG_URL_show+ite" target="_blank" >查看链接</a></span></div></el-col>
            </div>
        </el-card>
        <el-card class="box-card" shadow="never" style="margin-top:5px;">
            <div slot="header" class="clearfix">
                <span>个人文件</span>
            </div>
            <div class="text item">
                <el-col style="margin:20px auto;" :span="8" v-for="(item,index) in listB" :key="index"><div class=""><span class="bg-purple">{{item.name}}<a style="color:#75b9fe;cursor:pointer;margin-right:3px;" v-for="(ite,inde) in item.imgPath" :key="inde" :href="IMG_URL_show+ite" target="_blank" >查看链接</a></span></div></el-col>
            </div>
        </el-card>
        <p style="text-align: center;margin-left: 70px;font-size:14px;margin-top:50px;">提示：1、提交申请后24小时内会有线下人员与您取得联系，请保持手机畅通</p>
        <p style="text-align: center;margin-left: 0px;font-size:14px;">2、当前仅为线上提交资料流程，不会产生任何费用</p>
        <div class="bottom">
            <div class="bottom-word">
                <el-checkbox v-model="checkStatus" style="color:black;margin-bottom:15px;">我已阅读并同意<a style="color:red;cursor:pointer;" href="./index_files/授权书.pdf" target="_blank" >《数据授权协议》《豆沙包服务协议》</a></el-checkbox>
                <el-button type="primary" style="margin-bottom:30px;width:100px" @click="jump" :disabled="disabledStatus" >提&nbsp;&nbsp;&nbsp;交</el-button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
    import Head from './layout/head'
    import { BASE_URL, IMG_URL_show } from '@/utils/config'
    import { getUserDataInfo, submitApplication, getAuthUserBasicInfo } from '@/api/application'
    export default {
        components: {
            Head,              // 步骤条
        },
        data() {
           return {
            details:{},
            activeName2:'first',
            checkStatus:false,
            IMG_URL_show,
            num:4,
            listA:[
                {name:"营业执照副本：",id:0,imgPath:[]},
                {name:"企业国税纳税证明：",id:1,imgPath:[]},
                {name:"最新公司章程：",id:2,imgPath:[]},
                {name:"财务报表：",id:3,imgPath:[]},
                {name:"资金流水：",id:4,imgPath:[]},
                {name:"开户许可证：",id:5,imgPath:[]},
                {name:"销售量明细：",id:6,imgPath:[]},
                {name:"企业征信报告：",id:7,imgPath:[]},
                {name:"供应商合同和发票：",id:8,imgPath:[]},
                {name:"公司及实控人介绍：",id:9,imgPath:[]},
                {name:"历史物流打款汇总及流水：",id:10,imgPath:[]},
                {name:"香港公司注册信息：",id:11,imgPath:[]}
            ],
            listB:[
                {name:"法定代表人身份证正反面：",id:12,imgPath:[]},
                {name:"配偶身份证正反面：",id:13,imgPath:[]},
                {name:"法人代表房产证明：",id:14,imgPath:[]},
                {name:"法人征信报告：",id:15,imgPath:[]},
                {name:"法人配偶征信报告：",id:16,imgPath:[]},
                {name:"法人代表及配偶的担保书：",id:17,imgPath:[]},
                {name:"实际控制人身份证正反面：",id:18,imgPath:[]},
                {name:"实际控制人配偶身份证正反面：",id:19,imgPath:[]},
                {name:"实际控制人征信报告：",id:20,imgPath:[]},
                {name:"实际控制人配偶征信报告：",id:21,imgPath:[]},
                {name:"实际控制人所控制企业的担保书：",id:22,imgPath:[]},
                {name:"实际控制人及配偶担保书：",id:23,imgPath:[]},
                {name:"其他有助于提高增信的附件：",id:24,imgPath:[]},
            ],
            loanFormInfo:{
                loanBank:'',
                productId:'',
                loanAmount: '',
                loanRate: '0.33%',
                loanTerm:'',
                interestMode: '',
                purpose:'',
                monthRepaymentDay:'',
                bondAccount:'',
                logistics:'',
            },
            allInfo:{
                enterpriseInfo:{},
                controllerInfo:{},
                loanInfo:{}
            },
            disabledStatus:false
           }
        },
        computed: {
            
        },
        mounted(){
            this.getAuthUserBasicInfo()
            this.loanFormInfo = JSON.parse(localStorage.getItem('loanFormInfo'))
            getUserDataInfo().then(res => {
                this.loading = false
                res.data.forEach((item,index) => {
                    this.listA.forEach((itemA,indexA)=>{
                        if(item.type==itemA.id&&item.documentPath){
                            itemA.imgPath.push(item.documentPath) 
                        }
                    })
                    this.listB.forEach((itemB,indexB)=>{
                        if(item.type==itemB.id&&item.documentPath){
                            itemB.imgPath.push(item.documentPath) 
                        }
                    })
                });
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        },
        methods: {
          handleClick(){
          },
          jump(){
            const loanData = JSON.parse(localStorage.getItem('loanFormInfo'))
            if(!this.checkStatus){
                this.$message.error("请先勾选")
                return
            }
            submitApplication({CiCompanyLoan:loanData}).then(res => {
                this.loading = false
                this.disabledStatus = true
                this.$message.success(res.msg)
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
          },
          getAuthUserBasicInfo(){
            this.loading = true;
            getAuthUserBasicInfo().then(res => {
                this.loading = false
                this.allInfo.enterpriseInfo = res.data.enterpriseInfo || {}
                this.allInfo.controllerInfo = res.data.controllerInfo || {}
                this.allInfo.loanInfo = res.data.loanInfo || {}
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        },
        }
    }      
</script>

<style>
    .el-card {
        border-bottom: none;
        border-left: none;
        border-right: none;
    }
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
        background: white;
    }
    .bottom{
        width: 100%;
    }
    .bottom-word{
        width: 300px;
        margin: 30px auto;
        margin-top: 10px;
    }
    .el-tabs__item{
        font-size: 13px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    .clearfix:before,
    .clearfix:after {
    display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .row-bg {
        margin: 30px 0;
    }

    .box-card {
        /* width: 480px; */
    }
    .bg-purple{
        color:#909399;
    }
</style>