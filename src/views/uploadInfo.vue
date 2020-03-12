<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <el-card class="loan-box" shadow="never">
                <div class="wscn-http404-container">
                    <el-form :model="loanFormInfo" :rules="rules" ref="loanFormInfo" 
                        label-width="100px" 
                        class="demo-loanFormInfo"
                        v-loading="loading"
                        element-loading-text="注册中"
                        element-loading-spinner="el-icon-loading">
                        <div class="color-line">
                            <div class="line-nei" style="margin-top:20px;margin-left:18px;">
                                <i class="el-icon-info"></i>&nbsp;&nbsp;提示：1、提交申请后24小时内会通过短信将审核结果通知您，请根据短信提示操作<br/>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、当前仅为线上提交资料流程，不会产生任何费用
                            </div>
                         </div>
                        <el-form-item label="手机号" prop="telephone">
                            +86 {{telephone}}
                        </el-form-item>
                        <el-row :gutter="24">
                            <el-col :span="14">
                            <el-form-item label="验证码"  prop="validateCode">
                                <el-input v-model="loanFormInfo.validateCode"></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-button @click="getCode" :disabled="btnStatus">{{paracont}}</el-button>
                            </el-col>
                        </el-row>
                        <el-form-item label="">
                            <el-col :span="2">
                                <el-checkbox-group v-model="check">
                                    <el-checkbox label="" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                            <span style="color:#606266">我阅读并同意
                                <a style="color:#409EFF;cursor:pointer;" href="./index_files/豆沙包商户平台注册协议.pdf" target="_blank" >《数据授权协议》</a>
                                <a style="color:#409EFF;cursor:pointer;" href="./index_files/豆沙包商户平台注册协议.pdf" target="_blank" >《豆沙包平台服务协议》</a>
                            </span>
                        </el-form-item>
                        <div class="btn-box">
                            <div class="btn2" style="margin-right:20px;" @click="back"> 上一步</div>
                            <div class="btn" @click="submitRegisterForm('loanFormInfo')">提交申请</div>
                        </div>
                    </el-form>
                </div>
            </el-card>
        </div>
    </section>
</template>

<script>
    import Head from './layout/head'
    import { BASE_URL } from '@/utils/config'
    import { sendVerifyCode, receivablesloan  } from '@/api/application'

export default {
    components: {
        Head
    },
  data() {
    return {
        loading:false,
        statusTrue:true,
        statusFalse:false,
        setWidth:'520px',
        photoCodeUrl:'',
        num:3,
        loanFormInfo: {
            validateCode: '',
        },
        rules: {
            validateCode: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ]
        },
        check:false,
        loginDialogVisible:false,
        paracont:'获取验证码',
        btnStatus:false,
        getCodeStatus:false,
        telephone:''
    }
  },
  computed: {
    
  },
  mounted(){
      let tele = JSON.parse(localStorage.getItem('user')).telephone
      this.telephone =  tele.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
  },
  methods: {
    back(){
        window.history.go(-1)
    },
    //注册
    submitRegisterForm() {
        if(!this.getCodeStatus){
            this.$message.warning('请先获取验证码！')
            return false;
        }
        if(!this.loanFormInfo.validateCode){
            this.$message.warning('请输入验证码')
            return false;
        }
        if(this.check){
            let myData = Object.assign(JSON.parse(localStorage.getItem('loanFormInfo')), this.loanFormInfo)
            this.loading = true
            receivablesloan(myData).then(result=>{
                this.loading = false
                this.$router.push({path: '/summary'})
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        }else{
            this.$message.warning('请先阅读并同意相关协议')
        }
            
    },
    //获取验证码
    getCode () {
        this.getCodeStatus = true;
        var second = null, timePromise = undefined;
        if (second === null) {
            second = 60;
            if (!JSON.parse(localStorage.getItem('user')).telephone) {
                this.$message({message:'手机号不能为空',type:'warning'})
                second = null;
                return false;
            } else {
                sendVerifyCode().then(result => {
                    const _this = this;
                    this.btnStatus = true;
                    timePromise = setInterval(function () {
                        if (second <= 0) {
                            clearInterval(timePromise);
                            timePromise = undefined;
                            second = null;
                            _this.paracont = "重发验证码";
                            _this.btnStatus = false;
                        } else {
                            _this.paracont = second + "s";
                            second--;
                        }
                    }, 1000);
                }).catch(err => {
                    this.$message({message:err.msg,type:'error'})
                    second = null;
                })
            }
        } else {
            return false;
        }
    },
}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404-container{
  width: 60%;
  max-width: 600px;
  margin: 90px auto;
}
.color-line{
   border: #409EFF 1px solid; 
   border-radius: 5px;
   height: 100px;
   color: #5F5A59;
    font-size: 14px;
    margin-bottom: 50px;
    line-height: 30px;
    background:#e5f0fb;
}
.line-nei{
    // border: red 1px solid; 
}
.container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
}
.login-in{
        width:120px;
        height: 48px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        line-height: 48px;
        background: -webkit-linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
        background: linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
        cursor: pointer;
    }
    .btn{
    width: 150px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background: #E51E5F;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
}
.btn2{
    width: 150px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    border:1px solid #9C9D9C;
    color: #9C9D9C;
    border-radius: 6px;
    cursor: pointer;
}
.btn-box{
            margin-left: 100px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        }
</style>