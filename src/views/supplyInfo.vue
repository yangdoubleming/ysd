<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <el-card class="loan-box" shadow="never">
                <el-form :model="loanFormInfo" ref="loanFormInfo" :rules="rules"  style="width:900px;margin:30px 0 30px 30px"
                    label-width="180px" 
                    class="demo-registerForm"
                    v-loading="loading"
                    element-loading-text="加载中"
                    element-loading-spinner="el-icon-loading">
                    <div v-show="active==1">
                        <div slot="header" class="clearfix" style="margin-bottom:30px;">
                            <span style="margin-left:40px;font-weight:bolder;">联系信息</span>
                        </div>
                        <el-form-item label="联系邮箱" prop="contactEmail">
                            <el-col :span="12">
                                <el-input v-model="loanFormInfo.contactEmail" ></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="居住地址" prop="contactLocation">
                            <div style="display: flex">
                                <v-distpicker
                                @selected="onSelectedA" 
                                class="address"
                                :province="loanFormInfo.contactLocation && loanFormInfo.contactLocation.province" 
                                :city="loanFormInfo.contactLocation && loanFormInfo.contactLocation.city" 
                                :area="loanFormInfo.contactLocation && loanFormInfo.contactLocation.area"/>
                                <el-input v-model="loanFormInfo.contactLocation && loanFormInfo.contactLocation.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input>
                            </div>  
                        </el-form-item>
                        <div slot="header" class="clearfix" style="margin-bottom:30px;">
                            <span style="margin-left:40px;font-weight:bolder;">紧急联系人</span>
                        </div>
                        <el-form-item label="联系人姓名" prop="emergencyContactName">
                            <el-col :span="12">
                                <el-input v-model="loanFormInfo.emergencyContactName" ></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="联系人手机" prop="emergencyContactPhone">
                            <el-col :span="12">
                                <el-input v-model="loanFormInfo.emergencyContactPhone"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="联系人关系" prop="emergencyContactRelationship">
                            <el-col :span="12">
                                <el-radio-group v-model="loanFormInfo.emergencyContactRelationship">
                                    <el-radio-button label="1">夫妻</el-radio-button>
                                    <el-radio-button label="2">父母</el-radio-button>
                                    <el-radio-button label="3">子女</el-radio-button>
                                    <el-radio-button label="4">同事</el-radio-button>
                                    <el-radio-button label="5">其他</el-radio-button>
                                </el-radio-group>
                            </el-col>
                        </el-form-item>
                    </div>
                    <div class="btn-box">
                        <div class="btn2" style="margin-right:20px;" @click="back"> 上一步</div>
                        <div class="btn" @click="addActive('loanFormInfo')"> 下一步</div>
                    </div>
                </el-form>
            </el-card>
        </div> 
    </section>
</template>

<script>
import VDistpicker from 'v-distpicker'
import Footer from './layout/footer'
import Head from './layout/head'
export default {
  components: {
    Footer,              // 底部
    Head,              // 步骤条
    VDistpicker,
  },
  data() {
    return {
            active:1,
            num:2,
            loading: false,
            loanFormInfo: {
                emergencyContactName:'',
                emergencyContactPhone:'',
                emergencyContactRelationship: '1',
                contactEmail:'',
                contactLocation: {
                    province:'',
                    city:'',
                    area:'',
                    Street:''
                },
            },
            rules: {
                contactEmail: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, message: '请输入正确的邮箱' }
                ],
                contactLocation: [
                    { required: true, message: '请输入', trigger: 'blur' },
                ],
                emergencyContactName: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { pattern: /^[\u4E00-\u9FA5]{2,8}$/, message: '姓名长度为2-8文字' }
                ],
                emergencyContactPhone: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码' }
                ],
                emergencyContactRelationship: [
                    { required: true, message: '请选择', trigger: 'blur' },
                ],
            },
        }
    },
    computed: {
    },
    mounted(){
    },
    methods: {
      //注册
        addActive(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(!this.loanFormInfo.contactLocation.province||!this.loanFormInfo.contactLocation.city||!this.loanFormInfo.contactLocation.area||!this.loanFormInfo.contactLocation.Street){
                        this.$message.warning('居住地址不能为空')
                        return
                    }
                    let myData = Object.assign(JSON.parse(localStorage.getItem('loanFormInfo')), this.loanFormInfo)
                    localStorage.setItem('loanFormInfo', JSON.stringify(myData))
                    this.$router.push({path:'/uploadInfo'})
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        },
        back(){
            window.history.go(-1)
        },
        onSelectedA(data) {
            Object.assign(this.loanFormInfo.contactLocation, {province: data.province.value, city: data.city.value, area: data.area.value})
        }
    }   
}
</script>
<style rel="stylesheet/scss" lang="scss">
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
        .loan-box{
            background-color: white;
            overflow: hidden;
            border-top: 1px solid #e7e7e9;
            .annotation{
                clear: both;
                color: #a1a1a1;
                font-size: 12px;
                margin-left: 30px;
                margin-top: 15px;
            }
        }
        .del-icon{
    position: absolute;
    top: -8px;
    right: -8px;
}
.form-wrap{
    margin: 20px 0;
    display: flex;
    align-content: center;
    justify-content: center;
    /* display: flex;
    justify-content: center; */
}
.form-wrap >>> label {
    font-weight: initial;
}
.wrap{
    width: 818px;
    background: white;
    margin: 30px auto;
    border: 1px solid #E5E5E5;
}
.step{
    padding: 7px 10px;
    margin: 0 62px;
    position: relative;
    background: #EFEFEF;
    border-radius: 4px
}
.step img{
    margin-right: 5px;
}
/* .step:nth-child(1)::after, .step:nth-child(2)::after {
    display: block;
    position: absolute;
    left: 130px;
    top: 16px;
    content: '';
    width: 100px;
    height: 1px;
    background: #EFEFEF;
} */
.active:nth-child(1)::after, .active:nth-child(2)::after{
    background: #E51E5F !important;
}
.active{
    color: #fff;
    background: #E51E5F;
}

.wrap-step{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid #E5E5E5;   
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    /* overflow: hidden; */
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.add-wrap{
    display: flex;
}
/* .add-wrap span{
    margin-right: 24px;
} */
.red{
    color: #FE3223;
}
.blue{
    color: #1F86FF
}
.title{
    display: inline-block;
    width: 200px;
    text-align: right;
    margin-right: 24px;
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
    background: white;
    border-radius: 6px;
    cursor: pointer;
}
.btn-box{
            margin-left: 180px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        }
.inp{
    width: 220px;;
}
.address >>> select{
    font-size: 14px;
}
.address  >>> select:disabled{
    background-color: #F5F7FA !important;
    color: #C0C4CC;
    border-color: #E4E7ED;
}
    }

</style>

