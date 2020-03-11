<template>
    <section>
        <div class="authorize-box">
            <div class="up">
                <img :src="dhGateLogo" class="up-left">
                <div class="up-right" @click="showDhGateDialog">
                    <span>新增并授权敦煌网店铺</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="down">
                <div class="down-left">
                    <i class="el-icon-search"></i>
                    <span>查看授权店铺</span>
                </div>
                <div class="down-right">
                    <i class="el-icon-question"></i>
                    <a href="./index_files/dunhuang.pdf" target="_blank">查看授权帮助</a>
                </div>
            </div>
        </div>


        <el-dialog
            title="敦煌网-新增店铺并授权"
            :visible.sync="dhGateDialogVisible"
            :close-on-click-modal="modelStatus"
            :center="dhGateCenter"
            :width="setWidth">
            <a class="linkWord" href="./index_files/dunhuang.pdf" target="_blank" >查看授权帮助</a>
            <el-form :model="dhGateValidateForm" ref="dhGateValidateForm" 
                :rules="dhGateRules" 
                label-width="120px" 
                v-loading="loading"
                element-loading-text="授权中"
                element-loading-spinner="el-icon-loading">
                
                <el-form-item label="店铺名称"  prop="shopName" >
                    <el-input v-model.number="dhGateValidateForm.shopName" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item label="授权码"  prop="code" >
                    <el-row>
                        <el-col :span="16">
                            <el-input v-model.number="dhGateValidateForm.code" autocomplete="off"></el-input>
                        </el-col>
                        <el-col :span="3" style="margin-left:10px">
                            <el-button @click="getCode" >获取授权码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                
                <el-form-item>
                    <div class="submit-btn" @click="submitdhGateForm('dhGateValidateForm')" style="margin:0">授 权</div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    import { dhGateAuthorize, dhgateGetPrams, authorize } from '@/api/authorize'
    import dhGateLogo from '@/assets/register/dhGate_logo.png'

    export default {
        data() {
            return {
                dhGateLogo,
                modelStatus:false,
                dhGateDialogVisible: false,
                dhGateLogo,
                dhGateCenter: true,
                setWidth:'520px',
                loading:false,
                dhGateValidateForm: {
                    shopId: '',
                    shopName:'',
                    code:'',
                },
                dhGateRules: {
                    shopName: [
                        { required: true, message: '请输入店铺名称', trigger: 'blur' },
                    ],
                    sellerIdentifier: [
                        { required: true, message: '请输入卖家编号', trigger: 'blur' },
                    ],
                    code: [
                        { required: true, message: '请输入授权码', trigger: 'blur' },
                    ],
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
                dhgateGetPrams().then(result=>{
                    window.open(`https://secure.dhgate.com/dop/oauth2/authorize?response_type=code&client_id=${result.data.client_id}&scope=basic&state=ok&display=page&redirect_uri=${result.data.redirect_uri}`)
                }).catch(err=>{
                    this.$message.error(err.msg)
                })
            },
            submitdhGateForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    authorize(this.dhGateValidateForm,'dhgate').then(result=>{
                        this.$message.success(result.msg)
                        this.loading = false
                        this.dhGateDialogVisible = false
                    }).catch(err=>{
                        this.$message.error(err.msg)
                        this.loading = false
                        this.dhGateDialogVisible = false
                    })
                } else {
                    return false;
                }
                });
            },
        }
    };
</script>

<style>
    @import "../store.css";
</style>