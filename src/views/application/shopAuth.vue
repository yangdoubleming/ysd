<template>
    <div class="wrap">
        <div class="count-box">
            <div class="left">
                <div class="shop">我的店铺</div>
                <div class="num-box">
                    <div class="box">
                        <div class="num">{{shopCount||0}}</div>
                        <div class="word">店铺数量</div>
                    </div>
                    <div class="box">
                        <div class="num">{{volumeAll||0}}<span>万</span></div>
                        <div class="word">交易金额</div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="right">
                <div class="shop">我的交易</div>
                <div class="num-box">
                    <div class="box">
                        <div class="num">0<span>万</span></div>
                        <div class="word">已授信交易额</div>
                    </div>
                    <div class="box">
                        <div class="num">0<span>万</span></div>
                        <div class="word">物流匹配交易额</div>
                    </div>
                    <div class="box">
                        <div class="num">0<span>万</span></div>
                        <div class="word">支付匹配交易额</div>
                    </div>
                    <div class="box">
                        <div class="num">0<span>万</span></div>
                        <div class="word">物流/支付匹配交易额</div>
                    </div>
                </div>
            </div>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tab-box">
            <el-tab-pane label="未授信" name="first">
                <div class="content">
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                    <div class="authorize-box">
                        <div class="up">
                            <img :src="amazonLogo" class="up-left">
                            <div class="up-right">
                                <span>北美站</span>
                                <i class="el-icon-location"></i>
                            </div>
                        </div>
                        <div class="down">
                            <div class="down-left">
                                <span>友好店铺</span>
                            </div>
                            <div class="down-right">
                                <a href="./index_files/amazon.pdf" target="_blank">交易额：200万</a>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="授信中" name="second">授信中</el-tab-pane>
            <el-tab-pane label="已授信" name="third">已授信</el-tab-pane>
        </el-tabs>
        <el-button icon="el-icon-plus" style="margin-left: 380px;"></el-button>
        <button class="btn"> 下一步</button>
    </div>
</template>
<script>
import amazonLogo from '@/assets/register/amazon_logo.png'
export default {
    data() {
       return {
           amazonLogo,
           activeName: 'first',
           shopInfo:{
               userId:'',     //用户id
               platformId:'',     //平台id
               platform:'',     //平台名称
               shopCount:'',     //店铺数量
               volumeAll:'',     //总销售额/单位元
               volumeMonthAverage:'',     //月均销售额/单位元
               refundAll:'',     //总退款额/单位元
               refundMonthAverage:'',     //月均退款额/单位元
           }
       }
    },
   created() {
        
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .wrap {
        width: 818px;
        border: 1px solid #E5E5E5;
    }
    .el-tabs__item{
        font-size: 13px;
    }
    .count-box{
        width: 790px;
        height: 100px;
        border: 1px solid #E5E5E5;
        margin: 20px auto;
        overflow: hidden;
        .left{
            float: left;
            .shop{
                font-size: 12px;
                margin: 5px;
            }
            .num-box{
                width: 200px;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                .box{
                    .num{
                        font-size: 20px;
                    }
                    .word{
                        font-size: 14px;
                    }
                }
            }
        }
        .line{
            float: left;
            width: 1px;
            height: 90px;
            background: #E5E5E5;
            margin-top: 5px;
        }
        .right{
            float: left;
            margin-left: 10px;
            .shop{
                font-size: 12px;
                margin: 5px;
            }
            .num-box{
                width: 560px;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .box{
                    .num{
                        font-size: 20px;
                    }
                    .word{
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .tab-box{
        width: 790px;
        margin: 20px auto;
    }
    .btn{
        display: block;
        width: 200px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        background: #E51E5F;
        color: #fff;
        border: 0;
        border-radius: 6px;
        margin: 20px auto;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .authorize-box{
        width: 210px;
        height: 140px;
        border: 1px solid #E5E5E5;
        margin: 20px 0px;
    }
    .authorize-box .up{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #E5E5E5;
    }
    .authorize-box .up-left{
        width: 86px;
        float: left;
        margin-left: 30px;
        margin-top: 25px;
    }
    .authorize-box .up-right{
        float: right;
        font-size: 13px;
        line-height: 80px;
        color: #409EFF;
        margin-right: 8px;
        cursor: pointer;
    }
    .authorize-box .down{
        height: 60px;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .authorize-box .down-left{
        cursor: pointer;
    }
    .authorize-box .down-right{
        cursor: pointer;
    }
</style>