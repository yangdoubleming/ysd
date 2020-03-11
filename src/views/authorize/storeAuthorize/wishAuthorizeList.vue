<template>
    <section>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>wish授权店铺列表：</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="goBack">返回</el-button>
            </div>
            <div class="content">
                <el-table :data="authShopAll" style="width: 100%" v-loading="loading"
                element-loading-text="加载中"
                element-loading-spinner="el-icon-loading">
                    <el-table-column prop="shopName" label="店铺名称" width="180"></el-table-column>
                    <el-table-column prop="sellerIdentifier" label="卖家编号" width="280"></el-table-column>
                    <el-table-column prop="mwsToken" label="授权码" width="380"></el-table-column>
                    <el-table-column prop="createAt" label="授权日期" width="280" :formatter="dateFormat"></el-table-column>
                    <el-table-column prop="status" label="授权状态" :formatter="statusText"></el-table-column>
                </el-table>
            </div>
        </el-card>
    </section>
</template>

<script>
    import { showWishShop  } from '@/api/authorize'
    import moment from 'moment'

    export default {
        data() {
            return {
                authShopAll:[],
                loading:false
            };
        },
        created(){
            // 获取授权店铺
            this.showWishShop()
        },
        methods: {
            showWishShop(){
                this.loading = true
                showWishShop().then(reslut=>{
                   this.authShopAll = reslut.data
                   this.loading = false
               }).catch(err=>{
                   this.$message.warning(err.msg)
                   this.loading = false
               })
            },
            statusText(row, column){
                if(row.status=='0'){
                    return '已授权'
                }else{
                    return '未授权'
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
            goBack(){
                this.$router.go(-1)
            }
        }
    };
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

    .box-card {
        width: 90%;
        margin: 50px auto;
    }
    .linkWord{
        color:#409EFF;
        text-align:center;
        display: block;
        margin-bottom: 20px;
    }
</style>