<template>
  <section>
    <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
            <span>产品信息</span>
        </div>
        <div class="text item">
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">本人期望贷款金额（人民币）：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">产品类型：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">贷款期限：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">合作银行：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">银行日利率：xx%</span></div></el-col>
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
                <el-col :span="8"><div class=""><span class="bg-purple">委托人姓名：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">委托人手机号：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">委托人身份证号：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">委托人邮箱：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">企业授权委托书：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">近一年总销售额：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">退货率：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">企业名称：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">统一社会信用代码：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">营业执照：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">法人姓名：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">法人身份证号：</span></div></el-col>
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
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">营业执照副本：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">开户许可证：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">最新公司章程：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">财务报表：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">资金流水：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">企业国税纳税证明：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">销售量明细：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">企业征信报告：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">供应商合同和发票：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">公司及实控人介绍：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">历史物流打款汇总及流水：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">香港公司注册信息：</span></div></el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top:5px;">
        <div slot="header" class="clearfix">
            <span>个人文件</span>
        </div>
        <div class="text item">
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">法定代表人身份证正反面：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">配偶身份证正反面：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">法人代表房产证明：</span></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="8"><div class=""><span class="bg-purple">法人征信报告：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">法人配偶征信报告：</span></div></el-col>
                <el-col :span="8"><div class=""><span class="bg-purple">法人代表及配偶的担保书：</span></div></el-col>
            </el-row>
        </div>
    </el-card>
    <p style="color: #EB105C;text-align: center;margin-left: 70px;">提示：1、提交申请后24小时内会有线下人员与您取得联系，请保持手机畅通</p>
    <p style="color: #EB105C;text-align: center;margin-left: 70px;">2、当前仅为线上提交资料流程，不会产生任何费用</p>
    <div class="bottom">
        <div class="bottom-word">
            <el-checkbox v-model="checkStatus" style="color:black;margin-bottom:15px;">我已阅读并同意<a style="color:red;cursor:pointer;" href="./index_files/授权书.pdf" target="_blank" >《数据授权协议》《豆沙包服务协议》</a></el-checkbox>
            <div class="submit-btn" style="margin-bottom:30px;" @click="jump">提交</div>
        </div>
    </div>
  </section>
</template>

<script>
    export default {
        data() {
           return {
             details:{},
             activeName2:'first'
           }
        },
        computed: {
            
        },
        mounted(){

        },
        methods: {
          handleClick(){

          },
        }
    }      
</script>

<style>
 .bottom{
       width: 100%;
       height: 200px;
   }
   .bottom-word{
      width: 300px;
      margin: 30px auto;
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