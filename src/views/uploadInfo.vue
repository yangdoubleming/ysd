<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <el-card class="loan-box" shadow="never">
                <div class="wscn-http404-container">
                    <el-form :model="registerForm" :rules="rules" ref="registerForm" 
                        label-width="100px" 
                        class="demo-registerForm"
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
                            +86 150****1234
                        </el-form-item>
                        <el-row :gutter="24">
                            <el-col :span="14">
                            <el-form-item label="验证码"  prop="verifyCode">
                                <el-input v-model="registerForm.verifyCode"></el-input>
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
                        <el-form-item>
                            <div class="submit-btn" @click="submitRegisterForm('registerForm')">提交申请</div>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </section>
</template>

<script>
    import Head from './layout/head'
    import { BASE_URL } from '@/utils/config'
    // import { isUsernameRegister, getVerifyCode, register, login  } from '@/api/register'

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
        registerForm: {
            telephone: '',
            password: '',
            confirmPassword: '',
            companyName: '',
            productList: ['0'],
            verifyCode: '',
            photoCode:''
        },
        loginForm:{
            telephone: '',
            password: '',
        },
        rules: {
            telephone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max:20,message: '密码在6-20位', trigger: 'blur' }
            ],
            confirmPassword: [
                { required: true, message: '请确认密码', trigger: 'blur' },
                { min: 6, max:20,message: '密码在6-20位', trigger: 'blur' }
            ],
            companyName: [
                { required: true, message: '请输入企业名称', trigger: 'blur' },
                { max:50,message: '不能超过50个字', trigger: 'blur' }
            ],
            productList: [
                { type: 'array', required: true, message: '请选择企业类型', trigger: 'blur' }
            ],
            photoCode: [
                { required: true, message: '请输入图片验证码', trigger: 'blur' }
            ],
            verifyCode: [
                { required: true, message: '请输入验证码', trigger: 'blur' }
            ]
        },
        check:false,
        loginDialogVisible:false,
        paracont:'获取验证码',
        btnStatus:false,
        getCodeStatus:false
    }
  },
  computed: {
    
  },
  mounted(){
      this.getPhotoCode()
  },
  methods: {
      goback(){
          window.history.go(-1);
      },
    //注册
    submitRegisterForm(formName) {
    // this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //         if(this.registerForm.password!=this.registerForm.confirmPassword){
    //             this.$message.warning('密码和确认密码不相同')
    //             return false;
    //         }
    //         if(!this.getCodeStatus){
    //             this.$message.warning('请先获取验证码！')
    //             return false;
    //         }
    //         isUsernameRegister({telephone:this.registerForm.telephone}).then(result=>{
    //             if(this.check){
    //                 this.loading = true
    //                 this.registerForm.channel = this.$route.query.channel||''
    //                 register(this.registerForm).then(result=>{
    //                     this.loading = false
    //                     this.$message.success(result.msg)
    //                     goback()
    //                 }).catch(err=>{
    //                     this.loading = false
    //                     this.$message.error(err.msg)
    //                 })
    //             }else{
    //                 this.$message.warning('请先阅读并同意《豆沙包商户平台注册协议》')
    //             }
    //         }).catch(err=>{
    //             this.$message.error('手机号已注册，请直接登录')
    //             return false
    //         })
            
    //     } else {
    //         return false;
    //     }
    // });
    },
    //获取图形验证码
    getPhotoCode(){
        var time = new Date().getTime()
        this.photoCodeUrl = `http://api.dowsure.com/freightsure/code/photoCode?${time}`
    },
    //获取验证码
    getCode () {
        this.getCodeStatus = true;
        var second = null, timePromise = undefined;
        if (second === null) {
            second = 60;
            if (!this.registerForm.telephone) {
                this.$message({message:'手机号不能为空',type:'warning'})
                second = null;
                return false;
            } else {
                getVerifyCode({phoneNo:this.registerForm.telephone,photoCode:this.registerForm.photoCode}).then(result => {
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
</style>