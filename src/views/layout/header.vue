<template>
    <section>
        <div class="head">
            <a class="logo" href="http://www.dowsure.com"><img src="../../assets/head/mb_logo.png"></a>
            <div class="title">
                <li><a class="ico" href="http://www.dowsure.com">首页</a></li>
                <li class="show-down">
                    <a class="ico current" href="javascript:void(0);">产品及合作<i class="el-icon-arrow-down"></i></a>
                    <div class="nav-div">
                        <div class="inner-wrap">
                            <div class="con">
                                <a href="http://freightsure.dowsure.com/">
                                    <img src="../../assets/head/kyb.png">
                                    <span>跨运保</span>
                                </a>
                                <a href="https://saas.dousha8ao.com/productFactory/pages.html#/productFactoryList.html?channel=ivfhwfyy">
                                    <img src="../../assets/head/bzsc.png">
                                    <span>保障商城</span>
                                </a>
                                <a href="http://www.dowsure.com/list-2-1.html">
                                    <img src="../../assets/head/kjmj.png">
                                    <span>跨境卖家保障服务</span>
                                </a>
                                <a href="http://www.dowsure.com/list-3-1.html">
                                    <img src="../../assets/head/kjwl.png">
                                    <span>跨境物流保障服务</span>
                                </a>
                                <a href="http://trustsure.dowsure.com/index">
                                    <img src="../../assets/head/kjzp.png">
                                    <span>跨境正品保障服务</span>
                                </a>
                                <a href="http://www.dowsure.com/list-59-1.html">
                                    <img src="../../assets/head/gsbz.png">
                                    <span>关税保证保障服务</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a class="ico" href="http://www.dowsure.com/list-5-1.html">区块链</a></li>
                <li><a class="ico" href="http://www.dowsure.com/list-6-1.html">商户故事</a></li>
                <li><a class="ico" href="http://www.dowsure.com/list-7-1.html">常见问题</a></li>
                <li><a class="ico" href="http://www.dowsure.com/list-8-1.html">关于我们</a></li>
                <li><a class="ico" href="http://www.dowsure.com/list-71-1.html">商务合作</a></li>
                <!-- <a class="submit-btn" href="https://saas.dousha8ao.com/?channel=ivfhwfyy" target="_blank">登录/注册</a> -->
                <div class="language-change">
                    <a href="http://www.dowsure.com/" class="alink"><img src="http://www.dowsure.com/uploadfile/2018/10/15/20181015110002J7Asju.png"><span>CN</span></a>
                    <div class="language-con">
                        <a href="http://www.dowsure.com/"><img src="http://www.dowsure.com/uploadfile/2018/10/15/20181015110002J7Asju.png"><span>CN</span></a>
                        <a href="http://www.dowsure.com/en/"><img src="http://www.dowsure.com/uploadfile/2018/10/15/20181015110029uUGEJ1.png"><span>EN</span></a>
                    </div>
                </div>
            </div>
            <i v-if="!show" class="el-icon-s-unfold icon-fold" @click="showAll"></i>
            <i v-else class="el-icon-close icon-fold" @click="showAll"></i>
            <transition name = "fade">
                <div class="phone-title" v-show = "show">
                    <li><a class="ico" href="http://www.dowsure.com">首页</a></li>
                    <li><div class="ico" @click="showUp">产品及合作</div></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-5-1.html">区块链</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-6-1.html">商户故事</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-7-1.html">常见问题</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-8-1.html">关于我们</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-71-1.html">商务合作</a></li>
                    <li><div class="ico" @click="showDown">Language</div></li>
                    <li><a class="ico login-link" href="http://www.dowsure.com/list-71-1.html" target="_blank">登录/注册</a></li>
                </div>
            </transition>
            <transition name = "fade">
                <div class="phone-title2" v-show="show2">
                    <li><a class="ico" href="http://freightsure.dowsure.com/">跨运保</a></li>
                    <li><a class="ico" href="https://saas.dousha8ao.com/productFactory/pages.html#/productFactoryList.html?channel=ivfhwfyy">保障商城</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-2-1.html">跨境卖家保障服务</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-3-1.html">跨境物流保障服务</a></li>
                    <li><a class="ico" href="http://trustsure.dowsure.com/index">跨境正品保障服务</a></li>
                    <li><a class="ico" href="http://www.dowsure.com/list-59-1.html">关税保证保障服务</a></li>
                </div>
            </transition>
            <transition name = "fade">
                <div class="phone-title2" v-show="show3">
                    <li><a class="imga" href="http://www.dowsure.com/"><img :src="cn"><span>CN</span></a></li>
                    <li><a class="imga" href="http://www.dowsure.com/en/"><img :src="en"><span>EN</span></a>></li>
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
    import cn from '@/assets/register/cn.png'
    import en from '@/assets/register/en.png'
  
