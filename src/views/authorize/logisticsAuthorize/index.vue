<template>
    <section style="padding: 5px 54px">
        <!-- <el-card class="box-card" shadow="hover"> -->
            <!-- <div slot="header" class="clearfix">
                <span>请根据您合作的物流公司进行授权：</span>
            </div> -->
            <div class="clearfix">
                <span>物流授权 <span style="color: #EB105C;font-size: 12px">* 必操作项</span></span>
            </div>
            <div class="content">
                <LogisticsCompany v-for="item in companyList" :key="item.name" :logisticsInfo="item"></LogisticsCompany>
            </div>
        <!-- </el-card> -->
    </section>
</template>

<script>
    import LogisticsCompany from './logisticsCompany'
    import unitopLogo from '@/assets/register/unitop_logo.png'
    import sfcLogo from '@/assets/register/sfc_logo.png'
    import stLogo from '@/assets/register/st_logo.png'
    import alkjdswlLogo from '@/assets/register/alkjdswl_logo.png'
    import yldLogo from '@/assets/register/yld_logo.png'
    import lhytLogo from '@/assets/register/lhyt_logo.png'
    import ytwlLogo from '@/assets/register/ytwl_logo.png'
    import hqjdLogo from '@/assets/register/hqjd_logo.png'
    import sywlLogo from '@/assets/register/sywl_logo.png'
    import zzwlLogo from '@/assets/register/zzwl_logo.png'
    import yslgjwlLogo from '@/assets/register/yslgjwl_logo.png'
    import zwydhLogo from '@/assets/register/zwydh_logo.png'
    import fandingLogo from '@/assets/register/fanding_logo.png'
    import badatongLogo from '@/assets/register/badatong_logo.jpg'
    import wanyitongLogo from '@/assets/register/wanyitong_logo.png'
    export default {
        components: {
            LogisticsCompany,
        },
        data() {
            return {
                companyList:[
                    {name:"万邑通",logo:wanyitongLogo,url:'https://www.winit.com.cn/'},
                    {name:"永利八达通",logo:badatongLogo,url:'http://epost.8dt.com/'},
                    {name:"友和道通",logo:unitopLogo,url:'http://www.uni-top.com.cn/'},
                    {name:"泛鼎",logo:fandingLogo,url:'http://www.zjfanding.com/'},
                    {name:"三态速递",logo:sfcLogo},
                    {name:"申通快递授权",logo:stLogo},
                    {name:"阿里跨境电商物流",logo:alkjdswlLogo},
                    {name:"邮立达",logo:yldLogo},
                    {name:"联合运通",logo:lhytLogo},
                    {name:"云途物流",logo:ytwlLogo},
                    {name:"环球捷达",logo:hqjdLogo},
                    {name:"顺友物流",logo:sywlLogo},
                    {name:"卓志物流",logo:zzwlLogo},
                    {name:"易时连国际物流",logo:yslgjwlLogo},
                    {name:"中外运敦豪",logo:zwydhLogo},
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
        width: 818px;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>