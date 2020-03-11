<template>
    <section>
        <img :src="banner1" class="banner" />
        <div class="header">
            <div class="jupm-btn"  @click="linkTo('businessInfo')">
                <img :src="book" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">申请贷款</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
            <div class="jupm-btn" @click="linkTo('loanRecords')">
                <img :src="file" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">我的贷款记录</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
            <div class="jupm-btn" @click="linkTo('authorize')">
                <img :src="set" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">授权管理</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
            <div class="jupm-btn" @click="linkTo('orderList')" v-if="userId=='1130'">
                <img :src="set" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">订单列表</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
            <div class="jupm-btn" @click="linkTo2('credit')" style="opacity:0.4;">
                <img :src="iconInsurance" class="icon-img" style="float:left" />
                <div class="icon-word" style="float:left">跨境卖家信用分</div>
                <img :src="arrow_right" class="arrow-right" style="float:right" />
            </div>
        </div>
    </section>
</template>

<script>
import { getUser } from '@/utils/auth' 
import book from '@/assets/register/book.png'
import file from '@/assets/register/file.png'
import set from '@/assets/register/set.png'
import iconInsurance from '@/assets/register/icon-insurance.png'
import arrow_right from '@/assets/register/arrow_right.png'
import banner1 from '@/assets/register/banner_01.png'
import banner2 from '@/assets/register/banner_02.png'

export default {
    name: 'register',
    data() {
        return {
            banner1:banner1,
            book,
            file,
            set,
            iconInsurance,
            arrow_right,
            userId: getUser().userId,
        }
    },
    computed: {
        
    },
    created(){
        if(document.body.clientWidth<780){
            this.banner1 = banner2
        }else{
            this.banner1 = banner1
        }
    },
    methods: {
        linkTo(val){
            this.$router.push({path:`/${val}`})
        },
        linkTo2(val){
            this.$message.warning('暂未开通，敬请期待！')
            return
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0px auto;
    margin-bottom: 60px;
}
.jupm-btn{
    width: 250px;
    height: 90px;
    background: #f3f5f9;
    border-radius: 10px;
    cursor: pointer;
}
.banner{
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
}
.icon-img{
    width:30px;
    margin: 27px 15px 0 30px
}
.icon-word{
    font-size: 18px;
    color: #262b38;
    line-height: 90px;
}
.arrow-right{
    width: 10px;
    margin: 35px 25px 0px 0px;
}
@media (max-width:780px){
    .header{
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 350px;
    }
    .arrow-right{
        display: none;
    }
    .jupm-btn{
        width: 300px;
        margin-top: 10px;
    }
}
</style>
