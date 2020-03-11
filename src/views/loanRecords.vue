<template>
    <section class="wscn-http404-container6">
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="贷款期限" prop="loanTerm">
                    <el-select v-model="ruleForm.loanTerm" placeholder="状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="1个月" value="1"></el-option>
                        <el-option label="2个月" value="2"></el-option>
                        <el-option label="3个月" value="3"></el-option>
                        <el-option label="4个月" value="4"></el-option>
                        <el-option label="5个月" value="5"></el-option>
                        <el-option label="6个月" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="贷款状态" prop="status">
                    <el-select v-model="ruleForm.status" placeholder="状态">
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
                    <div class="submit-btn" @click="submitForm('ruleForm')">查询</div>
                </el-form-item>
            </el-form>
            <el-button type="text" style="float:right"><router-link to="/registerEnd">返回</router-link></el-button>
		</el-col>

        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="loanNo" label="货款编号" width="250"> </el-table-column>
            <el-table-column prop="contactName" label="店铺名称" width="280"> </el-table-column>
            <el-table-column prop="loanTerm" label="贷款期限（月）" width="120"></el-table-column>
            <el-table-column prop="loanAmount" label="贷款金额（元）" width="180"> </el-table-column>
            <el-table-column prop="applyTime" label="申请时间" width="" :formatter="dateFormat"> </el-table-column>
            <el-table-column prop="status"  :formatter="statusText" label="贷款状态" width=""></el-table-column>
            <el-table-column prop="name" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button
                        @click="customerInsureDetails(scope.row)"
                        type="text"
                        size="small">
                        详情
                    </el-button>
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
    </section>
</template>

<script>
    import moment from 'moment'
   import { findCiCompanyLoanList } from '@/api/register'

    export default {
        data() {
            return {
                tablePageFoot:'total, sizes, prev, pager, next, jumper',
                tableData: [],
                total:0,
                ruleForm: {
                    pageNum: 1,
                    pageSize: 10,
                    status: "",
                    loanTerm: ""
                },
                rules: {
                }
            }
        },
        computed: {
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
            submitForm(formName) {
                const _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(_this.ruleForm.time&&_this.ruleForm.time.length>0){
                            _this.ruleForm.applyStartTime = _this.ruleForm.time[0];
                            _this.ruleForm.applyEndTime = _this.ruleForm.time[1];
                        }else{
                            _this.ruleForm.applyStartTime = '';
                            _this.ruleForm.applyEndTime = '';
                        }
                        _this.ruleForm.pageNum = 1
                        _this.fetchData()

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
             //时间格式化
            dateFormat(row, column) {
                var date = row[column.property];
                  if (date == undefined) {
                    return "";
                }
                return moment(date).format("YYYY-MM-DD HH:mm:ss")
            },
            statusText(row, column){
                return formatterColumn(row.status)
            },
            customerInsureDetails(row){
                this.$router.push({path:'/loanDetails',query: {id:row.id,productId:row.productId}})
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
             //时间格式化
            dateFormat(row, column) {
                var date = row[column.property];
                  if (date == undefined) {
                    return "";
                }
                return moment(date).format("YYYY-MM-DD HH:mm:ss")
            },
        }
    }      
</script>

<style>
.wscn-http404-container6{
  width: 90%;
    margin: 50px auto;
}
.pageDown{
    float: right;
    margin-top: 15px;
}
.demo-form-inline{
    float: left;
}
.submit-btn{
    width: 130px;
    height: 40px;
    background-image: url(./../assets/register/btn-bg.png);
    font-size: 16px;
    color:white;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
</style>