<template>
    <section style="background:white;">
        <div class="banner-box">
            <img :src="banner01" class="banner" />
            <div class="top-title">
                <img :src="step" /> 
            </div>
        </div>
        <router-link to="/infoComplete"><div class="title-apply" style="margin-top:130px;">立即申请</div></router-link>
        <div class="title-word">产品优势</div>
        <img :src="content1" class="imgCLass" />
        <div class="title-word">合作银行</div>
        <div class="bank-box" v-for="(item,index) in picList" :key="index">
            <div class="left">
                <img :src="IMG_URL_show+item.loanBankLogo"/>
            </div>
            <div class="right">
                <div class="up">{{item.loanBank}}</div>
                <div class="down">
                    <div class="d-left">{{item.productDesc}}</div>
                    <div class="d-right title-apply" @click="linkTo(item.id)">立即申请</div>
                </div>
            </div>
        </div>
        <div class="title-word">我们的客户</div>
        <img :src="content2" class="imgCLass" />
        <div class="title-word">合作伙伴</div>
        <img :src="content3" class="imgCLass" style="padding-bottom:50px;" />
        <!-- <div class="bottom">
            <div class="bottom-word">
                <el-checkbox v-model="checkStatus" style="color:black;margin-bottom:15px;">我已阅读并同意<a style="color:red;cursor:pointer;" href="./index_files/授权书.pdf" target="_blank" >《授权书》</a></el-checkbox>
                <div class="submit-btn" @click="jump">马上开通</div>
            </div>
        </div> -->
    </section>
</template>

<script>
    import banner01 from '@/assets/register/banner_01.png'
    import step from '@/assets/register/step.png'
    import content1 from '@/assets/register/content1.png'
    import content2 from '@/assets/register/content2.png'
    import content3 from '@/assets/register/content3.png'
    import content4 from '@/assets/register/content4.png'
    import youchu from '@/assets/register/youchu.jpg'
    import guangda from '@/assets/register/guangda.jpg'
    import jianshe from '@/assets/register/jianshe.jpg'
    import { getLoanProductList } from '@/api/application'
    import { BASE_URL, IMG_URL_show } from '@/utils/config'
export default {
    components: {
    },
    data() {
        return {
            IMG_URL_show,
            banner01,
            step,
            content1,
            content2,
            content3,
            content4,
            youchu,
            guangda,
            jianshe,
            checkStatus:false,
            picList:[]
        }
    },
    computed: {
        
    },
    mounted(){
        getLoanProductList().then(res => {
            this.loading = false
            this.picList = res.data.list
        }).catch(err=>{
            this.loading = false
            this.$message.error(err.msg)
        })  
    },
    methods: {
        linkTo(id){
            this.$router.push({path: `/infoComplete?productId=${id}`})
        },
        jump(){

        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .banner{
        display: block;
        width: 100%;
        margin: 0 auto;
    }
    .banner-box{
        position: relative;
    }
    .title-apply{
        color: white;
        font-size: 16px;
        margin: 40px auto;
        width: 140px;
        height: 40px;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        background: rgba(235, 51, 103, 1);
    }
    .bank-box{
        height: 200px;
        width: 1200px;
        margin: 15px auto;
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #e8f0f2;
        .left{
            float: left;
            width:300px;
            height: 200px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #e8f0f2;
        }
        .right{
            float: left;
            width:900px;
            height: 200px;
            .up{
                font-size: 25px;
                margin-left: 50px;
                margin-top: 30px;
                font-weight: bolder;
            }
            .down{
                width: 900px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                .d-left{
                    margin-left: 50px;
                    color: #333333;
                    font-size: 16px;
                    line-height: 25px;
                    width: 500px;
                }
                .d-right{
                    width: 150px;
                }
            }
        }
    }
    .top-title{
        position: absolute;
        bottom: -90px;
        left: 50%;
        margin-left: -600px;
        height: 156px;
        width: 1200px;
        background: white;
        box-shadow: 0px 3px 5px #e9f0f2;
        z-index: 6;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
   .title-word{
       color: black;
       font-size: 30px;
       text-align: center;
       margin: 40px auto;
   }
   .imgCLass{
       display: block;
       width: 1200px;
       margin:auto;
   }
   .bottom{
    //    margin-top: 30px;
    height: 100px;
    width: 100%;
    position: relative;
   }
   .bottom-word{
       position: absolute;
       top: 16px;
       left: 50%;
       margin-left: -100px;
   }
   .submit-btn{
       cursor: pointer;
        width: 200px;
        height: 35px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        line-height: 35px;
        background: -webkit-linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
        background: linear-gradient(90deg, #950bbe, #fa0391, #fe6caa);
    }
</style>
