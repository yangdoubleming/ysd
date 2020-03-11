<template>
    <div class="wrap">
        <div class="wrap-step">
            历史记录<span style="color: #9C9C9C" v-show="!isTable"> > <span style="color: #182B38">详情</span></span>
        </div>
        <div style="padding: 30px;overflow: hidden;" v-show="isTable">
            <el-form :inline="true" :model="ruleForm" class="search-form">
                <el-form-item>
                      <el-select v-model="ruleForm.status" placeholder="全部订单状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="已终止" value="2"></el-option>
                        <el-option label="放款中" value="3"></el-option>
                        <el-option label="未结清" value="4"></el-option>
                        <el-option label="已逾期" value="5"></el-option>
                        <el-option label="已结清" value="6"></el-option>
                        <el-option label="还款中" value="7"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-date-picker
                        v-model="ruleForm.searchWrapTime"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button style="background: #E51E5F;color: #fff;border: none;" @click="fetchData">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table
                :data="tableData"
                border>
                <el-table-column
                    fixed
                    prop="loanNo"
                    label="业务编号">
                </el-table-column>
                <el-table-column
                  
                    label="产品名称">
                    <template>
                        <span>跨运宝</span>
                     </template> 
                </el-table-column>
                <el-table-column
                    prop="loanAmount"
                    label="融资金额（元）">
                </el-table-column>
                <el-table-column
                    prop="applyTime"
                    label="申请时间"
                    :formatter="dateFormat">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="订单状态"
                    :formatter="statusText">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="60px">
                <template slot-scope="scope">
                    <el-button @click="customerInsureDetails(scope.row)" type="text" size="small">详情</el-button>
                </template>
                </el-table-column>
            </el-table>
           <!-- 工具条 -->
            <div class="pageDown">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="ruleForm.pageNum"
                    :page-sizes="[10, 20, 30, 50]"
                    :page-size="ruleForm.pageSize"
                    :layout="tablePageFoot"
                    :total="total">
                </el-pagination>
            </div>
        </div>
        <div v-show="!isTable" style="padding: 30px;overflow: hidden;">
            <el-button type="text" @click="isTable = !isTable"><i class="el-icon-back"></i> 返回</el-button>
                <div class="detail-wrap">          
                    <span class="title">业务编号</span>
                    <span class="value" v-text="details.loanNo"></span>
                    <span class="title">还款方式</span>
                    <span class="value">--</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">产品类型</span>
                    <span class="value">{{details.loanTerm}}天</span>
                    <span class="title">还款期限</span>
                    <span class="value">{{details.loanTerm}}天</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">业务类型</span>
                    <span class="value">--</span>
                    <span class="title">业务状态</span>
                    <span class="value">{{statusText(details)}}</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">融资金额（元)</span>
                    <span class="value" v-text="details.loanAmount"></span>
                    <span class="title">未还本金（元）</span>
                    <span class="value" v-text="details.outstandingPrincipal"></span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">申请时间</span>
                    <span class="value">{{changeDate(details.createTime)}}</span>
                    <span class="title">逾期金额（元）</span>
                    <span class="value">--</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">放款时间</span>
                    <span class="value">{{changeDate(details.loanTime)}}</span>
                    <span class="title">逾期罚息（元）</span>
                    <span class="value">--</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">日利率</span>
                    <span class="value" v-text="details.loanRate"></span>
                    <span class="title">第1个实际还款日期</span>
                    <span class="value">--</span>                  
                </div>
                <div class="detail-wrap">          
                    <span class="title">保费费率</span>
                    <span class="value" v-text="details.insuranceRate"></span>
                    <span class="title">第1个实际还款本息</span>
                    <span class="value">--</span>                  
                </div>
                <div class="detail-wrap" style="border-bottom:  1px solid #D9D6D5">          
                    <span class="title">实际到账金额</span>
                    <span class="value">--</span>
                    <span class="title">使用支付渠道</span>
                    <span class="value">--</span>                  
                </div>


        </div>
    </div>
</template>
<style scoped>
.wrap{
    width: 818px;
    border: 1px solid #E5E5E5;
}
.wrap-step{
    padding: 27px 30px; 
    color: #182B38;
    border-bottom: 1px solid #E5E5E5;   
    font-size: 18px;
}
.pageDown{
    float: right;
    margin-top: 15px;
}
.detail-wrap{
    display: flex;
    border: 1px solid #E5E5E5;
    border-bottom: 0;
    font-size: 14px;
    color: #182B38;
}
.detail-wrap span:last-child{
    border-right: 0
}
.title, .value{
    padding: 13px 0;
    padding-left: 20px;
    border-right: 1px solid #E5E5E5;
}
.title{
    width:20%;
    background: #FCFCFE;
}
.value{
    width:30%;
}
</style>
<script>
import moment from 'moment'
import { findCiCompanyLoanList, getCiCompanyLoanById } from '@/api/register'
export default {
    data() {
        return {
            isTable: true,
            tablePageFoot:'total, sizes, prev, pager, next, jumper',
            tableData: [],
            total:0,
            ruleForm: {
                pageNum: 1,
                pageSize: 10,
                status: "",
                loanTerm: "",
                searchWrapTime: ''
            },
            details: {}
        }
    },
   created() {
        this.fetchData()
        if(document.body.clientWidth<780){
            this.tablePageFoot = "pager"
        }else{
            this.tablePageFoot = 'total, sizes, prev, pager, next, jumper'
        }
    },
    methods: {
        fetchData() {
            console.log(this.ruleForm)
            findCiCompanyLoanList(this.ruleForm).then(response => {
                this.tableData = response.data.list
                this.total = response.data.total
            }).catch(err=>{
                this.$message.error(err.msg);
            })
        },
        handleSizeChange(val) {
            this.ruleForm.pageSize = val
            this.ruleForm.pageNum = 1
            this.fetchData()
        },
        handleCurrentChange(val) {
            this.ruleForm.pageNum = val
            this.fetchData()
        },
        //时间格式化
        dateFormat(row, column) {
            var date = row[column.property];
              if (date == undefined) {
                return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
        },
        changeDate(date) {
            if (!date) return '--'
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
        },
        statusText(row){
            if(row.status == 1){
                return '审核中'
            }else if(row.status == 2){
                return '已终止'
            }else if(row.status == 3){
                return '放款中'
            }else if(row.status == 4){
                return '未结清'
            }else if(row.status == 5){
                return '已逾期'
            }else if(row.status == 6){
                return '已结清'
            }else if(row.status == 7){
                return '还款中'
            }
        },
        customerInsureDetails(row){
              getCiCompanyLoanById(row.id).then(response => {
                  this.details = response.data
                  this.isTable = !this.isTable
                  console.log(this.details)

              }).catch(err=>{
                  this.$message.error(err.msg)
              })
        },
    }
}
</script>