export default {
  data() {
    return {
        show:false,
        show2:false,
        show3:false,
        cn: cn,
        en: en,
    }  
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  
  methods: {
    showAll(){
        this.show = !this.show;
        if(!this.show){
            this.show2 = false;
            this.show3 = false;
        }
    },
    showUp(){
        this.show2 = !this.show2
        if(this.show2){
            this.show3 = false
        }
    },
    showDown(){
        this.show3 = !this.show3
        if(this.show3){
            this.show2 = false
        }
    },
    handleScroll(){
        this.show = false;
        this.show2 = false;
        this.show3 = false;
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    :after,:before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    html { 
        overflow-x:hidden; 
        -webkit-text-size-adjust:none;
    }

    body {
        min-width: 320px;
        font-size:16px; 
        color: #868991;
        font-family:-apple-system,"PingFang SC","Helvetica Neue","Microsoft Yahei",STHeiti,Tahoma,Simsun,sans-serif;
        -webkit-overflow-scrolling: touch;
    }

    body, div, span, h1, h2, h3, h4, h5, h6, p, em, img, strong, b, small, u, i, center, dl, dt, dd, ol, ul, li,  sub, sup, tt, var, del, dfn,  ins, kbd, q, s, samp,  strike, applet, object, iframe, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, blockquote, pre, a, abbr, acronym, address, big, cite, code, mark, audio, video, input, textarea, select { margin:0; padding:0;}

    ul,ol,li,dl{
    list-style: none;
    }

    /*RESET A*/
    * { text-decoration: none!important;}
    a,
    a:visited,
    a:active,
    a:hover,
    a {
    color: #868991;
    }


    .head{
        width: 100%;
        height: 80px;
        background: #000000;
        position: relative;
        z-index: 999;
        top: 0;
        left: 0;
        .logo{
            float: left;
            margin: 0 70px;
            height: 80px;
            margin-right: 110px;
        }
        .title{
            float: left;
            li{
                float: left;
                .ico{
                    height: 80px;
                    line-height: 80px;
                    font-size: 18px;
                    color: #FFFFFF;
                    margin: 0 20px;
                    opacity: .7;
                }
                .ico:hover{
                    opacity: 1;
                }
                .current{
                    opacity: 1;
                }
                .nav-div{
                    display: none;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: #202a3b;
                    padding: 30px 0 40px;
                    .inner-wrap{
                        width: 100%;
                        max-width: 1200px;
                        min-width: 320px;
                        margin: 0 auto;
                        .con{
                            max-width: 1000px;
                            text-align: center;
                            a{
                                display: inline-block;
                                margin: 0 20px;
                                font-size: 18px;
                                color: #FFFFFF;
                                opacity: 1;
                            }
                            span{
                                margin-top: 10px;
                                display: block;
                            }
                        }
                    }
                }
            }
            .submit-btn{
                margin-top: 22px;
                float: left;
                display: block;
                width: 100px;
                height: 36px;
                text-align: center;
                letter-spacing: 1px;
                color: #fff;
                line-height: 36px;
                border-radius: 5px;
                background: -webkit-linear-gradient(90deg, #950bbe, #fa0391, #fe479d);
                background: linear-gradient(90deg, #950bbe, #fa0391, #fe479d);
            }
            .language-change {
                float: left;
                line-height: 36px;
                height: 80px;
                padding: 22px 0;
                margin-left:60px;
                position: relative;
                .alink {
                    padding-right: 25px;
                    display: inline-block;
                    background: url(../../assets/register/lan_down.png) right no-repeat;
                    img {
                        width: 24px;
                        height: 24px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 10px;
                        border: 1px solid rgba(255,255,255,.2);
                        border-radius: 100%;
                    }
                    span {
                        font-size: 14px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #FFFFFF;
                        text-transform: uppercase;
                    }
                }
                .language-con {
                    text-align: center;
                    display: none;
                    border-top: 1px solid rgba(255,255,255,.2);
                    position: absolute;
                    top: 80px;
                    left: 0px;
                    width: 100%;
                    background: #000000;
                    padding: 12px 0;
                    a {
                        margin-bottom: 10px;
                        display: inline-block;
                        img {
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 10px;
                            border: 1px solid rgba(255,255,255,.2);
                            border-radius: 100%;
                            width: 24px;
                            height: 24px;
                        }
                        span {
                            display: inline-block;
                            vertical-align: middle;
                            color: #FFFFFF;
                            text-transform: uppercase;
                        }
                    }
                }
            }
            .language-change:hover .language-con {
                display: block;
            }
            .show-down:hover .nav-div {
                display: block;
            }
        }
        .phone-title, .phone-title2{
            display:none;
        }
    }
    
    @media (max-width:999px){
        .head{
            width: 100%;
            height: 45px;
            background: #000000;
            position: relative;
            z-index: 999;
            .logo{
                float: left;
                margin: 0 20px;
                height: 45px;
                margin-right: 30px;
            }
            img{
                height: 45px;
            }
            .title{
                display: none;
            }
            .icon-fold{
                font-size: 30px;
                color: white;
                line-height: 45px;
                display: block;
                float: right;
                margin-right: 20px;
                cursor: pointer;
            }
            .phone-title{
                display: block;
                width: 100px;
                height: 100vh;
                background: #000000;
                overflow:scroll;
                position: fixed;
                top: 45px;
                right: 0;
                li{
                    height: 50px;
                    width: 100px;
                    cursor: pointer;
                    .ico{
                        height: 50px;
                        width: 100px;
                        display: block;
                        text-align: center;
                        line-height: 50px;
                        color: white;
                    }
                    .ico:hover{
                        opacity: 1;
                        background: #666666;
                    }
                    .ico:active{
                        background: #666666;
                    }
                    .login-link {
                        margin: 0.2rem auto;
                        display: block;
                        height: 30px;
                        width: 90px;
                        line-height: 30px;
                        border-radius: 0.48rem;
                        color: #fff;
                        background: -webkit-linear-gradient(90deg, #950bbe, #fa0391, #fe479d);
                        background: linear-gradient(90deg, #950bbe, #fa0391, #fe479d);
                    }
                }
            }
            .phone-title2{
                display: block;
                width: 100px;
                height: 100vh;
                background: #000000;
                overflow:scroll;
                position: fixed;
                top: 45px;
                right: 100px;
                li{
                    height: 50px;
                    width: 100px;
                    cursor: pointer;
                    .ico{
                        height: 50px;
                        width: 70px;
                        display: block;
                        text-align: center;
                        color: white;
                        margin: 0 15px;
                    }
                    .imga {
                        display: inline-block;
                        padding: 0 .5rem;
                        vertical-align: middle;
                        display: block;
                        text-align: center;
                        height: 1.3rem;
                        font-size: 0.4rem;
                        line-height: 0.55rem;
                        color: #FFFFFF;
                        img {
                            width: 30px;
                            height: 30px;
                            margin-top: 8px;
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 10px;
                        }
                        span {
                            margin-top: 8px;
                            display: inline-block;
                            vertical-align: middle;
                            color: #FFFFFF;
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }
    }
</style>
