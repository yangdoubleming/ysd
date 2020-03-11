<template>
    <el-dialog
        title="新增授权"
        :visible.sync="myDialogVisible"
        :close-on-click-modal="modelStatus"
        :center="center"
        :before-close="closeDialog"
        :width="setWidth">
        <!-- <a class="linkWord" href="javascript:void(0);" target="_blank" >查看授权帮助</a> -->
        <el-form ref="dhGateValidateForm" 
            :rules="rules" 
            label-width="120px" 
            :model="ruleForm">
            <el-form-item label="物流授权token"  prop="authToken" >
                <el-input autocomplete="off" v-model="ruleForm.authToken"></el-input>
            </el-form-item>
<!--             
            <el-form-item label="API令牌密码"  prop="shopName" >
                <el-input autocomplete="off"></el-input>
            </el-form-item> -->
        </el-form>
                
        <div slot="footer">
            <div class="submit-btn" @click="bdtAuthorization">授 权</div>
        </div>
    </el-dialog>
</template>

<script>
    import { amazonAuthorize, getStation, bdtAuthorization  } from '@/api/authorize'

    export default {
        data() {
            return {
                modelStatus:false,
                center: true,
                setWidth:'520px',
                myDialogVisible:false,
                ruleForm: {
                    authToken: '',
                },
                rules:{
                    authToken: [
                        { required: true, message: '请输入物流授权token', trigger: 'blur' },
                    ]
                }

            };
        },
        props: {
           dialogVisible:{
               type:Boolean,
               default:false
           }
        },
        watch: {
            dialogVisible(val) {
                this.myDialogVisible = val;
                
            }
        },
        created(){
        },
        mounted(){
           
        },
        methods: {
            closeDialog(){
                this.myDialogVisible = false;
                this.$emit('dialogStatusChange',false);
            },
            bdtAuthorization() {
                bdtAuthorization({authToken: this.ruleForm.authToken}).then(res => {
                    this.$message.success(res.msg);
                    this.myDialogVisible = false;
                }).catch(error => {
                   this.$message.error(error.msg);
                });
            }
        }
    };
</script>

<style>
    @import "./store.css";
</style>