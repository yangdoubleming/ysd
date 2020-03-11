<template>
    <section style="padding: 5px 54px">
        <!-- <el-card class="box-card" shadow="hover"> -->
            <!-- <div slot="header" class="clearfix">
                <span>请根据您合作的支付公司进行授权：</span>
            </div> -->
             <div class="clearfix">
                <span>支付授权 <span style="color: #EB105C;font-size: 12px">* 必操作项</span></span>
            </div>
            <div class="content">
                <PayCompany v-for="item in companyList" :key="item.name" :logisticsInfo="item"></PayCompany>
            </div>
        <!-- </el-card> -->
    </section>
</template>

<script>
    import PayCompany from './payCompany'
    import paypalLogo from '@/assets/register/paypal_logo.png'
    import airwallexLogo from '@/assets/register/airwallex_logo.png'
    import payoneerLogo from '@/assets/register/payoneer_logo.png'
    import pingpongLogo from '@/assets/register/pingpong_logo.png'
    import onerwayLogo from '@/assets/register/onerway_logo.png'
    import worldfirstLogo from '@/assets/register/worldfirst_logo.png'
    import llzfLogo from '@/assets/register/llzf_logo.png'
    import ipaylinksLogo from '@/assets/register/ipaylinks_logo.png'
    import worldpayLogo from '@/assets/register/worldpay_logo.png'
    import wyzfLogo from '@/assets/register/wyzf_logo.png'
    import qbLogo from '@/assets/register/qb_logo.png'
    import dfLogo from '@/assets/register/df_logo.png'
    import yilianLogo from '@/assets/register/yilian_logo.png'

    export default {
        components: {
            PayCompany,
        },
        data() {
            return {
                companyList:[
                    {name:"易联支付",logo:yilianLogo},
                    {name:"Paypal",logo:paypalLogo},
                    {name:"Airwallex",logo:airwallexLogo},
                    {name:"Payoneer",logo:payoneerLogo},
                    {name:"PingPong",logo:pingpongLogo},
                    {name:"OnerWay",logo:onerwayLogo},
                    {name:"WorldFirst",logo:worldfirstLogo},
                    {name:"连连支付",logo:llzfLogo},
                    {name:"iPayLinks",logo:ipaylinksLogo},
                    {name:"WorldPay",logo:worldpayLogo},
                    {name:"网易支付",logo:wyzfLogo},
                    {name:"钱宝",logo:qbLogo},
                    {name:"鼎付",logo:dfLogo},
                ]
            };
        },
        created(){
            
        },
        mounted(){
            
        },
        methods: {
        }
    };
</script>

<style scoped>
    .box-card{
        width:818px;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>