<template>
    <footer class="ny-footer">
        <div class="inner-wrap clearfix">
            <div class="left">
                <div class="fnav pc-block">
                    <a href="http://www.dowsure.com/list-64-1.html">资质信息</a>
                    <a href="http://www.dowsure.com/list-8-1.html">关于我们</a>
                    <a href="http://www.dowsure.com/list-6-1.html">商户故事</a>
                    <a href="http://www.dowsure.com/list-7-1.html">常见问题</a>
                    <a href="http://www.dowsure.com/list-21-1.html">新闻中心</a>
                </div>
                <div class="copyright">
                    <a href="http://www.beian.miit.gov.cn/" target="_blank" style="color: white;text-decoration:none;cursor: pointer;">版权所有©  2018 豆沙包科技有限公司 沪ICP备15015443号-1</a></div>
            </div>
            <div class="link pc-block">
                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=2962353314&amp;site=qq&amp;menu=yes" target="_blank"><img src="http://www.dowsure.com/res/lx/images/ico_qq.png"></a>
                <a href="javascript:void(0)" class="weixin">
                    <img src="http://www.dowsure.com/res/lx/images/ico_wx.png">
                    <!-- <div>
                        <img src="http://www.dowsure.com/res/lx/images/weixin.jpg">
                    </div> -->
                </a>
                <a href="https://weibo.com/u/5892923185?refer_flag=1001030108_" target="_blank"><img src="http://www.dowsure.com/res/lx/images/ico_wb.png"></a>
            </div>
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img width="40%" style="float: right;" src="http://www.dowsure.com/res/lx/images/cap-logo.png">
        </div>	
    </footer>
</template>

<script>
  
export default {
  data() {
    return {
        show:false
    }  
  },
  
  methods: {
    
  }
}
</script>

<style>
    .ny-footer {
        background: #202a3b;
        color: #FFFFFF;
        padding: 47px 0 35px;
        position: relative;
        z-index: 3;
    }
    .inner-wrap {
        width: 100%;
        max-width: 1200px;
        min-width: 320px;
        margin: 0 auto;
    }
    .ny-footer .left {
        float: left;
    }
    .ny-footer .link {
        float: right;
    }
    .pc-block {
        display: block;
    }
    .ny-footer .link .weixin {
        position: relative;
    }

    .ny-footer .link a {
        margin-left: 20px;
        display: inline-block;
        position: relative;
    }
    .ny-footer .left .fnav a {
        display: inline-block;
        padding: 0 20px;
        color: #FFFFFF;
        position: relative;
    }
    .ny-footer .left .fnav a:first-child {
        padding-left: 0;
    }
    .ny-footer .left .fnav a:before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -8px;
        left: 0;
        width: 1px;
        height: 16px;
        background: #FFFFFF;
    }
    .ny-footer .left .fnav a:first-child::before{
        content: "";
        width: 0
    }
    .ny-footer .left .copyright {
        margin-top: 12px;
        font-size: 12px;
        padding: 1.4rem 0rem;
        text-align: left;
    }
    .wscn-http404-container{
    width: 60%;
    max-width: 700px;
    margin: 30px auto;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        /* overflow: hidden; */
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 16px;
        color: #8c939d;
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 200px;
        height: 100px;
        display: block;
    }
    .el-upload-text{
        line-height: 100px;
        text-align: center;
        font-size: 14px;
        color: #8c939d;
    }
    .submit-btn{
        width: 130px;
        height: 40px;
        background-image: url(../../assets/register/btn-bg.png);
        font-size: 16px;
        color:white;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
    .warningWord{
        color:#f62f87;
        font-size: 14px;
    }
    @media (max-width:780px){
        .header{
            display: none
        }
        .wscn-http404-container{
            width: 90%;
        }
    }
    .wscn-http404-container{
    width: 60%;
    max-width: 500px;
    margin: 30px auto;
    }
    .submit-btn{
        width: 130px;
        height: 40px;
        background-image: url(../../assets/register/btn-bg.png);
        font-size: 16px;
        color:white;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
    .banner{
        display: block;
        width: 100%;
        margin: 0 auto;
    }
</style>
