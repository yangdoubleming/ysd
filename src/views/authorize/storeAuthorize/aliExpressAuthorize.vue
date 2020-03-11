<template>
    <div class="authorize-box" style="position:relative">
        <div style="position:absolute;width:326px;height:140px;background:white;opacity:0.6" @click="$message.warning('暂未开通，敬请期待')"></div>
        <div class="up">
            <img :src="aliExpressLogo" class="up-left">
            <div class="up-right" style="width: 180px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
                <span>新增并授权阿里速卖通店铺</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="down">
            <div class="down-left">
                <i class="el-icon-search"></i>
                <span>查看授权店铺</span>
            </div>
            <div class="down-right">
                <i class="el-icon-question"></i>
                <a href="javascript:void(0);" target="_blank">查看授权帮助</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { amazonAuthorize, getStation  } from '@/api/authorize'
    import aliExpressLogo from '@/assets/register/aliExpress_logo.png'

    export default {
        data() {
            return {
               aliExpressLogo
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

<style>
    @import "../store.css";
</style>