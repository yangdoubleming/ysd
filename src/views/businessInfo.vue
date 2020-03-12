<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <div class="loan-box">
                <div class="bank-box">
                    <div class="bankActive" >提前付（一口价）
                        <img :src="gou" style="float:right;margin-top:28px;" />
                    </div>
                </div>
                <div style="margin:10px 50px; margin-top:20px;">
                    <el-alert
                        title="对未来的Wish平台销售回款进行提前收款，最长期限3个月"
                        type="success"
                        show-icon>
                    </el-alert>
                </div>
                <el-form :model="loanFormInfo" :rules="rules" ref="loanFormInfo" style="width:700px;margin:30px 0 30px 30px"
                    label-width="120px" 
                    class="demo-loanFormInfo"
                    v-loading="loading"
                    element-loading-text="加载中"
                    element-loading-spinner="el-icon-loading">
                    <el-form-item label="期望贷款金额" prop="loanAmount">
                        <el-col :span="12">
                            <el-input v-model="loanFormInfo.loanAmount" @blur="getAll"></el-input>
                        </el-col>
                        <span style="color:black;margin-left:10px;">元</span>
                        <div class="down-line">
                            最低1000元
                            <el-progress :percentage="50" :show-text="false" style="width:150px;"></el-progress>
                            最高10000元
                            <el-button type="primary" size="mini" icon="el-icon-upload2">提升额度</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="资金用途" prop="purpose">
                        <el-col :span="12">
                            <el-radio-group v-model="loanFormInfo.purpose">
                                <el-radio-button label="日常资金周转"></el-radio-button>
                                <el-radio-button label="其他"></el-radio-button>
                            </el-radio-group>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="融资期限" prop="loanTerm">
                        <el-col :span="12">
                            {{loanFormInfo.loanTerm}}天
                        </el-col>
                    </el-form-item>
                    <el-form-item label="利率" prop="loanRate">
                        <el-col :span="12">
                            {{loanFormInfo.loanRate}}%/次
                        </el-col>
                    </el-form-item>
                    <el-form-item label="手续费" prop="handlingRate">
                        <el-col :span="12">
                            {{loanFormInfo.handlingRate}}%/次
                        </el-col>
                    </el-form-item>
                    <el-form-item label="费用总计" prop="totalAmount">
                        <el-col :span="12" style="color:#F36D6D">
                            {{loanFormInfo.totalAmount}}&nbsp;元
                        </el-col>
                    </el-form-item>
                    <el-form-item label="利息" prop="interestAmount">
                        <el-col :span="12" style="color:#F36D6D">
                            {{loanFormInfo.interestAmount}}&nbsp;元
                        </el-col>
                    </el-form-item>
                    <div class="btn" style="margin-left:120px;" @click="submitRegisterForm('loanFormInfo')">下一步</div>
                </el-form>
            </div>
        </div> 
    </section>
</template>

<script>
import gou from '@/assets/register/gou.png'
import Head from './layout/head'
export default {
  components: {
    Head,              // 步骤条
  },
  data() {
    return {
            loanFormInfo: {
                loanAmount:'',
                loanRate:'1.95',
                loanTerm: '90',
                purpose: '日常资金周转',
                handlingRate:'0.2',
                totalAmount: '',
                interestAmount:''
            },
            num:0,
            activeNum:'0',
            activeNumber:'-1',
            loading:false,
            check:false,
            gou,
            bankList:[{}],
            rules: {
                loanAmount: [
                    { required: true, message: '请输入期望贷款金额', trigger: 'blur' },
                    { pattern: /^[0-9]*$/, message: '只能输入数字' }
                ]
            },
        }
    },
    computed: {
    },
    mounted(){
        localStorage.setItem('user', JSON.stringify({token:this.$route.query.token,telephone:this.$route.query.telephone,}))
    },
    methods: {
        getAll(){
            this.loanFormInfo.totalAmount = (this.loanFormInfo.loanAmount*(this.loanFormInfo.loanRate/100)).toFixed(2)
            this.loanFormInfo.interestAmount = (this.loanFormInfo.loanAmount*(this.loanFormInfo.handlingRate/100)).toFixed(2)
        },
      //注册
        submitRegisterForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    localStorage.setItem('loanFormInfo', JSON.stringify(this.loanFormInfo))
                    this.$router.push({path: '/shopAuth'})
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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
            margin-top: 30px;
            overflow: hidden;
            .bank-box{
                margin-top: 30px;
                overflow: hidden;
                .bank{
                    float: left;
                    margin-left: 20px;
                    margin-left: 30px;
                    width: 220px;
                    height: 60px;
                    border: 1px solid #ebebed;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 60px;
                    cursor: pointer;
                }
                .bankActive{
                    float: left;
                    margin-left: 20px;
                    margin-left: 50px;
                    font-size: 12px;
                    width: 200px;
                    height: 50px;
                    border: 1px solid #409EFF;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 50px;
                    cursor: pointer;
                    color: #4e4d4d;
                }
               
            }
            .annotation{
                clear: both;
                color: #a1a1a1;
                font-size: 12px;
                margin-left: 50px;
                margin-top: 15px;
            }
        }
    .del-icon{
    position: absolute;
    top: -8px;
    right: -8px;
}
.down-line{
    width: 400px;
    font-size: 12px;
    color:#606266;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

