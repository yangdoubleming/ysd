<template>
    <section>
        <div class="authorize-box">
            <div class="up">
                <img :src="amazonLogo" class="up-left">
                <div class="up-right" @click="showAmazonDialog">
                    <span>新增并授权Amazon店铺</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="down">
                <div class="down-left" @click="linkTo('amazonAuthorizeList')">
                    <i class="el-icon-search"></i>
                    <span>查看授权店铺</span>
                </div>
                <div class="down-right">
                    <i class="el-icon-question"></i>
                    <a href="./index_files/amazon.pdf" target="_blank">查看授权帮助</a>
                </div>
            </div>
        </div>
        <el-dialog
            title="amazon-新增店铺并授权"
            :visible.sync="amazonDialogVisible"
            :center="amazonCenter"
            :close-on-click-modal="modelStatus"
            :width="setWidth">
            <a class="linkWord" href="./index_files/amazon.pdf" target="_blank" >查看授权帮助</a>
            <el-form :model="amazonValidateForm" ref="amazonValidateForm" 
                :rules="amazonRules" 
                label-width="120px" 
                v-loading="loading"
                element-loading-text="授权中"
                element-loading-spinner="el-icon-loading">
                <el-form-item label="授权站点" prop="marketPlaceId">
                    <el-select v-model="amazonValidateForm.marketPlaceId" placeholder="请选择授权站点" >
                        <el-option v-for="item in station" :label="item.amazonShop" :value="item.marketPlaceId" :key="item.marketPlaceId" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="店铺名称"  prop="shopName" >
                    <el-input v-model="amazonValidateForm.shopName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="卖家编号"  prop="sellerIdentifier" >
                    <el-input v-model="amazonValidateForm.sellerIdentifier" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="MWS授权令牌"  prop="mwsToken" >
                    <el-input v-model="amazonValidateForm.mwsToken" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitAmazonForm('amazonValidateForm')" style="margin:0">授 权</div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    import { amazonAuthorize, getStation  } from '@/api/authorize'
    import amazonLogo from '@/assets/register/amazon_logo.png'

    export default {
        data() {
            return {
               modelStatus:false,
                setWidth:'520px',
                station:[],
                authShopAll:[],
                loading:false,
                //   amazon授权=====================================================
                amazonDialogVisible: false,
                amazonLogo,
                amazonCenter: true,
                amazonValidateForm: {
                    marketPlaceId: '',
                    shopName:'',
                    sellerIdentifier:'',
                    mwsToken:'',
                },
                amazonRules: {
                    marketPlaceId: [
                        { required: true, message: '请选择授权站点', trigger: 'change' }
                    ],
                    shopName: [
                        { required: true, message: '请输入店铺名称', trigger: 'blur' },
                    ],
                    sellerIdentifier: [
                        { required: true, message: '请输入卖家编号', trigger: 'blur' },
                    ],
                    mwsToken: [
                        { required: true, message: '请输入MWS授权令牌', trigger: 'blur' },
                    ],
                }
            };
        },
        created(){
            // 获取站点，授权店铺
            this.getStation()
        },
        mounted(){
           if(document.body.clientWidth<780){
                this.setWidth = '95%'
            }else{
                this.setWidth = '520px'
            }
        },
        methods: {
            getStation(){
               getStation().then(reslut=>{
                   this.station = reslut.data
               }).catch(err=>{
                   this.$message.error(err.msg)
               }) 
            },
            showAmazonDialog(){
                this.amazonDialogVisible = true
            },
            submitAmazonForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    amazonAuthorize(this.amazonValidateForm).then(result=>{
                        this.$message.success(result.msg)
                        this.loading = false
                        this.amazonDialogVisible = false
                    }).catch(err=>{
                        this.$message.error(err.msg)
                        this.loading = false
                        this.amazonDialogVisible = false
                    })
                } else {
                    this.loading = false
                    this.amazonDialogVisible = false
                }
                });
            },
            linkTo(path){
                this.$router.push({path:path})
            },
            
        }
    };
</script>

<style>
    @import "../store.css";
</style>