<template>
    <section style="width:818px;border:1px solid #E5E5E5" v-loading="listLoading" element-loading-text="加载中">
        <div class="wrap-step">
            <div class="step" :class="{active: isCompany}">
                <img :src="isCompany ? companyActive : company" alt="">
                <span>申请额度</span>
            </div>
           
            <div class="step" :class="{active: !isCompany}">
                <img :src="!isCompany ? personalActive : personal" alt="">
                <span>提交申请</span>
            </div>
        </div>
        <el-form
            v-if="isCompany"
            :model="ruleForm" 
            :rules="rules" 
            ref="ruleForm" 
            label-width="240px" 
            class="demo-ruleForm" >
            <el-form-item label="选择您心仪的类型">
                <el-select 
                    disabled
                    v-model="productDay" 
                    placeholder="请选择"
                    @change='changeSelect'>
                    <el-option
                        v-for="(item, index) in data"
                        :key="item.id"
                        :label="`${item.productDay}天`"
                        :value="index">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="您想收款的金额(人民币)" prop="loanAmount" class="mar-inp">
                <el-input v-model.number="ruleForm.loanAmount" maxlength="3" placeholder="最高可贷五百万">
                    <!-- <template slot="append">万元</template> -->
                </el-input>
                万元
            </el-form-item>
            <el-form-item label="银行日利率低至" class="mar-inp">
                <span>{{activeObj.bankRate}} %</span>
                <!-- <el-input disabled :value="`${activeObj.bankRate}%`"></el-input> -->
            </el-form-item>
            <el-form-item label="保险年利率低至" class="mar-inp">
                <span>{{activeObj.insuranceRate}} %</span>
                <!-- <el-input disabled :value="`${activeObj.insuranceRate}%`"></el-input> -->
            </el-form-item>
            <el-form-item label="手续费：" class="mar-inp">
                <span>{{activeObj.feeRate}} %</span>
                <!-- <el-input disabled :value="`${activeObj.feeRate}%`"></el-input> -->
            </el-form-item>
            <el-form-item label="银行利息费用(人民币)" class="mar-inp">
                <span>{{bank}} 元</span>
                <!-- <el-input disabled :value="`${bank}`"></el-input> -->
            </el-form-item>
            <el-form-item label="保险利息费用(人民币)">
                <span style="color: #FA770E; font-size:18px">{{insurance}} <span style="color: #182B38; font-size: 14px">元</span></span>
                <!-- <el-input disabled :value="`${insurance}`"></el-input> -->
            </el-form-item>
            <!-- <el-form-item label="预估费用总计(元)：" prop="totalCost">
                <el-input disabled :value="`${count}`"></el-input>
            </el-form-item> -->
            <el-form-item>
                <div style="color:#eb105c;font-size:14px;">提示：1.保险费用按6个月前期一次性扣除，对应额度半年仅需缴纳一次。</div>
                <div style="color:#eb105c;font-size:14px;"><span style="opacity:0;">提示：</span>2.具体费用以实际签署的银行贷款合同及保险合同为准。</div>
            </el-form-item>
            <el-form-item label="当前手机号：" prop="contactPhone" style="border-top: 1px solid #E5E5E5;">
                <span>+86 {{ruleForm.contactPhone | phone}}</span>
                <!-- <el-input v-model="ruleForm.contactPhone" maxlength="11"></el-input> -->
            </el-form-item>
             <el-form-item label="图片验证码"  prop="photoCode">
                 <div  style="display: flex;align-items: center;">
                    <el-input v-model="ruleForm.photoCode" style="width: 180px;margin-right: 10px;"></el-input>
                    <img style="width: 110px; height: 30px;margin-right: 15px;" :src="photoCodeUrl" />
                    <el-button @click="getPhotoCode" type='text'> 换一张</el-button>
                 </div>
                
            </el-form-item>
            <el-form-item label="验证码"  prop="verifyCode">
                <el-input v-model="ruleForm.verifyCode" style="margin-right: 10px;width:180px"></el-input>
                <el-button @click="getCode" :disabled="btnStatus">{{paracont}}</el-button>
            </el-form-item>
            <el-form-item label=""  style="border-top: 1px solid #E5E5E5;">
                <el-col :span="1">
                    <el-checkbox-group v-model="check">
                        <el-checkbox label="" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-col>
                <span style="color:#606266">我已阅读并同意
                    <a style="color:#409EFF;cursor:pointer;" href="./index_files/豆沙包平台服务协议.pdf" target="_blank" >《豆沙包平台服务协议》</a>
                </span>
            </el-form-item>
            <el-form-item>
                <div class="login-in" @click="submitForm('ruleForm')">确认申请</div>
            </el-form-item>
        </el-form>
        <div v-else style="text-align:center;margin: 68px 0;">
            <div class="img-wrap">
                <img src="../../assets/application/apply-success.png" alt="">
                <span style="font-size: 24px;"> 申请已提交</span>
            </div>
            <p style="color: #A5A5A5">我们将于24小时内完成审核，请您耐心等候。</p>
            <button class="btn" @click="$emit('getActive', 7)">确定</button>
        </div>
    </section>
