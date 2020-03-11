<template>
    <section>
        <!-- 表格 -->
        <el-table :data="tableData" border v-loading="listLoading" element-loading-text="加载中" style="width: 95%;margin:30px auto;">
            <el-table-column align='center' prop="orderId" label="平台订单号" width="200" :formatter="textChange">
                <template slot-scope="scope">
                    <el-button
                        @click="userInfoDetails('dsbEcommerceOrderBase',scope.row)"
                        type="text"
                        size="small">
                        {{scope.row.orderId}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column align='center' prop="platformName" label="平台" width="120"></el-table-column>
            <el-table-column align='center' prop="itemsCount" label="数量"> </el-table-column>
            <el-table-column align='center' prop="freightAmount" label="运费（元）">
                <template slot-scope="scope">
                    <span>
                        {{scope.row.freightAmount&&(scope.row.freightAmount).toFixed(2)||'0'}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align='center' prop="" label="币种">人民币</el-table-column>
            <el-table-column align='center' prop="orderAverageStr" label="平均单价（元）" width="120">
                <template slot-scope="scope">
                    <span>
                        {{scope.row.totalAmount&&(scope.row.totalAmount/scope.row.itemsCount).toFixed(2)||'0'}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align='center' prop="totalAmount" label="货值（元）">
                <template slot-scope="scope">
                    <span>
                        {{scope.row.totalAmount&&(scope.row.totalAmount).toFixed(2)||'0'}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align='center' prop="totalAmount" label="总金额（元）">
                <template slot-scope="scope">
                    <span>
                        {{scope.row.totalAmount&&(scope.row.totalAmount+scope.row.freightAmount).toFixed(2)||'0'}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column align='center' prop="orderCreateTime" label="下单时间" width="180" :formatter="dateFormat"> </el-table-column>
            <el-table-column align='center' prop="" label="操作" width="">
                <template slot-scope="scope">
                    <el-button
                        @click="userInfoDetails('dsbEcommerceCommodity',scope.row)"
                        type="text"
                        size="small">
                        商品详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 工具条 -->
        <div class="pageDown" style="margin-left:30px;float:left">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="ruleForm.pageNum"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="ruleForm.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <a target="_blank" style="float:left;color:#409EFF;margin:8px 0 0 25px;" href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260" >ebay Privacy Policy</a>
    </section>
</template>

<script>
    import axios from 'axios'
    import { DETAILS_URL } from '@/utils/config'
    import moment from 'moment'
    import { getUser } from '@/utils/auth' 

    export default {
        data() {
            return {
                tableData: [{}],
                total:0,
                listLoading:false,
                textarea:"",
                ruleForm: {
                    pageNum: 1,
                    pageSize: 10,
                    userId: ''
                },
                rules: {
                },
                options: [],
                loadingYyzz:false,
                imageUrl:'',
                payLinkId:'',
                imgData:''
            }
        },
        computed: {
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.listLoading = true
                this.ruleForm.userId = getUser().userId;
                axios({ 
                    method:"get",
                    url:`${DETAILS_URL}/dsbEcommerceOrderBase/list`,
                    withCredentials: true, 
                    headers:{'Content-Type': 'application/json;charset=UTF-8'},
                    params: this.ruleForm}).then(response=>{
                    if(response.data.code==0){
                        this.tableData = response.data.data.list
                        this.total = response.data.data.total
                        this.listLoading = false
                    }else{
                        this.listLoading = false
                        this.$message.error(response.data.msg)
                    }
                }).catch(error=>{
                    this.listLoading = false
                    this.$message.error('请求返回异常')
                });
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
            textChange(row, column) {
                var data = row[column.property];
                  if (data == undefined) {
                    return "";
                }
                var len=data.length; 
                if(len>30){
                    return data.substring(0,30)+"......";
                }else{
                    return data
                }
            },
            userInfoDetails(type,row){
                let routeUrl;
                if(type=='dsbEcommerceOrderBase'){
                    window.open(`http://fin.dowsure.com/details/${type}?id=${row.id}`)
                }else{
                    window.open(`http://fin.dowsure.com/details/${type}?id=${row.orderId}`)
                }
            },
        }
    }      
</script>

<style>
    
</style>