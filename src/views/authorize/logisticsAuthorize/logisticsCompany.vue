<template>
    <section>
        <div class="authorize-box" style="position:relative">
            <div v-show="logisticsInfo.name!='永利八达通'&&logisticsInfo.name!='万邑通'&&logisticsInfo.name!='友和道通'&&logisticsInfo.name!='泛鼎'" style="position:absolute;width:326px;height:140px;background:white;opacity:0.6" @click="$message.warning('暂未开通，敬请期待')"></div>
            <div class="up">
                <img :src="logisticsInfo.logo" class="up-left">
                <a class="up-right" :href="logisticsInfo.url" target="_blank" @click="showDialog(logisticsInfo.name)">
                    <span>{{logisticsInfo.name}}授权</span>
                    <i class="el-icon-arrow-right"></i>
                </a>
            </div>
            <div class="down">
                <div class="down-left">
                    <i class="el-icon-search"></i>
                    <span>查看授权</span>
                </div>
                <div class="down-right">
                    <i class="el-icon-question"></i>
                    <a href="javascript:void(0);" target="_blank">授权帮助</a>
                </div>
            </div>
        </div>
        <AuthorizeDialog :dialogVisible="dialogVisible" @dialogStatusChange="dialogStatusChange"></AuthorizeDialog>
    </section>
</template>

<script>
    import AuthorizeDialog from '../authorizeDialog'
    import { amazonAuthorize, getStation  } from '@/api/authorize'

    export default {
        components: {
            AuthorizeDialog,
        },
        data() {
            return {
                dialogVisible:false
            };
        },
        props: {
            logisticsInfo: {
                type:Object,
                default:() => ({})               
            }
        },
        created(){
        },
        mounted(){
           
        },
        methods: {
           showDialog(name){
               if(name == '永利八达通') {
                    this.dialogVisible = true
               }
           } ,
           dialogStatusChange(val){
               this.dialogVisible = val
           },
           openDig() {
               console.log('11111')
           }
        }
    };
</script>

<style>
    @import "../store.css";
</style>