<template>
    <section style="position: relative;">
        <img :src="scoreBanner" class="scoreBanner">
        <!-- <div class="up-credit" v-if='showBtn'><router-link to='/credit'>提升信用分</router-link></div> -->
    </section>
</template>

<script>
    import scoreBanner from '@/assets/register/score.png'

    export default {
        components: {
        },
        data() {
            return {
                scoreBanner,
                showBtn:false
            };
        },
        created(){
            console.log(1111,this.$route.path)
            if(this.$route.path=='/insuranceInfo'){
                this.showBtn = true;
            }else{
                this.showBtn = false;
            }
        },
        mounted(){
            
        },
        methods: {
        }
    };
</script>

<style>
    .scoreBanner{
        width: 100%;
        display: block;
        margin-bottom: 50px;
    }
    .up-credit{
        position: absolute;
        width: 145px;
        height: 45px;
        background: white;
        color: #e63a3d;
        font-size: 19px;
        text-align: center;
        line-height: 45px;
        left: 50%;
        margin-left: -74px;
        bottom: 50px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>