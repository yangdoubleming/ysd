<template>
    <section style="padding: 5px 54px">
        <!-- <el-card class="box-card" shadow="hover"> -->
            <!-- <div slot="header" class="clearfix">
                <span>请根据您店铺所在平台进行授权：</span>
            </div> -->
            <div class="clearfix">
                <span>店铺授权 <span style="color: #EB105C;font-size: 12px">* 必操作项</span></span>
            </div>
            <div class="content">
                <Amazon></Amazon>
                <Ebay></Ebay>
                <DHGate></DHGate>
                <Wish></Wish>
                <Shopee></Shopee>
                <Cdiscount></Cdiscount>
                <AliExpress></AliExpress>
                <!-- <div class="authorize-box qidai">
                    敬请期待
                </div> -->
            </div>
        <!-- </el-card> -->
    </section>
</template>

<script>
    import Amazon from './amazonAuthorize'
    import Ebay from './ebayAuthorize'
    import Wish from './wishAuthorize'
    import DHGate from './dhGateAuthorize'
    import Shopee from './shopeeAuthorize'
    import Cdiscount from './cdiscountAuthorize'
    import AliExpress from './aliExpressAuthorize'
    
    export default {
        components: {
            Amazon,
            Ebay,
            Wish,
            DHGate,
            Shopee,
            Cdiscount,
            AliExpress
        },
        data() {
            return {
                
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
    .box-card {
        /* width: 90%;
        margin: 50px auto; */
        width: 818px;
    }
    .linkWord{
        color:#409EFF;
        text-align:center;
        display: block;
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .qidai{
        background: #e5e5e5;
        font-size: 20px;
        text-align: center;
        line-height: 140px;
        letter-spacing: 2px;
    }
</style>