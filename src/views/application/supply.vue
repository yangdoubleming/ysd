<template>
    <div class="wrap" v-loading="loading">
        <div class="wrap-step">
            <div class="step" :class="{active: isActive === 1}">
                <img :src="isActive === 1 ? borrowActive : borrow" alt="">
                <span>实际控制人信息</span>
            </div>
            <div class="step" :class="{active: isActive === 2}">
                <img :src="isActive === 2 ? personalActive : personal" alt="">
                <span>法人代表信息</span>
            </div>
            <div class="step" :class="{active: isActive === 3}">
                <img :src="isActive === 3 ? company : companyActive" alt="">
                <span>企业信息</span>
            </div>
        </div>
        <div class="form-wrap">
            <div v-show="isActive === 1">
                <el-form
                    :validate-on-rule-change="false"
                    :disabled="isFrist"
                    ref="loanInfoRules" 
                    :model="controllerInfo" 
                    label-width="150px" 
                    :rules="loanInfoRules">
                    <el-form-item label="实际控制人姓名" prop="controllerName">
                        <el-input v-model="controllerInfo.controllerName" placeholder="请输入实际控制人姓名" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="实际控制人身份证号" prop="controllerCard">
                        <el-input 
                            v-model="controllerInfo.controllerCard" 
                            placeholder="请输入实际控制人身份证号" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="实际控制人身手机号" prop="controllerTelephone">
                        <el-input 
                            v-model="controllerInfo.controllerTelephone" 
                            placeholder="请输入借款人手机号" 
                            class="inp"
                            maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item label="实际控制人身邮箱" prop="controllerEmail">
                        <el-input 
                            v-model="controllerInfo.controllerEmail" 
                            placeholder="请输入实际控制人身邮箱" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状况" prop="maritalStatus" >
                        <el-radio-group v-model="controllerInfo.maritalStatus">
                            <el-radio label="已婚"></el-radio>
                            <el-radio label="未婚"></el-radio>
                            <el-radio label="离异"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="实际控制人学历" prop="controllerEducation">
                        <el-select v-model="controllerInfo.controllerEducation" placeholder="请选择">
                            <el-option value="大专以下"></el-option>
                            <el-option value="本科以上"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="现家庭地址" prop="liveAddress">
                        <div style="display: flex">
                            <v-distpicker 
                            :disabled="isFrist"
                            @selected="onSelected" 
                            class="address"
                            :province="controllerInfo.liveAddress && controllerInfo.liveAddress.province"
                            :city="controllerInfo.liveAddress && controllerInfo.liveAddress.city" 
                            :area="controllerInfo.liveAddress && controllerInfo.liveAddress.area"/>
                            <el-input v-model="controllerInfo.liveAddress && controllerInfo.liveAddress.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input> 
                        </div>
                    </el-form-item>
                     <el-form-item label="实际控制人配偶姓名" prop="spouseName">
                        <el-input v-model="controllerInfo.spouseName" placeholder="请输入实际控制人配偶姓名" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="实际控制人配偶身份证号" prop="spouseCard">
                        <el-input 
                            v-model="controllerInfo.spouseCard" 
                            placeholder="请输入实际控制人配偶身份证号" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="实际控制人配偶身手机号" prop="spouseTelephone">
                        <el-input 
                            v-model="controllerInfo.spouseTelephone" 
                            placeholder="请输入实际控制人配偶身手机号" 
                            class="inp"
                            maxlength="11"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div v-show="isActive === 2">
                <el-form 
                    :disabled="isFrist"
                    ref="enterpriseInfoRules" 
                    :model="personInfo" 
                    label-width="140px" 
                    :rules="enterpriseInfoRules">
                    <el-form-item label="法人姓名" prop="legalPersonName">
                        <el-input 
                            v-model="personInfo.legalPersonName" 
                            placeholder="请输入法人姓名" 
                            class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="法人身份证号码" prop="idCard">
                        <el-input 
                            v-model="personInfo.idCard" 
                            placeholder="请输入法人身份证号码" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="法人邮箱" prop="legalPersonEmail">
                        <el-input 
                            v-model="personInfo.legalPersonEmail" 
                            placeholder="请输入法人邮箱" 
                            class="inp"
                            ></el-input>
                    </el-form-item>
                    <el-form-item label="法人手机号码" prop="legalPersonPhone">
                        <el-input 
                            v-model="personInfo.legalPersonPhone" 
                            placeholder="请输入法人手机号码" 
                            class="inp"
                            maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item label="法人现居住地址" prop="liveAddress">
                        <div style="display: flex">
                            <v-distpicker
                            :disabled="isFrist"
                            @selected="onSelected" 
                            class="address"
                            :province="personInfo.liveAddress && personInfo.liveAddress.province" 
                            :city="personInfo.liveAddress && personInfo.liveAddress.city" 
                            :area="personInfo.liveAddress && personInfo.liveAddress.area"/>
                            <el-input v-model="personInfo.liveAddress && personInfo.liveAddress.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input>
                        </div>   
                    </el-form-item>
                    <el-form-item label="法人现办公地址" prop="workAddress">
                        <div style="display: flex">
                            <v-distpicker 
                            :disabled="isFrist"
                                @selected="onWorkSelected" 
                                class="address"
                                :province="personInfo.workAddress.province"
                            :city="personInfo.workAddress.city" 
                            :area="personInfo.workAddress.area"/>
                            <el-input v-model="personInfo.workAddress.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input> 
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="personInfo.checked">法人信息同借款人信息</el-checkbox>
                    </el-form-item>
                </el-form>
            </div>
            <div v-show="isActive === 3">
                <el-form
                    :disabled="isFrist"
                    ref="guaranteeRules" 
                    :model="companyInfo" 
                    label-width="140px" 
                    :rules="guaranteeRules">
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input v-model="companyInfo.companyName" placeholder="请输入企业名称" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码" prop="creditCode">
                        <el-input 
                            v-model="companyInfo.creditCode" 
                            placeholder="请输入统一社会信用代码" 
                            class="inp"
                            maxlength="18"></el-input>
                    </el-form-item>
                    <el-form-item label="法人代表姓名" prop="legalPersonName">
                        <el-input v-model="companyInfo.legalPersonName" placeholder="请输入法人代表姓名" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="法人现办公地址" prop="workAddress">
                        <div style="display: flex">
                            <v-distpicker 
                            :disabled="isFrist"
                                @selected="onWorkSelected" 
                                class="address"
                                :province="companyInfo.workAddress.province"
                            :city="companyInfo.workAddress.city" 
                            :area="companyInfo.workAddress.area"/>
                            <el-input v-model="companyInfo.workAddress.Street" placeholder="请输入街道地址" class="inp" style="margin-left: 5px"></el-input> 
                        </div>
                    </el-form-item>
                    <el-form-item label="企业经营时长" prop="businessHours">
                       <el-input v-model="guaranteeInfo.businessHours" placeholder="请输入近一年总销售额" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="近一年总销售额" prop="salesVolume">
                        <el-input v-model="guaranteeInfo.salesVolume" placeholder="请输入近一年总销售额" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="近一年退货率" prop="returnRate">
                        <el-input v-model="guaranteeInfo.returnRate" placeholder="近一年退货率" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺经营时长" prop="shopHours">
                        <el-input v-model="guaranteeInfo.shopHours" placeholder="店铺经营时长" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="近一年单点销售占比" prop="salesShare">
                        <el-input v-model="guaranteeInfo.salesShare" placeholder="近一年单点销售占比" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="封店率" prop="closingRate">
                        <el-input v-model="guaranteeInfo.closingRate" placeholder="封店率" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="征信状况" prop="creditReporting">
                        <el-input v-model="guaranteeInfo.creditReporting" placeholder="征信状况" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="征信查询次数" prop="creditEnquiryFrequency">
                        <el-input v-model="guaranteeInfo.creditEnquiryFrequency" placeholder="征信状况" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行" prop="openingBank">
                        <el-input v-model="guaranteeInfo.openingBank" placeholder="征信状况" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行账号" prop="openingBankAccount">
                        <el-input v-model="guaranteeInfo.openingBankAccount" placeholder="征信状况" class="inp"></el-input>
                    </el-form-item>
                    <el-form-item label="需放款企业物流合作时长（月）" prop="logisticsCooperationDuration">
                        <el-input v-model="guaranteeInfo.logisticsCooperationDuration" placeholder="征信状况" class="inp"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        <div style="text-align: center;margin-bottom: 70px;">
            <button 
                class="btn" 
                @click="isActive--" 
                style="margin-right: 10px;background: transparent;color: black;border: 1px solid #D9D6D5;"
                v-if="isActive > 1">上一步</button>
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
            localStorage.setItem('controllerInfo', JSON.stringify(res.data.controllerInfo))
            res.data.controllerInfo ? Object.assign(res.data.controllerInfo, 
                {
                    address: JSON.parse(res.data.controllerInfo.address),
                }
            ) : res.data.controllerInfo = {}
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
            controllerInfo: {
                controllerName: '',  //实际控制人姓名
                controllerCard: '',  //实际控制人身份证号
                controllerTelephone: '',  //实际控制人手机号
                controllerEmail: '',   //实际控制人邮箱
                controllerEducation: '',   //实际控制人学历
                maritalStatus: '', //婚姻状况
                spouseName: '', //实际控制人配偶姓名
                spouseCard: '', //实际控制人配偶身份证号
                spouseTelephone: '', //实际控制人配偶手机号
                liveAddress: {
                    province: '',
                    city: '',
                    area: '',
                    Street: '',
                }
            },
            personInfo: {
                legalPersonName: '',  //法人姓名
                idCard: '',  //法人姓名
                legalPerson_phone: '',	//法人联系电话
                legalPerson_email: '',  //法人邮箱
                liveAddress: {          //法人现居住地址
                    province: '',
                    city: '',
                    area: '',
                    Street: '',
                },	//现居住地址
                workAddress: {
                    province: '',
                    city: '',
                    area: '',
                    Street: '',
                },	//现办公地址
            },   
            companyInfo: {
                companyName: '', 	//企业名称
                creditCode: '',   //统一社会信用代码
                legalPersonName: '', //法人姓名
                businessHours: '', //企业经营时长
                salesVolume: '', //近一年总销售额
                returnRate: '', //近一年退货率
                shopHours: '', 	//店铺经营时长
                salesShare: '',   //近一年销售占比
                closingRate: '', //封店率
                creditReporting: '', //征信状况
                creditEnquiryFrequency: '', //征信查询次数
                openingBank: '', //开户行
                openingBankAccount: '', //开户行账号
                logisticsCooperationDuration: '', //需放款企业物流合作时长
                workAddress: {
                    province: '',
                    city: '',
                    area: '',
                    Street: '',
                }, //法人现办公地址
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
            guaranteeRules: {
                guaranteeName: [
                    { required: true, message: '请输入担保人姓名', trigger: 'blur' },
                    { validator: nameReg, trigger: 'blur' },
                ],
                guaranteeCard: [
                    { required: true, message: '请输入担保人身份证号', trigger: 'blur' },
                    { min: 18, max: 18,  message: '请输入正确的担保人身份证号', trigger: 'blur' },
                ],
                guaranteeTelephone: [
                    { required: true, message: '请输入担保人手机号', trigger: 'blur' },
                    { min: 11, max: 11,  message: '请输入正确的担保人手机号', trigger: 'blur' },
                ],
                guaranteeEmail: [
                    { required: true, message: '请输入担保人邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur'},
                ] ,
                liveAddress: [
                    { required: true, validator: checkAdd,  trigger: 'blur' },
                ],
                workAddress: [
                    { required: true, validator: checkAdd,  trigger: 'blur' },
                ],
                // cardWrap: [
                //     { required: true, validator: checkCard,  trigger: 'blur', },
                // ]     
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
                    let controllerInfo = JSON.parse(JSON.stringify(this.controllerInfo));
                    this.enterpriseInfo.legalPersonName = controllerInfo.loanName
                    this.enterpriseInfo.idCard = controllerInfo.loanCard
                    this.enterpriseInfo.legalPersonEmail = controllerInfo.loanEmail
                    this.enterpriseInfo.legalPersonPhone = controllerInfo.loanTelephone
                    this.enterpriseInfo.liveAddress = controllerInfo.address
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
                    // Object.assign(this.guaranteeInfo, {idFront: this.guaranteeInfo.cardWrap.idFront, idBack: this.guaranteeInfo.cardWrap.idBack})
                    let obj = {
                        controllerInfo: this.controllerInfo,
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
        // delPic(type) {
        //     if(this.isFrist) return
        //     this.$set(this.guaranteeInfo.cardWrap, type, '');
        // },
        onSelected(data) {
            switch(this.isActive) {
                case 1:
                    Object.assign(this.controllerInfo.liveAddress, {province: data.province.value, city: data.city.value, area: data.area.value})
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
        // uploadSuccess(response, file, fileList) {
        //     if(!response.code) {
        //         this.$set(this.guaranteeInfo.cardWrap, this.picId, response.data.replace(/\\/g,"/"));
        //     }
        // },
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
.step:nth-child(1)::after, .step:nth-child(2)::after {
    display: block;
    position: absolute;
    left: 130px;
    top: 16px;
    content: '';
    width: 100px;
    height: 1px;
    background: #EFEFEF;
}
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