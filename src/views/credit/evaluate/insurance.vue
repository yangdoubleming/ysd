<template>
    <section>
        <div class="evaluate-content">
            <img :src="iconStore" class="icon-img">
            <div class="word-box">
                <div class="up">保险测评</div>
                <div class="mid">过往的投保记录有助于信用提升</div>
                <div class="down"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
            </div>
            <div class="test-box">
                <div class="test" @click="showDhGateDialog">去测评</div>
                <img :src="iconRight" v-if="status">
                <img :src="iconWrong" v-else>
            </div>
        </div>
        <el-dialog
            title=""
            :visible.sync="dhGateDialogVisible"
            :close-on-click-modal="modelStatus"
            :center="dhGateCenter"
            width="600px">
            <div class="evaluate-content">
                <img :src="iconSellerRisks" class="icon-img">
                <div class="word-box">
                    <div class="up">卖家险</div>
                    <div class="down-in"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
                </div>
                <div class="test-box">
                    <div class="test" @click="showDhGateDialog">去测评</div>
                    <div class="test" @click="showDhGateDialog" style="margin-top:15px;"><router-link to='http://www.dowsure.com/list-2-1.html'>购买</router-link></div>
                </div>
            </div>
            <div class="evaluate-content">
                <img :src="iconRealThing" class="icon-img">
                <div class="word-box">
                    <div class="up">正品险</div>
                    <div class="down-in"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
                </div>
                <div class="test-box">
                    <div class="test" @click="showDhGateDialog">去测评</div>
                    <div class="test" @click="showDhGateDialog" style="margin-top:15px;"><router-link to='http://www.dowsure.com/list-4-1.html'>购买</router-link></div>
                </div>
            </div>
            <div class="evaluate-content">
                <img :src="iconLogistics2" class="icon-img">
                <div class="word-box">
                    <div class="up">物流险</div>
                    <div class="down-in"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
                </div>
                <div class="test-box">
                    <div class="test" @click="showDhGateDialog">去测评</div>
                    <div class="test" @click="showDhGateDialog" style="margin-top:15px;"><router-link to='http://www.dowsure.com/list-3-1.html'>购买</router-link></div>
                </div>
            </div>
            <div class="evaluate-content">
                <img :src="iconTariffs" class="icon-img">
                <div class="word-box">
                    <div class="up">关税险</div>
                    <div class="down-in"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
                </div>
                <div class="test-box">
                    <div class="test" @click="showDhGateDialog">去测评</div>
                    <div class="test" @click="showDhGateDialog" style="margin-top:15px;"><router-link to='http://www.dowsure.com/list-59-1.html'>购买</router-link></div>
                </div>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import iconStore from '@/assets/register/icon-insurance.png'
    import iconRight from '@/assets/register/icon-right.png'
    import iconWrong from '@/assets/register/icon-wrong.png'
    import iconSellerRisks from '@/assets/register/icon-sellerRisks.png'
    import iconRealThing from '@/assets/register/icon-realThing.png'
    import iconLogistics2 from '@/assets/register/icon-logistics2.png'
    import iconTariffs from '@/assets/register/icon-tariffs.png'

    export default {
        components: {
        },
        data() {
            return {
                iconStore,
                iconRight,
                iconWrong,
                status:true,
                modelStatus:false,
                dhGateDialogVisible: false,
                dhGateCenter: true,
                setWidth:'520px',
                loading:false,
                iconSellerRisks,
                iconRealThing,
                iconLogistics2,
                iconTariffs
            };
        },
        created(){
            
        },
        mounted(){
            
        },
        methods: {
            showDhGateDialog(){
                this.dhGateDialogVisible = true
            },
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../evaluate.css";
    @import "../evaluate.scss";
</style>