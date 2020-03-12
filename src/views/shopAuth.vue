<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <div class="count-box">
                <div class="left">
                    <div class="shop">我的店铺</div>
                    <div class="num-box">
                        <div class="box">
                            <div class="word">店铺数量
                            </div>
                            <div class="num">{{shopInfo.shopCount||0}}</div>
                        </div>
                        <div class="box">
                            <div class="word">已授权店铺</div>
                            <div class="num">{{shopInfo.volumeAll||0}}</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="shop">销售额</div>
                    <div class="num-box">
                        <div class="box">
                            <div class="word">年销售额
                            </div>
                            <div class="num">0<span>万</span></div>
                        </div>
                        <div class="box">
                            <div class="word">可收款金额
                            </div>
                            <div class="num">0<span>万</span></div>
                        </div>
                        <div class="box">
                            <el-button type="primary" size="mini" icon="el-icon-upload2">提升额度</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin-bottom:20px;"><el-alert title="小提示：绑定的店铺越多、年销售额越高，授信额度及通过率都会显著提高" type="success" show-icon></el-alert></div>
                <el-card class="box-card" shadow="never">
                        <el-table
                            ref="multipleTable"
                            :data="tableDataA"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column align="center" label="店铺名称" width="140">
                                <template slot-scope="scope">{{ scope.row.shopName }}</template>
                            </el-table-column>
                            <el-table-column align="center" prop="type" label="平台" width="120"></el-table-column>
                            <el-table-column align="center" prop="marketPlaceId" label="站点" show-overflow-tooltip></el-table-column>
                            <el-table-column align="center" prop="d" label="授权状态" show-overflow-tooltip></el-table-column>
                            <el-table-column align="center" prop="e" label="销售额" show-overflow-tooltip></el-table-column>
                            <el-table-column align="center" prop="loanOperationTime" label="可收款金额" :formatter="dateFormat" show-overflow-tooltip></el-table-column>
                            <el-table-column align="center" prop="address" label="操作" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <el-button
                                        @click="deleteRow(scope.row.id)"
                                        type="text"
                                        size="small">
                                        查看
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="btn-box">
                            <router-link to="/businessInfo"><div class="btn2" @click="next"> 上一步</div></router-link>
                            <div class="btn" @click="next"> 下一步</div>
                        </div>
                </el-card>
                
            </div>
    </section>
</template>

<script>
import Head from './layout/head'
import moment from 'moment'
import { shopInfo, getShopList, shopCredit } from '@/api/application'
export default {
  components: {
    Head,              // 步骤条
  },
  data() {
    return {
            shopInfo:{
                userId:'',     //用户id
                platformId:'',     //平台id
                platform:'',     //平台名称
                shopCount:'',     //店铺数量
                volumeAll:'',     //总销售额/单位元
                volumeMonthAverage:'',     //月均销售额/单位元
                refundAll:'',     //总退款额/单位元
                refundMonthAverage:'',     //月均退款额/单位元
            },
            activeName:'first',
            num:1,
            tableDataA: [],
            tableDataB: [],
            tableDataC: [],
            multipleSelection: [],
            submitForm:{
                ids:[],
                productId:''
            }
        }
    },
    computed: {
    },
    mounted(){
        // 获取店铺信息
        shopInfo().then(res => {
            this.loading = false
            this.bankList = res.data.list
        }).catch(err=>{
            this.loading = false
            this.$message.error(err.msg)
        })
        this.shouxin(0)
    },
    methods: {
        handleClick(tab, event) {
            if(this.activeName=='first'){
                this.shouxin(0)
            }else if(this.activeName=='second'){
                this.shouxin(1)
            }else if(this.activeName=='third'){
                this.shouxin(2)
            }
        },
        shouxin(status){
            // 店铺列表（授信）
            getShopList({status:status,productId:JSON.parse(localStorage.getItem('loanFormInfo')).productId}).then(res => {
                this.loading = false
                if(this.activeName=='first'){
                    this.tableDataA = res.data.list
                }else if(this.activeName=='second'){
                    this.tableDataB = res.data.list
                }else if(this.activeName=='third'){
                    this.tableDataC = res.data.list
                }
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        },
        deleteRow(id){
            this.$router.push({path: `/shopDetails?shopId=${id}`})
        },
        jump(){
            this.$router.push({path: '/authorize'})
        },
        next(){
            this.$router.push({path: '/supplyInfo'})
            // if(this.submitForm.ids.length<=0){
            //     this.$message.warning("请先勾选店铺")
            //     return
            // }
            // this.submitForm.productId = JSON.parse(localStorage.getItem('loanFormInfo')).productId
            // shopCredit(this.submitForm).then(res => {
            //     this.loading = false
            //     this.$message.success(res.msg)
            //     this.$router.push({path: '/supplyInfo'})
            // }).catch(err=>{
            //     this.loading = false
            //     this.$message.error(err.msg)
            // })
        },
        handleSelectionChange(val) {
            this.submitForm.ids = val.map(element => element.id);
            this.multipleSelection = val;
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
<style rel="stylesheet/scss" lang="scss" scoped>
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
        .wrap {
            width: 818px;
            border: 1px solid #E5E5E5;
        }
        .el-tabs__item{
            font-size: 13px;
        }
        .count-box{
            width: 100%;
            margin: 30px auto;
            overflow: hidden;
            .left{
                width: 400px;
                height: 150px;
                background-color: white;
                float: left;
                .shop{
                    font-size: 16px;
                    margin: 15px;
                }
                .num-box{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 16px;
                    .box{
                        .num{
                            font-size: 20px;
                            text-align: center;
                            margin-top: 12px;
                        }
                        .word{
                            font-size: 14px;
                            color: #5f5a59;
                        }
                    }
                }
            }
            .right{
                width: 780px;
                height: 150px;
                background-color: white;
                float: right;
                .shop{
                    font-size: 16px;
                    margin: 15px;
                }
                .num-box{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 16px;
                    .box{
                        .num{
                            font-size: 20px;
                            text-align: center;
                            margin-top: 12px;
                        }
                        .word{
                            font-size: 14px;
                            color: #5f5a59;
                        }
                    }
                }
            }
        }
        .shop-list{
            background-color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .tab-box{
                width: 100%;
                padding: 20px;
            }
        }
        
        .btn{
            display: block;
            cursor: pointer;
            width: 150px;
            height: 46px;
            line-height: 46px;
            text-align: center;
            background: #E51E5F;
            color: #fff;
            border: 0;
            border-radius: 6px;
            margin: 20px auto;
        }
        .btn2{
    width: 150px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    border:1px solid #9C9D9C;
    color: #9C9D9C;
    background: white;
    border-radius: 6px;
    cursor: pointer;
}
        .btn-box{
            width: 320px;
            margin: 0 auto;
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>