</template>

<script>
    import { BASE_URL } from '@/utils/config'
    import { getCiInterestRateList, getVerifyCode, editCiCompanyLoan } from '@/api/register'
    import {loanInterest} from '@/api/application'
    import { getUser } from '@/utils/auth'

    export default {
        data() {
            return {
                isCompany: true,
                company: require('../../assets/application/lines.png'),
                companyActive: require('../../assets/application/linesActive.png'),
                personal: require('../../assets/application/submit.png'),
                personalActive: require('../../assets/application/submitActive.png'),
                ruleForm: {
                    loanTerm: 180,
                    // interestRateId:"",//接口6查询出的数据，某条数据的id
                    loanAmount: null,// 贷款金额,
                    contactPhone: JSON.parse(localStorage.getItem('loanInfo')).loanTelephone,
                    // bankMoney:"", //预估贷款期间银行利息费用,
                    // insuranceMoney:"", //预计贷款期间保险利息费用,
                    // totalCost:'', //预计总费用
                    // telephone:"", //手机号,
                    // verifyCode:"",//短信验证码
                },
                rules: {
                    loanAmount: [
                        { required: true, message: '请输入贷款金额', trigger: 'blur' },
                        { pattern: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g, message: '请输入正确的数字', trigger: 'blur' }
                    ],
                    photoCode: [
                        { required: true, message: '请输入图形验证码', trigger: 'blur' },
                    ],
                    verifyCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    contactPhone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                    ]
                },
                photoCodeUrl:'',
                listLoading:false,
                check:false,
                loginDialogVisible:false,
                paracont:'获取验证码',
                btnStatus:false,
                getCodeStatus:false,
                productDay: '180天',
                bankRate:'',
                insuranceRate:'',
                feeRate:'',
                data: [],
                activeObj: {}
            }
        },
        filters: {
            phone: function(str) {
                var pat = /(\d{3})\d*(\d{4})/
                var b = str.replace(pat,'$1****$2');
                return b
            }
        },
        computed: {
            bank: function() {
                if(this.ruleForm.loanAmount) {
                    return (this.ruleForm.loanAmount * this.activeObj.bankRate * this.activeObj.productDay).toFixed(2)
                }
                return 0
            },
            insurance: function() {
                if(this.ruleForm.loanAmount) {
                    return (this.ruleForm.loanAmount * this.activeObj.insuranceRate / 2).toFixed(2)
                }
                return 0
            },
            count: function() {
                if(this.bank && this.insurance) {
                    return (+this.bank + (+this.insurance)).toFixed(2)
                }
                return 0
            }


        },
        mounted() {
            this.getPhotoCode()
            // this.getPhone()
            this.getCiInterestRateList()
        },
        methods: {
            changeSelect(index) {
                this.activeObj = this.data[index]
            },
            submitForm(formName) {
                this.listLoading = true
                if(this.check){
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            editCiCompanyLoan(Object.assign(this.ruleForm, { 
                                insuranceMoney: this.insurance, 
                                handlingRate: 0,
                                totalFeeRate: this.count, 
                                bankMoney:this.bank, 
                                loanAmount: this.ruleForm.loanAmount * 10000  //万元
                            })).then(response => {
                                this.listLoading = false
                                this.isCompany = !this.company  
                            }).catch(err=>{
                                this.$message.error(err.msg);
                                this.listLoading = false
                            })
                        } else {
                            this.listLoading = false
                            console.log('error submit!!');
                            return false;
                        }
                    });
                }else{
                    this.listLoading = false
                    this.$message.warning('请先阅读并同意《豆沙包商户平台注册协议》')
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getPhotoCode(){
                var time = new Date().getTime()
                this.photoCodeUrl = `${BASE_URL}/code/photoCode?${time}`
            },
            //获取验证码
            getCode () {
                this.getCodeStatus = true;
                var second = null, timePromise = undefined;
                if (second === null) {
                    second = 60;
                    if (!this.ruleForm.contactPhone) {
                        this.$message({message:'手机号不能为空',type:'warning'})
                        second = null;
                        return false;
                    } else {
                        getVerifyCode({phoneNo:this.ruleForm.contactPhone,photoCode:this.ruleForm.photoCode}).then(result => {
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
            getCiInterestRateList(){
                this.listLoading = true
                loanInterest().then(res => {
                    this.listLoading = false
                    this.data = res.data
                    this.activeObj = res.data[0]
                })
                // getCiInterestRateList({productType:4}).then(response => {
                //     this.listLoading = false
                //     this.ruleForm.interestRateId = response.data.ciInterestRateList[0].id
                //     this.bankRate = response.data.ciInterestRateList[0].bankRate
                //     this.insuranceRate = response.data.ciInterestRateList[0].insuranceRate
                //     this.feeRate = response.data.ciInterestRateList[0].feeRate
                //     this.productDay = response.data.ciInterestRateList[0].productDay
                // }).catch(err=>{
                //     this.$message.error(err.msg);
                //     this.listLoading = false
                // })
            },
            getPhone(){
                if(localStorage.getItem('telephone')&&JSON.parse(localStorage.getItem('telephone')).telephone){
                    this.ruleForm.contactPhone = JSON.parse(localStorage.getItem('telephone')).telephone
                }else{
                    this.$message.warning("请先完善借款人手机号等信息");
                    this.$router.push({path:'/loanDetails'})
                }
            }
        }
    }   

</script>

<style  scoped>
.mar-inp >>> {
    margin-bottom: 10px;
}
.demo-ruleForm  >>> label{
    font-weight: inherit;
    color: #182B38;
}
.img-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrap{
    width: 818px;
    border: 1px solid #D9D6D5;
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
.step:nth-child(1)::after {
    display: block;
    position: absolute;
    left: 108px;
    top: 16px;
    content: '';
    width: 52px;
    height: 1px;
    background: #EFEFEF;
}
.step:nth-child(2)::before {
    display: block;
    position: absolute;
    right: 108px;
    top: 16px;
    content: '';
    width: 52px;
    height: 1px;
    background: #EFEFEF;
}
.active:nth-child(1)::after, .active:nth-child(2)::before{
    background: #E51E5F;
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
    border-bottom: 1px solid #D9D6D5;   
}
    .login-in{
        width: 200px;
        height: 48px;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        line-height: 48px;
        background: -webkit-linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
        background: linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
        cursor: pointer;
    }
    .demo-ruleForm{
        margin-top: 20px;
    }
    .demo-ruleForm .el-input {
        width: 300px;
    }
    .btn{
        margin-top: 54px;
        color: #fff;
        background: #E51E5F;
        border: 0;
        border-radius: 2px;
        padding: 15px 62px;
    }
</style>