<template>
    <section>
        <Score></Score>
        <Head :num="3"></Head>
        <div class="wscn-http404-container"
            v-loading="loading"
            element-loading-text="提交中"
            element-loading-spinner="el-icon-loading">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelWidth" class="demo-ruleForm">
                <el-form-item label="贷款金额（元）" prop="loanAmount">
                    <el-input v-model="ruleForm.loanAmount"></el-input>
                </el-form-item>
                <el-form-item label="" >
                    <span class="warningWord">*最高贷款金额200万</span>
                </el-form-item>  
                <el-form-item label="日利率" prop="loanRate">
                    <span>{{loanRate}}</span>&nbsp;&nbsp;起
                </el-form-item>
                 <el-form-item label="贷款期限" prop="loanTerm">
                    <el-select v-model="ruleForm.loanTerm" placeholder="请选择贷款期限">
                    <el-option label="1个月" value="1"></el-option>
                    <el-option label="2个月" value="2"></el-option>
                    <el-option label="3个月" value="3"></el-option>
                    <el-option label="4个月" value="4"></el-option>
                    <el-option label="5个月" value="5"></el-option>
                    <el-option label="6个月" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机号" prop="contactPhone">
                    <el-input v-model="ruleForm.contactPhone" disabled></el-input>
                </el-form-item>
                <el-form-item label="" prop="type">
                    <el-col :span="2">
                        <el-checkbox-group v-model="readAgree">
                            <el-checkbox label=""></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <span style="color:#606266">我已阅读并同意<label style="color:#409EFF;cursor:pointer;"><a href="./index_files/豆沙包科技产品合作协议.pdf" target="_blank">《豆沙包服务协议》</a></label></span>
                </el-form-item>
                <el-form-item>
                    <div class="submit-btn" @click="submitForm('ruleForm')" style="margin:0">提交申请</div>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog
            title=""
            :visible.sync="successDialogVisible"
            :width="setWidth"
            :show-close="statusFalse"
            :center="statusTrue"
            :close-on-click-modal="statusFalse"
            :close-on-press-escape="statusFalse"
            >
            <span>您已申请成功，2-3个工作日即可放款具体进入可在贷款详情中查看！</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="showSuccessDialogVisible">去授权</el-button>
            </span>
        </el-dialog>
    </section>
</template>

<script>
import Head from './layout/head'
import Score from './credit/score'
import { editCiCompanyLoan, getVerifyCode  } from '@/api/register'
import { getUser } from '@/utils/auth' 
import axios from 'axios'

export default {
  components: {
        Head,
        Score
  },
  data() {
    return {
        successDialogVisible:false,
        statusTrue:true,
        statusFalse:false,
        labelWidth:'150px',
        loading:false,
        setWidth:'90%',
        loanRate: '0.025%',
        ruleForm: {
            loanAmount: '',
            loanTerm: '',
            insuranceMoney: '',
            insuranceRate: '3',
            handlingRate: '1',
            totalFeeRate: '1',
            contactPhone: getUser().username,
        },
        declaration:'保险人已将中小企业贷款保证保险所使用的条款（包括责任免除及退保内容）和特别约定向本人做了明确说明，本人已充分理解；上述所填内容均属实，同意以此保单作为订立保险合同的依据。',
        rules: {
            loanAmount: [
                { required: true, message: '请输入贷款金额', trigger: 'blur' },
                { pattern: /^\d+$/, message: '贷款金额只能是数字', trigger: 'blur' }
            ],
            loanTerm: [
                { required: true, message: '请选择贷款期限', trigger: 'change' }
            ],
            contactPhone: [
                { required: true, message: '请输入手机号', trigger: 'change' },
                { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
            ]
        },
        readAgree:false,
    }
  },
  computed: {
    
  },
  created(){
    if(document.body.clientWidth<780){
        this.labelWidth = "none"
        this.setWidth = '95%'
    }else{
        this.labelWidth = '150px'
        this.setWidth = '420px'
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                this.ruleForm.insuranceMoney = this.ruleForm.loanAmount
                if (parseInt(this.ruleForm.loanAmount)>2000000 ) {
                    this.$message.warning('贷款金额不大于2000000！')
                    return false;
                }
                if(!this.readAgree){
                    this.$message.warning('请先同意相关协议')
                    return false;
                }
                this.loading = true
                editCiCompanyLoan(this.ruleForm).then(result=>{
                    this.loading = false
                    this.successDialogVisible = true
                }).catch(err=>{
                    this.loading = false
                    this.$message.error(err.msg);
                })
            } else {
                return false;
            }
        });
    },
    //提交成功弹窗
    showSuccessDialogVisible(){
        this.$router.push({path:'/authorize'})
        this.successDialogVisible = false
    }
}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404-container{
  width: 60%;
  max-width: 500px;
  margin: 30px auto;
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
.warningWord{
    color:#f62f87;
    font-size: 14px;
}
@media (max-width:780px){
    .header{
        display: none
    }
    .wscn-http404-container{
        width: 90%;
    }
    .el-message-box{
        width: 300px;
    }
}
</style>
