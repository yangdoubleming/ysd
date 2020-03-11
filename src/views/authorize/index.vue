<template>
    <section class="tab-box">
        <div class="container">
            <el-tabs :tab-position="tabPosition" type="card" :value="type" class="tab" style="margin:30px;">
                <el-tab-pane label="店铺授权" name='store'>
                    <StoreAuthorize></StoreAuthorize>
                </el-tab-pane>
                <el-tab-pane label="物流授权" name='logistics'>
                    <LogisticsAuthorize></LogisticsAuthorize>
                </el-tab-pane>
                <el-tab-pane label="支付授权" name='pay'>
                    <PayAuthorize></PayAuthorize>
                </el-tab-pane>
            </el-tabs>
            <div class="submit-btn" @click="goBack">返回</div>
        </div>
    </section>
</template>
<script>
    import StoreAuthorize from './storeAuthorize'
    import PayAuthorize from './payAuthorize'
    import LogisticsAuthorize from './logisticsAuthorize'

    export default {
        components: {
            StoreAuthorize,
            LogisticsAuthorize,
            PayAuthorize
        },
        data() {
            return {
                tabPosition: 'top',
                type:'store'
            };
        },
        created(){
            this.type = this.$route.query.type || 'store'
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            }
        }
    };
</script>
<style>
    .el-tabs__item {
        font-size: 20px;
    }
    .tab-box{
        /* width: 96%;
        margin: 30px auto; */
    }
    .submit-btn{
        width: 130px;
        height: 40px;
        margin: 20px auto;
        background-image: url(../../assets/register/btn-bg.png);
        font-size: 16px;
        color:white;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
    .tab .el-tabs__item.is-active, .tab .el-tabs__item:hover {
        color: #E51E5F;
    }
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
        background: white;
    }

</style>