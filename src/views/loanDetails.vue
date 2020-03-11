<template>
  <section>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
          <span>贷款详情</span>
          <el-button style="float: right; padding: 3px 0" type="text"><router-link to="/loanRecords">返回</router-link></el-button>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class=""><span class="bg-purple">贷款编号：</span>{{details.loanNo}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">放款银行：</span>{{details.loanBank}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">电子保单：</span>{{details.electronicPolicy}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">放款时间：</span>{{details.loanTime}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class=""><span class="bg-purple">投保金额（元）：</span>{{details.insuranceMoney}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">申请时间：</span>{{dateFormat(details.applyTime)}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">投保时间：</span>{{dateFormat(details.loanTime)}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">贷款金额（元）：</span>{{details.loanAmount}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class=""><span class="bg-purple">贷款状态：</span>{{statusText(details.status)}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">投保期限（月）：</span>{{null}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">贷款利率：</span>{{details.loanRate}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple">还款周期（月）：</span>{{details.loanTerm}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class=""><span class="bg-purple">未还本金（元）：</span>{{details.outstandingPrincipal}}</div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple"></span></div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple"></span></div></el-col>
        <el-col :span="6"><div class=""><span class="bg-purple"></span></div></el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
    import moment from 'moment'
    import { getCiCompanyLoanById } from '@/api/register'

    export default {
        data() {
            return {
                loading: true,
                details:{},
            }
        },
        computed: {
        },
        created() {
          this.fetchData();
        },
        methods: {
            fetchData(){
              getCiCompanyLoanById(this.$route.query.id).then(response => {
                  this.details = response.data
              }).catch(err=>{
                  this.$message.error(err.msg)
              })
          },
           //时间格式化
            dateFormat(date) {
              if(date){
                return moment(date).format("YYYY-MM-DD HH:mm:ss")
              }else{
                return ''
              }
                
            },
            statusText(status){
                if(status == 1){
                    return '审核中'
                }else if(status == 2){
                    return '已终止'
                }else if(status == 3){
                    return '放款中'
                }else if(status == 4){
                    return '未结清'
                }else if(status == 5){
                    return '已逾期'
                }else if(status == 6){
                    return '已结清'
                }else if(status == 7){
                    return '还款中'
                }
            },
        }
    }      
</script>
<style>
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
/* 
  .box-card {
    width: 95%;
    margin: 30px auto;
  } */
  .bg-purple{
    color:#909399;
  }
</style>