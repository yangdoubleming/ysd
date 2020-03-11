<template>
    <section style="width:818px;">
        <div class="img-box">
            <img :src="shenqing" /> 
            <div class="word-box">
                <div style="font-size: 30px;margin-bottom:10px;">6个月  先息后本</div>
                <div>日利息低至0.017%</div>
                <div>用款时间长达180天</div>
                <div>借还简便，无后顾之忧</div>
            </div>
            <!-- <router-link to="/loanRecords"> -->
                <div class="detail" @click="getActive">查看详情</div>
            <!-- </router-link> -->
        </div>
        <div style="text-align: center;">
            <button class="login-in" @click="getActive">我要申请</button>

        </div>

    </section>
</template>

<script>
import {checkIsCiCompanyLoan} from '@/api/application'
import shenqing from '@/assets/register/shenqing.png'
export default {
    components: {
    },
    data() {
        return {
            shenqing,
        }
    },
    computed: {
        
    },
    created(){
    },
     methods: {
        getActive() {
            checkIsCiCompanyLoan().then(res => {
                if(!res.code && res.data) {
                    this.$emit('getActive', 6)
                } else {
                    this.$message('已经申请过该产品，请勿短时间内重复申请');
                }
            })
            
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .img-box, .img-box img{
        width: 818px;
        height: 245px;
        // margin: 70px auto;
        position: relative;
    }
    .word-box{
        position: absolute;
        color: white;
        font-size: 16px;
        line-height: 24px;
        top: 65px;
        left: 60px;
    }
    .detail{
        width: 200px;
        height: 48px;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        line-height: 48px;
        cursor: pointer;
        position: absolute;
        top: 88px;
        right: 60px;
        border: #fff 2px solid;
    }
    .login-in{
        display: inline-block;
        margin: 60px auto;
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
        // position: absolute;
        // top: 88px;
        // right: 60px;
        border: #fff 2px solid;
    }
</style>
