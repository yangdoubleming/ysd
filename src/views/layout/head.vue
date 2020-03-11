<template>
    <div class="title-box">
        <el-steps :active="activeNum" :space="wid" align-center style="padding-top:20px;">
            <el-step title="贷款信息"></el-step>
            <el-step title="店铺授权"></el-step>
            <el-step title="补充信息"></el-step>
            <el-step title="提交申请"></el-step>
        </el-steps>
    </div>
</template>

<script>
  
export default {
    // 接受父组件的值
    props: {
        activeNum: Number,
        required: true
    },
    data() {
        return {
            wid:'25%',
        }  
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .title-box{
        width:100%;
        height: 110px;
        background-color: white;
    }
</style>
