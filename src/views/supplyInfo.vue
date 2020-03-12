<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <el-card class="loan-box" shadow="never">
                <el-form :model="allForm" ref="allForm"  style="width:900px;margin:30px 0 30px 30px"
                    label-width="180px" 
                    class="demo-registerForm"
                    v-loading="loading"
                    element-loading-text="加载中"
                    element-loading-spinner="el-icon-loading">
                    <div v-show="active==1">
                        <div slot="header" class="clearfix" style="margin-bottom:30px;">
                            <span style="margin-left:40px;font-weight:bolder;">联系信息</span>
                        </div>
                        <el-form-item label="联系邮箱" prop="controllerName">
                            <el-col :span="12">
                                <el-input v-model="allForm.controllerInfo.controllerName" ></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="居住地址" prop="controllerCard">
                            <div style="display: flex">
                                <v-distpicker
                                @selected="onSelectedA" 
                                class="address"
                                :province="allForm.controllerInfo.liveAddress && allForm.controllerInfo.liveAddress.province" 
                                :city="allForm.controllerInfo.liveAddress && allForm.controllerInfo.liveAddress.city" 
                                :area="allForm.controllerInfo.liveAddress && allForm.controllerInfo.liveAddress.area"/>
                                <el-input v-model="allForm.controllerInfo.liveAddress && allForm.controllerInfo.liveAddress.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input>
                            </div>  
                        </el-form-item>
                        <div slot="header" class="clearfix" style="margin-bottom:30px;">
                            <span style="margin-left:40px;font-weight:bolder;">紧急联系人</span>
                        </div>
                        <el-form-item label="联系人姓名" prop="controllerName">
                            <el-col :span="12">
                                <el-input v-model="allForm.controllerInfo.controllerName" ></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="联系人手机" prop="controllerCard">
                            <el-col :span="12">
                                <el-input v-model="allForm.controllerInfo.controllerCard"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="联系人关系" prop="controllerCard">
                            <el-col :span="12">
                                <el-input v-model="allForm.controllerInfo.controllerCard"></el-input>
                            </el-col>
                        </el-form-item>
                    </div>
                    <div class="btn-box">
                        <router-link to="/shopAuth"><div class="btn2" style="margin-right:20px;"> 上一步</div></router-link>
                        <div class="btn" @click="addActive"> 下一步</div>
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
import { addCiCompany, getAuthUserBasicInfo } from '@/api/application'
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
            activeName:'实际控制人信息',
            loading: false,
            allForm:{
                controllerInfo: {
                    controllerName: '',
                    controllerCard: '',
                    controllerTelephone: '',
                    controllerEmail:'',
                    controllerEducation: '',
                    maritalStatus: '已婚',
                    spouseName:'',
                    spouseCard:'',
                    spouseTelephone:'',
                    liveAddress:{
                        province:'',
                        city:'',
                        area:'',
                        Street:''
                    },
                },
                personInfo: {
                    legalPersonName: '',
                    idCard: '',
                    legalPersonPhone: '',
                    legalPersonEmail:'',
                    liveAddress: {
                        province:'',
                        city:'',
                        area:'',
                        Street:''
                    },
                    workAddress: {
                        province:'',
                        city:'',
                        area:'',
                        Street:''
                    },
                },
                companyInfo: {
                    companyName: '',
                    creditCode: '',
                    legalPersonName: '',
                    workAddress:{
                        province:'',
                        city:'',
                        area:'',
                        Street:''
                    },
                    businessHours: '',
                    salesVolume: '',
                    returnRate:'',
                    shopHours:'',
                    salesShare:'',
                    closingRate:'',
                    creditReporting:'',
                    creditEnquiryFrequency:'',
                    openingBank:'',
                    openingBankAccount:'',
                    logisticsCooperationDuration:''
                },
            },
        }
    },
    computed: {
    },
    mounted(){
    },
    methods: {
      //注册
        addActive() {
            this.$router.push({path:'/uploadInfo'})
        },
        nameReg(value, callback){
            if(!(/^[\u4E00-\u9FA5]{2,8}$/.test(value))) {
                this.$message.warning('请填写正确的姓名，2-8个字之间。')
                return false
            }else{
                return true
            }
        },
        checkEmail(value, callback){
            if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))) {
                this.$message.warning('请填写正确的邮箱格式。')
                return false
            } else{
                return true
            }
        },
        checkIdCard(value, callback){
            if(!(/^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value))) {
                this.$message.warning('请填写正确的身份证号')
                return false
            }else{
                return true
            }
        },
        checkPhone(value, callback){
            if(!(/^1[3456789]\d{9}$/.test(value))) {
                this.$message.warning('请填写正确的手机号')
                return false
            }else{
                return true
            }
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

