<template>
    <section>
        <div class="container">
            <Head :activeNum="num"></Head>
            <div style="background:white;padding:30px;border-top:1px solid #e7e7e9">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="企业文件" name="first">
                        <div class="img-box">
                            <div class="box-card" v-for="(item,index) in listA" :key="index">
                                <div class="clearfix">
                                    {{item.name}}
                                    <span v-if="item.id==0" style="color:red">（必填）</span>
                                </div>
                                <div style="margin-top:15px;" @click="setType(item.id)">
                                    <el-upload
                                        :action="baseUrl"
                                        :with-credentials="true"
                                        :headers="myHeaders"
                                        :file-list="fileListAll[item.id]"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePictureCardPreview">
                                        <div class="addImg">
                                            <i class="el-icon-plus" style="font-size:18px;"></i>
                                        </div>
                                    </el-upload>
                                </div>
                            </div>
                        </div>
                        <div class="submit-btn" style="margin:0 auto;" @click="next">下一步</div>
                    </el-tab-pane>
                    <el-tab-pane label="个人文件" name="second">
                        <div class="img-box">
                            <div class="box-card" v-for="(item,index) in listB" :key="index">
                                <div class="clearfix">
                                    {{item.name}}
                                    <span v-if="item.id==12||item.id==18" style="color:red">（必填）</span>
                                </div>
                                <div style="margin-top:15px;" @click="setType(item.id)">
                                    <el-upload
                                        :action="baseUrl"
                                        :with-credentials="true"
                                        :headers="myHeaders"
                                        :file-list="fileListAll[item.id]"
                                        :on-success="handleSuccess"
                                        :on-preview="handlePictureCardPreview">
                                        <div class="addImg">
                                            <i class="el-icon-plus" style="font-size:18px;"></i>
                                        </div>
                                    </el-upload>
                                </div>
                            </div>
                        </div>
                        <div class="submit-btn" style="margin:0 auto;" @click="submit">提交</div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div> 
    </section>
</template>

