<template>
    <section>
        <div class="container">
            <div class="head">
                <div class="info">
                    <div class="box">
                        <div class="up">
                            <el-button type="primary" plain size="mini">{{shopData.shopDataInfo && shopData.shopDataInfo.platform}}</el-button>
                        </div>
                        <div class="down">{{shopData.shopDataInfo && shopData.shopDataInfo.shopName}}</div>
                    </div>
                    <div class="box">
                        <div class="up">店铺排名</div>
                        <div class="down">{{shopData.shopRank}}</div>
                    </div>
                    <div class="box">
                        <div class="up">年销售额</div>
                        <div class="down">{{shopData.yearAmount}}<span>万</span></div>
                    </div>
                    <div class="box">
                        <div class="up">已授信交易额</div>
                        <div class="down">{{shopData.creditAmount}}<span>万</span></div>
                    </div>
                </div>
            </div>
            <div class="left-con">
                <div class="up">
                    <div style="float:left;font-size:16px;margin:20px 0 0 20px;">关联物流</div>
                    <div style="float:right;">
                        <!-- <el-button size="mini" type="primary" style="float:right;margin:13px 20px 0 0;">去申请</el-button>
                        <div style="margin-right:8px;float:right;margin-top:20px;">可申请运费贷<span>60万</span></div>
                        <div style="float:right; color:#e5e5e5;margin:20px 8px 0 8px;">|</div>
                        <div style="float:right;margin-top:20px;">物流匹配交易额<span>200万</span></div> -->
                    </div>
                </div>
                <div style="margin:20px"><el-alert title="与店铺关联的物流越多，运费贷款额度及通过率越高" type="info" show-icon></el-alert></div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="center" prop="a" label="物流商" width="180"></el-table-column>
                    <el-table-column align="center" prop="b" label="状态" width="180"></el-table-column>
                    <el-table-column align="center" prop="c" label="运费金额"></el-table-column>
                    <el-table-column align="center" prop="d" label="货值"></el-table-column>
                    <el-table-column align="center" prop="e" label="占比"></el-table-column>
                    <el-table-column align="center" prop="" label="操作">
                        <el-button
                            @click.native.prevent="deleteRow"
                            type="text"
                            size="small">
                            查看
                        </el-button>
                    </el-table-column>
                </el-table>
                <!-- <el-button icon="el-icon-plus" style="margin:20px 0 20px 350px;"></el-button> -->
                <div style="width:100%;background:#f5f6f8;height:20px;"></div>
                <div class="up">
                    <div style="float:left;font-size:16px;margin:20px 0 0 20px;">关联收款</div>
                    <div style="float:right;">
                        <!-- <el-button size="mini" type="primary" style="float:right;margin:13px 20px 0 0;">去申请</el-button>
                        <div style="margin-right:8px;float:right;margin-top:20px;">可申请应收贷<span>60万</span></div>
                        <div style="float:right; color:#e5e5e5;margin:20px 8px 0 8px;">|</div>
                        <div style="float:right;margin-top:20px;">收款匹配交易额<span>200万</span></div> -->
                    </div>
                </div>
                <div style="margin:20px"><el-alert title="与店铺关联的物流越多，运费贷款额度及通过率越高" type="info" show-icon></el-alert></div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="center" prop="a" label="收款商" width="180"></el-table-column>
                    <el-table-column align="center" prop="b" label="状态" width="180"></el-table-column>
                    <el-table-column align="center" prop="c" label="收款金额"></el-table-column>
                    <el-table-column align="center" prop="e" label="占比"></el-table-column>
                    <el-table-column align="center" prop="" label="操作">
                        <el-button
                            @click.native.prevent="deleteRow"
                            type="text"
                            size="small">
                            查看
                        </el-button>
                    </el-table-column>
                </el-table>
                <!-- <el-button icon="el-icon-plus" style="margin:20px 0 20px 350px;"></el-button> -->
            </div>
            
            <div class="right-con">
                <div style="font-size:16px;color:#101010;margin:20px 0 0 20px;">贷款信息</div>
                <div style="font-size:12px;color:#101010;margin:10px 0 0 20px;">授信额度/已提取金额</div>
                <div style="font-size:18px;color:#101010;margin:5px 0 0 20px;">{{shopData.yearAmount}}万&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{shopData.creditAmount}}万&nbsp;&nbsp;&nbsp;<el-button type="primary" size="mini" plain>跨运保</el-button></div>
                <div style="font-size:12px;color:#101010;margin:10px 0 0 20px;">贷款编号：&nbsp;&nbsp;&nbsp;<span style="color:#1890ff">DSB235164623133453</span></div>
                <div style="font-size:12px;color:#101010;margin:10px 0 0 20px;">放款方：&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期限：-</div>
                <div style="font-size:12px;color:#101010;margin:10px 0 20px 20px;">状态：&nbsp;&nbsp;&nbsp;<span style="color:#1890ff">-</span></div>
                <div style="width:100%;background:#f5f6f8;height:20px;"></div>
                <div style="font-size:16px;color:#101010;margin:20px 0 0 20px;">授权情况&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" plain>{{shopData.shopSaasInfo&&shopData.shopSaasInfo.status==0?'已授权':'未授权'}}</el-button></div>
                <div style="font-size:12px;color:#101010;margin:10px 0 0 20px;">贷款编号：&nbsp;&nbsp;&nbsp;-</div>
                <div style="font-size:12px;color:#101010;margin:10px 0 0 20px;">放款方：&nbsp;&nbsp;&nbsp;-</div>
                <div style="font-size:12px;color:#101010;margin:10px 0 20px 20px;">状态：&nbsp;&nbsp;&nbsp;<span style="color:#1890ff">-</span></div>
                <div style="width:100%;background:#f5f6f8;height:20px;"></div>
                <div class="left">
                    <div class="shop">订单信息</div>
                    <div class="num-box">
                        <div class="box">
                            <div class="word">订单总数</div>
                            <div class="num">{{0}}万</div>
                        </div>
                        <div class="box">
                            <div class="word">订单总金额</div>
                            <div class="num">{{0}}万</div>
                        </div>
                        <div class="box">
                            <div style="color:#1890ff;font-size:16px;">查看全部</div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn" @click="next">返&nbsp;&nbsp;&nbsp;回</button>
        </div> 
    </section>
