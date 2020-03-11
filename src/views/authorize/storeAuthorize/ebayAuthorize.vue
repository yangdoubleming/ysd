<template>
    <section>
        <div class="authorize-box">
            <div class="up">
                <img :src="ebayLogo" class="up-left">
                <div class="up-right"  @click="showDhGateDialog">
                    <span>新增并授权ebay店铺</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="down">
                <div class="down-left" @click="linkTo('ebayAuthorizeList')">
                    <i class="el-icon-search"></i>
                    <span>查看授权店铺</span>
                </div>
                <div class="down-right">
                    <i class="el-icon-question"></i>
                    <a href="./index_files/ebay.pdf" target="_blank">查看授权帮助</a>
                </div>
            </div>
        </div>
        <el-dialog
            title="ebay-新增店铺并授权"
            :visible.sync="dhGateDialogVisible"
            :close-on-click-modal="modelStatus"
            :center="dhGateCenter"
            :width="setWidth">
            <a class="linkWord" href="./index_files/ebay.pdf" target="_blank" >查看授权帮助</a>
            <el-form :model="dhGateValidateForm" ref="dhGateValidateForm" 
                :rules="dhGateRules" 
                label-width="120px" 
                v-loading="loading"
                element-loading-text="授权中"
                element-loading-spinner="el-icon-loading">
                
                <el-form-item label="店铺名称"  prop="shopName" >
                    <el-input v-model="dhGateValidateForm.shopName" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="ebay用户名"  prop="account" >
                    <el-input v-model="dhGateValidateForm.account" autocomplete="off"></el-input>
                </el-form-item>
                
                <!-- <el-form-item label=""  prop="code" >
                    <el-button @click="getCode" >授权登录</el-button>
                    <span style="color:red;margin-left:10px">*授权登录完才能成功提交</span>
                </el-form-item> -->
                
                <el-form-item>
                    <div class="submit-btn" @click="submitdhGateForm('dhGateValidateForm')" style="margin:0">授 权</div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    import { getAuthUrl, authorize, ebayAuthUrl } from '@/api/authorize'
    import ebayLogo from '@/assets/register/ebay_logo.png'

    export default {
        data() {
            return {
               ebayLogo,
               modelStatus:false,
                dhGateDialogVisible: false,
                dhGateCenter: true,
                setWidth:'520px',
                loading:false,
                dhGateValidateForm: {
                    account: '',
                    shopName:'',
                    code:'',
                },
                dhGateRules: {
                    shopName: [
                        { required: true, message: '请输入店铺名称', trigger: 'blur' },
                    ],
                    account: [
                        { required: true, message: '请输入ebay用户名', trigger: 'blur' },
                    ]
                }
            };
        },
        created(){
        },
        mounted(){
           if(document.body.clientWidth<780){
                this.setWidth = '95%'
            }else{
                this.setWidth = '520px'
            }
        },
        methods: {
            showDhGateDialog(){
                this.dhGateDialogVisible = true
            },
            getCode(){
                getAuthUrl('ebay').then(result=>{
                    window.open(result.msg)
                }).catch(err=>{
                    this.$message.error(err.msg)
                })
            },
            submitdhGateForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    ebayAuthUrl(this.dhGateValidateForm).then(res => {
                         authorize(this.dhGateValidateForm,'ebay').then(result=>{
                            // this.$message.success(result.msg)
                            this.loading = false
                            this.dhGateDialogVisible = false
                            window.open(res.msg)
                        }).catch(err=>{
                            this.$message.error(err.msg)
                            this.loading = false
                            this.dhGateDialogVisible = false
                        })

                    })
                    // authorize(this.dhGateValidateForm,'ebay').then(result=>{
                    //     this.$message.success(result.msg)
                    //     this.loading = false
                    //     this.dhGateDialogVisible = false
                    // }).catch(err=>{
                    //     this.$message.error(err.msg)
                    //     this.loading = false
                    //     this.dhGateDialogVisible = false
                    // })
                } else {
                    return false;
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