<template>
    <div class="wrap" v-loading="loading">
        <div class="wrap-step">
            <div class="step" :class="{active: isActive === 2}">
                <img :src="isActive === 2 ? borrowActive : borrow" alt="">
                <span>个人信息</span>
            </div>
            <div class="step" :class="{active: isActive === 3}">
                <img :src="isActive === 3 ? personalActive : personal" alt="">
                <span>企业信息</span>
            </div>
        </div>
        <div class="form-wrap">
            <div v-show="isActive === 2">
                <el-form
                    :validate-on-rule-change="false"
                    ref="loanInfoRules" 
                    :model="loanInfo" 
                    label-width="140px" 
                    :rules="loanInfoRules">
                    <el-form-item label="申请人姓名" prop="loanName">
                        <el-input v-model="loanInfo.loanName" placeholder="请输入申请人姓名" class="inp"></el-input>
                        <span style="color:#E51E5F">（该申请人为实际控制人，认证后不可修改）</span>
                    </el-form-item>
                    <el-form-item label="申请人身份证号" prop="loanCard">
                        <el-input 
                            v-model="loanInfo.loanCard" 
                            placeholder="请输入申请人身份证号" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人手机号" prop="loanTelephone">
                        <el-input 
                            v-model="loanInfo.loanTelephone" 
                            placeholder="请输入申请人手机号" 
                            class="inp"
                            maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人邮箱" prop="loanEmail">
                        <el-input 
                            v-model="loanInfo.loanEmail" 
                            placeholder="请输入申请人邮箱号" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人身份证正反面" prop="cardWrap">
                        <div style="display: flex;">
                            <el-upload
                                :action="baseUrl"
                                :with-credentials="true"
                                :headers="myHeaders"
                                style="margin-right: 40px;position: relative;"
                                class="avatar-uploader"
                                :show-file-list="false"
                                :on-success="uploadSuccess">
                                <img 
                                    v-if="loanInfo.loanCardFront" 
                                    :src="`${showUrl+loanInfo.loanCardFront}`" 
                                    class="avatar" 
                                    @click.stop="showBigPic(loanInfo.loanCardFront)">
                                <i v-else class="el-icon-plus avatar-uploader-icon" @click="picId = 'loanCardFront'"></i>
                                <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic('loanCardFront')"/>
                            </el-upload>
                            <el-upload
                                :action="baseUrl"
                                :with-credentials="true"
                                :headers="myHeaders"
                                class="avatar-uploader"
                                style="position: relative;"
                                :show-file-list="false"
                                :on-success="uploadSuccess">
                                <img 
                                    v-if="loanInfo.loanCardBack" 
                                    :src="`${showUrl+loanInfo.loanCardBack}`" 
                                    class="avatar" 
                                    @click.stop="showBigPic(loanInfo.loanCardBack)">
                                <i v-else class="el-icon-plus avatar-uploader-icon" @click="picId = 'loanCardBack'"></i>
                                <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic('loanCardBack')"/>
                            </el-upload>
                        </div>              
                    </el-form-item>
                </el-form>
            </div>
            <div v-show="isActive === 3">
                <el-form 
                    ref="enterpriseInfoRules" 
                    :model="enterpriseInfo" 
                    label-width="140px" 
                    :rules="enterpriseInfoRules">
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input 
                            v-model="enterpriseInfo.companyName" 
                            placeholder="请输入企业名称" 
                            class="inp"
                            maxlength="25"></el-input>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码" prop="creditCode">
                        <el-input 
                            v-model="enterpriseInfo.creditCode" 
                            placeholder="请输入统一社会信用代码" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="营业执照" prop="tradingCertificate">
                        <div style="display: flex;">
                            <el-upload
                                :action="baseUrl"
                                :with-credentials="true"
                                :headers="myHeaders"
                                style="margin-right: 40px;position: relative;"
                                class="avatar-uploader"
                                :show-file-list="false"
                                :on-success="uploadSuccess2">
                                <img 
                                    v-if="enterpriseInfo.tradingCertificate" 
                                    :src="`${showUrl+enterpriseInfo.tradingCertificate}`" 
                                    class="avatar" 
                                    @click.stop="showBigPic(enterpriseInfo.tradingCertificate)">
                                <i v-else class="el-icon-plus avatar-uploader-icon" @click="picId = 'tradingCertificate'"></i>
                                <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic('tradingCertificate')"/>
                            </el-upload>
                        </div>              
                    </el-form-item>
                    <el-form-item label="经营年限" prop="businessLife">
                        <el-input 
                            v-model="enterpriseInfo.businessLife" 
                            placeholder="请输入经营年限" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="注册地" prop="registration">
                        <div style="display: flex">
                            <v-distpicker
                            @selected="onSelected" 
                            class="address"
                            :province="enterpriseInfo.registration && enterpriseInfo.registration.province" 
                            :city="enterpriseInfo.registration && enterpriseInfo.registration.city" 
                            :area="enterpriseInfo.registration && enterpriseInfo.registration.area"/>
                            <el-input v-model="enterpriseInfo.registration && enterpriseInfo.registration.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input>
                        </div>   
                    </el-form-item>
                    <el-form-item label="法人与借款人同一人" prop="theSamePerson" >
                        <el-radio-group v-model="loanInfo.theSamePerson">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="法人身份证正反面" prop="cardWrap">
                        <div style="display: flex;">
                            <el-upload
                                :action="baseUrl"
                                :with-credentials="true"
                                :headers="myHeaders"
                                style="margin-right: 40px;position: relative;"
                                class="avatar-uploader"
                                :show-file-list="false"
                                :on-success="uploadSuccess2">
                                <img 
                                    v-if="enterpriseInfo.legalPersonIdFront" 
                                    :src="`${showUrl+enterpriseInfo.legalPersonIdFront}`" 
                                    class="avatar" 
                                    @click.stop="showBigPic(enterpriseInfo.legalPersonIdFront)">
                                <i v-else class="el-icon-plus avatar-uploader-icon" @click="picId = 'legalPersonIdFront'"></i>
                                <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic('legalPersonIdFront')"/>
                            </el-upload>
                            <el-upload
                                :action="baseUrl"
                                :with-credentials="true"
                                :headers="myHeaders"
                                class="avatar-uploader"
                                style="position: relative;"
                                :show-file-list="false"
                                :on-success="uploadSuccess2">
                                <img 
                                    v-if="enterpriseInfo.legalPersonIdBack" 
                                    :src="`${showUrl+enterpriseInfo.legalPersonIdBack}`" 
                                    class="avatar" 
                                    @click.stop="showBigPic(enterpriseInfo.legalPersonIdBack)">
                                <i v-else class="el-icon-plus avatar-uploader-icon" @click="picId = 'legalPersonIdBack'"></i>
                                <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic('legalPersonIdBack')"/>
                            </el-upload>
                        </div>              
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        <p style="color: #EB105C;text-align: center;margin-left: 70px;" v-if="isActive === 2">提示：申请人必须为企业法人或企业实际控制人</p>
        <div style="text-align: center;margin-bottom: 70px;">
            <button 
                class="btn" 
                @click="isActive--" 
                style="margin-right: 10px;background: transparent;color: black;border: 1px solid #D9D6D5;"
                v-if="isActive > 2">上一步</button>
            <button class="btn" @click="next"> {{isActive!==3 ? '下一步' : '提交'}}</button>
        </div>
        <!-- 点击查看大图 star -->
        <el-dialog
            title="查看"
            :visible.sync="isShowBigPic"
            width="30%">
            <img :src="`${showUrl}${bigPic}`" alt="" style="width:100%">
        </el-dialog>
        <!-- 点击查看大图 end -->
       
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import { BASE_URL, IMG_URL_show } from '@/utils/config'
import { getUser } from '@/utils/auth'
import {addCiCompany, getUserBasicInfo, getUserDataInfo} from '@/api/application'

