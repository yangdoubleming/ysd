<template>
    <section>
        <div class="evaluate-content">
            <img :src="iconStore" class="icon-img">
            <div class="word-box">
                <div class="up">物流测评</div>
                <div class="mid">授权物流数据提升企业信用</div>
                <div class="down"><el-progress :text-inside="true" :stroke-width="15" :percentage="70" status="success"></el-progress></div>
            </div>
            <div class="test-box">
                <div class="test"><router-link to='/authorize?type=logistics'>去测评</router-link></div>
                <img :src="iconRight" v-if="status">
                <img :src="iconWrong" v-else>
            </div>
        </div>
    </section>
</template>

<script>
    import iconStore from '@/assets/register/icon-logistics.png'
    import iconRight from '@/assets/register/icon-right.png'
    import iconWrong from '@/assets/register/icon-wrong.png'

    export default {
        components: {
        },
        data() {
            return {
                iconStore,
                iconRight,
                iconWrong,
                status:true
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

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../evaluate.scss";
</style>