<script>
import Head from './layout/head'
import { getUser } from '@/utils/auth'
import { BASE_URL, IMG_URL_show } from '@/utils/config'
import { editCiCompanyDocument, getAuthUserBasicInfo } from '@/api/application'
export default {
  components: {
    Head,              // 步骤条
  },
  data() {
    return {
           baseUrl:`${BASE_URL}/ci/upload`,
           myHeaders: {token: getUser().token},
           fileListAll:[
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
               [],
           ],
           num:3,
           listA:[
               {name:"营业执照副本",id:0},
               {name:"企业国税纳税证明",id:1},
               {name:"最新公司章程",id:2},
               {name:"财务报表",id:3},
               {name:"资金流水",id:4},
               {name:"开户许可证",id:5},
               {name:"销售量明细",id:6},
               {name:"企业征信报告",id:7},
               {name:"供应商合同和发票",id:8},
               {name:"公司及实控人介绍",id:9},
               {name:"历史物流打款汇总及流水",id:10},
               {name:"香港公司注册信息及股东信息，香港公司流水（如有）",id:11}
           ],
           listB:[
               {name:"法定代表人身份证正反面",id:12},
               {name:"配偶身份证正反面",id:13},
               {name:"法人代表房产证明",id:14},
               {name:"法人征信报告",id:15},
               {name:"法人配偶征信报告",id:16},
               {name:"法人代表及配偶的担保书",id:17},
               {name:"实际控制人身份证正反面",id:18},
               {name:"实际控制人配偶身份证正反面",id:19},
               {name:"实际控制人征信报告",id:20},
               {name:"实际控制人配偶征信报告",id:21},
               {name:"实际控制人所控制企业的担保书",id:22},
               {name:"实际控制人及配偶担保书",id:23},
               {name:"其他有助于提高增信的附件",id:24},
           ],
           activeName: 'first',
           type:'-1',
           imagePathList: [
                {   
                    type: 0,
                    imagePath: "",
                },
                {   
                    type: 1,
                    imagePath: "", 
                },
                {   
                    type: 2,
                    imagePath: "", 
                },
                {  
                    type: 3,
                    imagePath: "", 
                },
                {   
                    type: 4,
                    imagePath: "", 
                },
                {   
                    type: 5,
                    imagePath: "", 
                },
                {   
                    type: 6,
                    imagePath: "",
                },
                {   
                    type: 7,
                    imagePath: "", 
                },
                {   
                    type: 8,
                    imagePath: "", 
                },
                {  
                    type: 9,
                    imagePath: "", 
                },
                {   
                    type: 10,
                    imagePath: "", 
                },
                {   
                    type: 11,
                    imagePath: "", 
                },
                {   
                    type: 12,
                    imagePath: "",
                },
                {   
                    type: 13,
                    imagePath: "", 
                },
                {   
                    type: 14,
                    imagePath: "", 
                },
                {  
                    type: 15,
                    imagePath: "", 
                },
                {   
                    type: 16,
                    imagePath: "", 
                },
                {   
                    type: 17,
                    imagePath: "", 
                },
                {   
                    type: 18,
                    imagePath: "",
                },
                {   
                    type: 19,
                    imagePath: "", 
                },
                {   
                    type: 20,
                    imagePath: "", 
                },
                {  
                    type: 21,
                    imagePath: "", 
                },
                {   
                    type: 22,
                    imagePath: "", 
                },
                {   
                    type: 23,
                    imagePath: "", 
                },
                {   
                    type: 24,
                    imagePath: "", 
                },
            ],
        }
    },
    computed: {
    },
    mounted(){
        this.getAuthUserBasicInfo()
    },
    methods: {
        next(){
            // this.$router.push({path: '/uploadInfo'})
            this.activeName = 'second'
        },
        submit(){
            console.log(1111,this.imagePathList[18].imagePath)
            if(!this.imagePathList[0].imagePath||!this.imagePathList[12].imagePath||!this.imagePathList[18].imagePath){
                this.$message.warning("至少上传营业执照副本，法定代表人身份证正反面，实际控制人身份证正反面")
                return
            }
            this.loading = true;
            editCiCompanyDocument({imagePathList:this.imagePathList}).then(res => {
                this.loading = false
                this.$message.success(res.msg)
                this.$router.push({path: '/summary'})
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        },
        handlePictureCardPreview(file) {
            window.open(file.url)
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {
            console.log(2222,fileList)
            var midrr = []
            fileList.forEach(element => {
                midrr.push( element.url.replace(IMG_URL_show,""))
            });
            this.fileList1 = midrr
        },
        setType(id){
            this.type = id
        },
        handleSuccess(response, file, fileList){
            if(this.imagePathList[this.type].imagePath){
                this.imagePathList[this.type].imagePath = `${this.imagePathList[this.type].imagePath},${response.data}`
            }else{
                this.imagePathList[this.type].imagePath = response.data
            }
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        getAuthUserBasicInfo(){
            this.loading = true;
            getAuthUserBasicInfo().then(res => {
                this.loading = false
                if(res.data.enterpriseInfo&&res.data.enterpriseInfo.tradingCertificate){
                    this.imagePathList[0].imagePath = `${res.data.enterpriseInfo.tradingCertificate}`
                    this.fileListAll[0].push({url: IMG_URL_show + res.data.enterpriseInfo.tradingCertificate,name:res.data.enterpriseInfo.tradingCertificate.substring(res.data.enterpriseInfo.tradingCertificate.lastIndexOf("/")+1)});
                }
                if(res.data.enterpriseInfo&&res.data.enterpriseInfo.legalPersonIdFront){
                    this.imagePathList[12].imagePath = `${res.data.enterpriseInfo.legalPersonIdFront},${res.data.enterpriseInfo.legalPersonIdBack}`
                    this.fileListAll[12].push({url: IMG_URL_show + res.data.enterpriseInfo.legalPersonIdFront,name:res.data.enterpriseInfo.legalPersonIdFront.substring(res.data.enterpriseInfo.legalPersonIdFront.lastIndexOf("/")+1)});
                    this.fileListAll[12].push({url: IMG_URL_show + res.data.enterpriseInfo.legalPersonIdBack,name:res.data.enterpriseInfo.legalPersonIdBack.substring(res.data.enterpriseInfo.legalPersonIdBack.lastIndexOf("/")+1)});
                }
                if(res.data.loanInfo&&res.data.loanInfo.loanCardFront){
                    this.imagePathList[18].imagePath = `${res.data.loanInfo.loanCardFront},${res.data.loanInfo.loanCardBack}`
                    this.fileListAll[18].push({url: IMG_URL_show + res.data.loanInfo.loanCardFront,name:res.data.loanInfo.loanCardFront.substring(res.data.loanInfo.loanCardFront.lastIndexOf("/")+1)});
                    this.fileListAll[18].push({url: IMG_URL_show + res.data.loanInfo.loanCardBack,name:res.data.loanInfo.loanCardBack.substring(res.data.loanInfo.loanCardBack.lastIndexOf("/")+1)});
                }
                
            }).catch(err=>{
                this.loading = false
                this.$message.error(err.msg)
            })
        },
    }   
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .container{
        width: 1200px;
        margin: 30px auto;
        overflow: hidden;
        .img-box{
            width: 1200px;
            overflow: hidden;
            background-color: white;
            padding-bottom: 30px;
            .box-card{
                float: left;
                margin-left:100px;
                margin-bottom: 20px;
                background-color: white;
                width: 300px;
                height: 180px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                .addImg{
                    width: 50px;
                    height: 50px;
                    border: 2px solid #bbbbbb;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }
            }
        }
        
        
    }
</style>