</template>

<script>
import { getLoanShopDetails } from '@/api/application'
export default {
  components: {
  },
    data() {
        return {
            tableData: [
                // {
                //     a: '华翰物流',
                //     b: '已关联',
                //     c: '120万',
                //     d: '300万',
                //     e: '50%',
                // },
                // {
                //     a: '华翰物流',
                //     b: '已关联',
                //     c: '120万',
                //     d: '300万',
                //     e: '50%',
                // },
                // {
                //     a: '华翰物流',
                //     b: '已关联',
                //     c: '120万',
                //     d: '300万',
                //     e: '50%',
                // },
            ],
            shopData:{
                totalAmount:'',
                companyLoan:'',
                shopDataInfo:{},
                yearAmount:'',//年销售额
                shopRank: '',//店铺排名
                totalCount: '',//订单总数
                creditAmount: "",//已授信交易额
                shopSaasInfo: {}
            }
        }
    },
    computed: {
    },
    mounted(){
        getLoanShopDetails({shopId:this.$route.query.shopId}).then(res => {
            this.loading = false
            this.shopData = res.data
        }).catch(err=>{
            this.loading = false
            this.$message.error(err.msg)
        })
    },
    methods: {
        deleteRow(){
            this.$router.push({path: '/shopDetails'})
        },
        next(){
            this.$router.push({path: '/shopAuth'})
        }
    }   
}
</script>
<style rel="stylesheet/scss" lang="scss">
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
       .head{
           width:100%;
           height: 80px;
           background-color: white;
           .info{
                width: 800px;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
               .box{
                   .up{
                       text-align: center;
                       font-size: 14px;
                       color: #5f5a59;
                       margin-bottom: 6px;
                   }
                   .down{
                       font-size: 22px;
                       color: #101010;
                   }
               }
           }
       }
       .left-con{
           margin-top: 30px;
           width: 785px;
           float: left;
           background: white;
           overflow: hidden;
           .up{
               overflow: hidden;
               font-size: 14px;
               color: #101010;
           }
       }
       .right-con{
           margin-top: 30px;
           width: 385px;
           float: right;
           background: white;
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
       }
       .btn{
            display: block;
            width: 150px;
            height: 46px;
            line-height: 46px;
            text-align: center;
            background: #E51E5F;
            color: #fff;
            border: 0;
            border-radius: 6px;
            margin: 40px auto;
            clear: both;
            cursor: pointer;
        }
    }
</style>

