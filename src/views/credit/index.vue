<template>
    <section>
        <Score></Score>
        <div class="credit-content">
            <div class="title">
                提升信用分
            </div>
            <div class="evaluate-box">
                <Store></Store>
                <Fund></Fund>
            </div>
            <div class="evaluate-box">
                <Registry></Registry>
                <Operator></Operator>
            </div>
            <div class="evaluate-box">
                <Blockchain></Blockchain>
                <Logistics></Logistics>
            </div>
            <div class="evaluate-box">
                <Pay></Pay>
                <Insurance></Insurance>
            </div>
        </div>
        <div class="submit-btn" @click="goBack" style="margin-top:80px;">返回</div>
    </section>
</template>

<script>
    import Score from './score'
    import Fund from './evaluate/fund'
    import Store from './evaluate/store'
    import Registry from './evaluate/registry'
    import Operator from './evaluate/operator'
    import Blockchain from './evaluate/blockchain'
    import Logistics from './evaluate/logistics'
    import Pay from './evaluate/pay'
    import Insurance from './evaluate/insurance'

    export default {
        components: {
            Score,
            Store,
            Fund,
            Registry,
            Operator,
            Blockchain,
            Logistics,
            Pay,
            Insurance
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
            goBack(){
                this.$router.go(-1)
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .credit-content{
        width:1200px;
        margin: 30px auto;
        .title{
            font-size: 30px;
            color: black;
            margin-bottom: 30px;
        }
        .evaluate-box{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 30px;
        }
    }
</style>