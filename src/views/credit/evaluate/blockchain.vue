<template>
    <section>
        <div class="evaluate-content">
            <img :src="iconStore" class="icon-img">
            <div class="word-box">
                <div class="up">区块链加密</div>
                <div class="mid">保护信息安全，提升信用累计</div>
                <div class="down"><el-progress :text-inside="true" :stroke-width="15" :percentage="100" status="success"></el-progress></div>
            </div>
            <div class="test-box">
                <div class="test" @click="showDhGateDialog">去测评</div>
                <img :src="iconRight" v-if="status">
                <img :src="iconWrong" v-else>
            </div>
        </div>
        <el-dialog
            title="区块链加密"
            :visible.sync="dhGateDialogVisible"
            :close-on-click-modal="modelStatus"
            :center="dhGateCenter"
            :width="setWidth">
            <el-form  
                label-width="120px" 
                v-loading="loading"
                element-loading-text="授权中"
                element-loading-spinner="el-icon-loading">
                
                <el-form-item label="联系人">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="手机号" >
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item label="企业名称" >
                    <el-input autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="" prop="type">
                    <el-col :span="2">
                        <el-checkbox-group >
                            <el-checkbox label=""></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <span style="color:#606266">同意并签署<label style="color:#409EFF;cursor:pointer;"><a href="./index_files/豆沙包科技产品合作协议.pdf" target="_blank">《征信及综合授权书》</a></label></span>
                </el-form-item>
                
                <el-form-item>
                    <div class="submit-btn" style="margin:0">申请加密</div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    import iconStore from '@/assets/register/icon-blockchain.png'
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
                status:true,
                modelStatus:false,
                dhGateDialogVisible: false,
                dhGateCenter: true,
                setWidth:'520px',
                loading:false,
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