<template>
    <div class="wrap" v-loading="loading">
        <div class="form-wrap">
            <div>
                <el-form
                    :validate-on-rule-change="false"
                    :disabled="isFrist"
                    ref="loanInfoRules" 
                    :model="loanInfo" 
                    label-width="150px" 
                    :rules="loanInfoRules">
                    <el-form-item label="选择银行：" prop="bank">
                        <el-select v-model="loanInfo.bank" placeholder="请选择">
                            <el-option value="邮储银行"></el-option>
                            <el-option value="光大银行"></el-option>
                            <el-option value="建设银行"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="申请金额（元）：" prop="loanName">
                        <el-input v-model="loanInfo.loanName" placeholder="请输入申请金额（元）" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="申请期限（天）：" prop="loanCard">
                        <el-input 
                            v-model="loanInfo.loanCard" 
                            placeholder="请输入申请期限（天）" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="计息方式：" prop="loanTelephone">
                        <el-input 
                            v-model="loanInfo.loanTelephone" 
                            placeholder="请输入计息方式" 
                            class="inp"
                            maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item label="利率：" prop="loanEmail">
                        <el-input 
                            v-model="loanInfo.loanEmail" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="还款日：" prop="loanEmail">
                        <el-input 
                            v-model="loanInfo.loanEmail" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款用途：" prop="loanEducation">
                        <el-select v-model="loanInfo.loanEducation" placeholder="请选择">
                            <el-option value="大专以下"></el-option>
                            <el-option value="本科以上"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="房产所在地：" prop="loanEducation">
                        <el-select v-model="loanInfo.loanEducation" placeholder="请选择">
                            <el-option value="大专以下"></el-option>
                            <el-option value="本科以上"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div style="text-align: center;margin-bottom: 70px;">
            <button class="btn" @click="next">提交</button>
        </div>
    </div>
</template>
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
/* .active:nth-child(1)::after, .active:nth-child(2)::after{
    background: #E51E5F !important;
} */
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
            this.isFrist = false 
            localStorage.setItem('loanInfo', JSON.stringify(res.data.loanInfo))
            res.data.loanInfo ? Object.assign(res.data.loanInfo, 
                {
                    address: JSON.parse(res.data.loanInfo.address),
                }
            ) : res.data.loanInfo = {}
            res.data.guaranteeInfo ? Object.assign(res.data.guaranteeInfo, 
                {
                    workAddress: JSON.parse(res.data.guaranteeInfo.workAddress),
                    liveAddress: JSON.parse(res.data.guaranteeInfo.liveAddress),
                }
            ) : res.data.guaranteeInfo = {}
            res.data.enterpriseInfo ? Object.assign(res.data.enterpriseInfo, 
                {
                    liveAddress: JSON.parse(res.data.enterpriseInfo.liveAddress),
                    workAddress: JSON.parse(res.data.enterpriseInfo.workAddress),
                }
            ) : res.data.enterpriseInfo = {}
          
            Object.assign(this, res.data)
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
            if(!value.idFront || !value.idBack) {
                callback(new Error('请上传担保人身份证！'));
            } else {
                callback();
            }
        }
        var nameReg = (rule, value, callback) => {
            if(!(/^[\u4E00-\u9FA5]{2,4}$/.test(value))) {
                callback(new Error('请填写正确的姓名，2-4个字之间。'));
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
            isActive: 1,
            picId: null,
            isFrist: false,
            borrow: require('../../assets/application/borrow.png'),
            borrowActive: require('../../assets/application/borrowActive.png'),
            company: require('../../assets/application/company.png'),
            companyActive: require('../../assets/application/companyActive.png'),
            personal: require('../../assets/application/personal.png'),
            personalActive: require('../../assets/application/personalActive.png'),
            loanInfo: {
                bank:'邮储银行',
                loanName: '',  //借款人姓名
                loanCard: '',  //借款人身份证号
                loanTelephone: '',  //借款人手机号
                loanEmail: '0.33%',   //借款人邮箱
                maritalStatus: '已婚',   //婚
                loanEducation: '', //借款人学历
                address: {
                    province: '',
                    city: '',
                    area: '',
                    Street: '',
                }
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
                    return
                }
                this.$refs[string].validate((valid) => {
                    if (!valid) return 
                    let obj = {
                        loanInfo: this.loanInfo,
                        guaranteeInfo: this.guaranteeInfo,
                        enterpriseInfo: this.enterpriseInfo
                    }
                    addCiCompany(obj).then(res => {
                        if(!res.code) {
                            this.$message({
                                message: res.msg,
                                type: 'success',
                                onClose: () => {
                                    this.$emit('getActive', 3)
                                    this.$emit('getInfo', true)
                                }
                            });
                        } else {
                            this.$message(res.msg);
                        }
                    })                      
                });
            } else {
                this.isActive !== 3 ? this.isActive++ : this.$message('您已经提交过信息，不可重复提交！')
            }
        
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
    }
}
</script>