export default {
    components: {
        VDistpicker,
    },
    mounted() {
        getUserBasicInfo().then(res => {
            this.loading = false
            if(!res.data) {
                this.$emit('getInfo', false)
                return      
            }
            this.$emit('getInfo', true)
            // this.isFrist = true 
            getUserDataInfo().then(res2 => {
                if(res2.data <= 0) {
                    this.$emit('getUpload', false)
                    return
                }
            })
            this.$emit('getUpload', true)
        })
    },
    data() {
        var checkAdd = (rule, value, callback) => {
            if(!value.province || !value.area || !value.city || !value.Street) {
                callback(new Error('请填写地址！'));
            } else {
                callback();
            }
        }
        var checkCard = (rule, value, callback) => {
            if(!value.loanCardFront || !value.loanCardBack) {
                callback(new Error('请上传担保人身份证！'));
            } else {
                callback();
            }
        }
        var nameReg = (rule, value, callback) => {
            if(!(/^[\u4E00-\u9FA5]{2,8}$/.test(value))) {
                callback(new Error('请填写正确的姓名，2-8个字之间。'));
            } else {
                callback();
            }
        }
        var checkEmail = (rule, value, callback) => {
            if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))) {
                callback(new Error('请填写正确的邮箱格式。'));
            } else {
                callback();
            }
        }
        return {
            loading: true,
            myHeaders: {token: getUser().token},
            baseUrl:`${BASE_URL}/ci/upload`,
            showUrl: IMG_URL_show,
            isActive: 2,
            picId: null,
            isFrist: false,
            borrow: require('../../assets/application/borrow.png'),
            borrowActive: require('../../assets/application/borrowActive.png'),
            company: require('../../assets/application/company.png'),
            companyActive: require('../../assets/application/companyActive.png'),
            personal: require('../../assets/application/personal.png'),
            personalActive: require('../../assets/application/personalActive.png'),
            loanInfo: {
                loanTelephone:"110",					//已绑定手机号
                loanName:"LiLei",						//申请人真实姓名
                loanCard:"110011199909099999",		//申请人身份证号
                loanCardFront:"",	//申请人身份证正面(新字段)
                loanCardBack:"",		//申请人身份证反面(新字段)
                loanEmail:"abc@163.com"				//申请人邮箱
            },
            enterpriseInfo: {
                companyName:"XXX有限公司",							//企业名称
                creditCode:"GB000",								//统一社会信用代码
                tradingCertificate:"",		//营业执照
                businessLife:5,									//经营年限（新字段）
                registration:{
                    province:'',
                    city:'',
                    area:'',
                    Street:''
                },					//注册地（新字段）
                theSamePerson:1,									//法人姓名与借款人是否为同一人（新字段）
                legalPersonIdFront:"",			//法人身份证正
                legalPersonIdBack:""				//法人身份证反
            },
            loanInfoRules: {
                loanName: [
                    { required: true, message: '请输入借款人姓名', trigger: 'blur' },
                    {   validator: nameReg, trigger: 'blur' },
                ],
                loanCard: [
                    { required: true, message: '请输入借款人身份证号', trigger: 'blur' },
                    { min: 18, max: 18,  message: '请输入正确的借款人身份证号', trigger: 'blur' },
                ],
                loanTelephone: [
                    { required: true, message: '请输入借款人手机号', trigger: 'blur' },
                    { min: 11, max: 11,  message: '请输入正确的借款人手机号', trigger: 'blur' },
                ],
                loanEmail: [
                    { required: true, message: '请输入借款人邮箱号', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur'},
                ],
                maritalStatus: [
                    { required: true, trigger: 'blur' },
                ],
                loanEducation: [
                    { required: true, message: '请选择借款人学历', trigger: 'blur'},
                ],
                address: [
                    { required: true, validator: checkAdd, trigger: 'blur' },
                ],
            },
            enterpriseInfoRules: {
                companyName: [
                    { required: true, message: '请输入企业名称', trigger: 'blur' },
                    { min: 5, max: 25,  message: '企业名称长度在5-25个字之间', trigger: 'blur' },
                ], 
                creditCode: [
                    { required: true, message: '请输入统一社会信用代码', trigger: 'blur' },
                    { min: 18, max: 18,  message: '请输入正确的统一社会信用代码', trigger: 'blur' },
                ], 
                legalPersonName: [
                    { required: true, message: '请输入法人姓名', trigger: 'blur' },
                    { validator: nameReg, trigger: 'blur' },
                ], 
                idCard: [
                    { required: true, message: '请输入法人身份证号', trigger: 'blur' },
                    { min: 18, max: 18,  message: '请输入正确的法人身份证号', trigger: 'blur' },
                ],
                legalPersonPhone: [
                    { required: true, message: '请输入法人联系电话', trigger: 'blur' },
                    { min: 11, max: 11,  message: '请输入正确的法人联系电话', trigger: 'blur' },
                ],
                legalPersonEmail: [
                    { required: true, message: '请输入法人邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur'},

                ], //法人邮箱
                liveAddress: [
                    { required: true, validator: checkAdd,  trigger: 'blur' },  
                ],
                workAddress: [
                    { required: true, validator: checkAdd,  trigger: 'blur' },
                ]
            },
            isShowBigPic: false,
            bigPic: null

        }
    },
    watch: {
        enterpriseInfo: {
            handler: function(val, oldval){
                if(val.checked) {
                    let loanInfo = JSON.parse(JSON.stringify(this.loanInfo));
                    this.enterpriseInfo.legalPersonName = loanInfo.loanName
                    this.enterpriseInfo.idCard = loanInfo.loanCard
                    this.enterpriseInfo.legalPersonEmail = loanInfo.loanEmail
                    this.enterpriseInfo.legalPersonPhone = loanInfo.loanTelephone
                    this.enterpriseInfo.liveAddress = loanInfo.address
                }
            },
            // deep:true//对象内部的属性监听，也叫深度监听
        }      
    },
    methods: {
        showBigPic(url) {
            this.bigPic = url
            this.isShowBigPic = !this.isShowBigPic
        }, 
        next() {  
            let string = null
            switch(this.isActive) {
                case 1: 
                    string = 'loanInfoRules'
                    break;
                case 2: 
                    string = 'guaranteeRules'
                    break;
                case 3: 
                    string = 'enterpriseInfoRules'
                    break;
            }
            if(!this.isFrist) {
                if(this.isActive !== 3) {
                    this.isActive++
                    console.log(222222,this.loanInfo)
                }else{
                    console.log(333333,this.enterpriseInfo)
                }
            } else {
                this.isActive !== 3 ? this.isActive++ : this.$message('您已经提交过信息，不可重复提交！')
            }
        
        },
        delPic(type) {
            if(this.isFrist) return
            this.$set(this.guaranteeInfo.cardWrap, type, '');
        },
        onSelected(data) {
            switch(this.isActive) {
                case 1:
                    Object.assign(this.loanInfo.address, {province: data.province.value, city: data.city.value, area: data.area.value})
                    break;
                case 2:
                    Object.assign(this.guaranteeInfo.liveAddress, {province: data.province.value, city: data.city.value, area: data.area.value})
                    break;
                case 3:
                    Object.assign(this.enterpriseInfo.liveAddress, {province: data.province.value, city: data.city.value, area: data.area.value})
                    break;
            }
        },
        onWorkSelected(data) {
            this.isActive == 2? 
                Object.assign(this.guaranteeInfo.workAddress, {province: data.province.value, city: data.city.value, area: data.area.value}):
                Object.assign(this.enterpriseInfo.workAddress, {province: data.province.value, city: data.city.value, area: data.area.value})

        },
        uploadSuccess(response, file, fileList) {
            if(!response.code) {
                this.$set(this.loanInfo, this.picId, response.data.replace(/\\/g,"/"));
            }
        },
        uploadSuccess2(response, file, fileList) {
            if(!response.code) {
                this.$set(this.enterpriseInfo, this.picId, response.data.replace(/\\/g,"/"));
            }
        },
    }
}
</script>
<style scoped>
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
    width: 200px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background: #E51E5F;
    color: #fff;
    border: 0;
    border-radius: 6px;
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
</style>