<template>
    <div class="wrap" v-loading="loading">
        <div class="wrap-step">
            <div class="step" :class="{active: isCompany}">
                <img :src="isCompany ? company : companyActive" alt="">
                <span>企业文件</span>
            </div>
           
            <div class="step" :class="{active: !isCompany}">
                <img :src="!isCompany ? personalActive : personal" alt="">
                <span>个人文件</span>
            </div>
        </div>
        <div 
            v-if="isCompany"
            style="margin: 30px 0;">
            <div class="add-wrap">
                <div>
                    <span class="title">营业执照副本</span>
                    <p style="width: 260px;"></p>
                </div>
                <div>
                    <el-upload
                        :disabled="isFrist"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        style="position: relative;"
                        class="avatar-uploader"
                        :show-file-list="false"
                        :on-success="uploadSuccess">
                        <img 
                            v-if="uploadList[0].imagePath" 
                            :src="`${showUrl}${uploadList[0].imagePath}`" 
                            class="avatar"
                            @click.stop="showBigPic(uploadList[0].imagePath)">
                        <i v-else class="el-icon-plus avatar-uploader-icon" @click="getId(0)"></i>
                        <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic(0)"/>
                    </el-upload>
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*复印件加盖公章</span>
                        <span 
                            class="blue"
                            style="cursor: pointer;margin-left:10px;"
                            @click="showSample(isCompany, 1)">示例</span>
                    </div>
                </div>  
            </div>
            <div class="add-wrap">
                <div>
                    <span class="title">开户许可证</span>
                    <p style="width: 260px;"></p>
                </div>
                <div>
                    <el-upload
                        :disabled="isFrist"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        style="position: relative;"
                        class="avatar-uploader"
                        :show-file-list="false"
                        :on-success="uploadSuccess">
                        <img 
                            v-if="uploadList[1].imagePath" 
                            :src="`${showUrl}${uploadList[1].imagePath}`" 
                            class="avatar"
                            @click.stop="showBigPic(uploadList[1].imagePath)">
                        <i v-else class="el-icon-plus avatar-uploader-icon" @click="getId(1)"></i>
                        <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic(1)"/>
                    </el-upload>
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*复印件加盖公章</span>
                        <span 
                            class="blue"
                            style="cursor: pointer;margin-left:10px;"
                            @click="showSample(isCompany, 2)">示例</span>
                    </div>
                </div>  
            </div>
            <div class="add-wrap">
                <div >
                    <span class="title">最新公司章程</span>
                </div>
                <div @click="getId(2)">
                    <el-upload
                        :disabled="isFrist"
                        class="upload-demo"
                        :on-remove="remove"
                        multiple
                        :file-list="uploadList[2].imagePath"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        :on-success="uploadSuccess">     
                            <el-button size="small"  :disabled="isFrist">点击上传</el-button>
                    </el-upload>       
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*复印件加盖公章</span>
                    </div>  
                </div>            
            </div>
            <div class="add-wrap">
                <div >
                    <span class="title">企业国税纳税证明</span>
                </div>
                <div @click="getId(3)">
                    <el-upload
                        :disabled="isFrist"
                        class="upload-demo"
                        :on-remove="remove"
                        multiple
                        :file-list="uploadList[3].imagePath"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        :on-success="uploadSuccess">     
                            <el-button size="small"  :disabled="isFrist">点击上传</el-button>
                    </el-upload>       
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*复印件加盖公章</span>
                        <span 
                            class="blue" 
                            style="cursor: pointer;margin-left:10px;" 
                            @click="showSample(isCompany, 5)">示例</span>
                    </div>  
                </div>            
            </div>
            <div class="add-wrap">
                <div >
                    <span class="title">财务报告</span>
                    <p style="width: 260px;">2016-2018年度财务报告，最近一期资产负债表、利润表、现金流量表及主要会计科目明细</p>
                </div>
                <div @click="getId(4)">
                    <el-upload
                        :disabled="isFrist"
                        class="upload-demo"
                        :on-remove="remove"
                        multiple
                        :file-list="uploadList[4].imagePath"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        :on-success="uploadSuccess">     
                            <el-button size="small" :disabled="isFrist">点击上传</el-button>
                    </el-upload>       
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*复印件加盖公章</span>
                    </div>  
                </div>            
            </div>
             <div class="add-wrap">
                <div>
                    <span class="title">资金流水</span>
                    <p style="width: 260px;">最近12个月资金流水，包括但不限于能证明其销售的公账、私账、第三方支付账户对账单</p>
                </div>
                <div>
                    <el-upload
                        :disabled="isFrist"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        style="position: relative;"
                        class="avatar-uploader"
                        :show-file-list="false"
                        :on-success="uploadSuccess">
                        <img 
                            v-if="uploadList[5].imagePath" 
                            :src="`${showUrl}${uploadList[5].imagePath}`" 
                            class="avatar"
                            @click.stop="showBigPic(uploadList[5].imagePath)">
                        <i v-else class="el-icon-plus avatar-uploader-icon" @click="getId(5)"></i>
                        <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic(5)"/>
                    </el-upload>
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*银行打印且一定要有交易对方名称</span>
                    </div>
                </div>  
            </div>
           
        </div>
        
        <div v-if="!isCompany">
            <div 
                v-for="(item, index) in resetPersonalList" 
                :key="item.id" 
                :class="{line: item.id == 7}">
                <div class="add-wrap" :class="{line: item.id == 4}" style="padding-left: 0px;">
                    <div style="margin: 20px 0">
                        <span v-text="item.title" class="title" :class="{red: item.id == 4}"></span>
                    </div>
                
                    <div style="margin: 20px 0">
                        <div v-if="item.id == 4">
                            <el-radio v-model="item.value" label="1" :disabled="isFrist">是</el-radio>
                            <el-radio v-model="item.value" label="2" :disabled="isFrist">否</el-radio>
                        </div>
                        <div v-else>
                            <div style="display: flex">
                                <el-upload
                                    :disabled="isFrist"
                                    :action="baseUrl"
                                    :with-credentials="true"
                                    :headers="myHeaders"
                                    style="position: relative;margin-right: 20px;"
                                    class="avatar-uploader"
                                    :show-file-list="false"
                                    :on-success="uploadSuccess">
                                    <img 
                                        v-if="item.imagePath" 
                                        :src="`${showUrl}${item.imagePath}`" 
                                        class="avatar"
                                        @click.stop="showBigPic(item.imagePath)">
                                    <i v-else class="el-icon-plus avatar-uploader-icon" @click="getId(item.id)"></i>
                                    <img src="../../assets/application/del-icon.png" class="del-icon" @click.stop="delPic(index)"/>
                                </el-upload>
                            </div>                                       
                            <div style="margin: 20px 00 0;display: flex;">
                                <span v-text="item.requiredText" class="red"></span>
                                <span 
                                    @click="showSample(isCompany, item.id)"
                                    class="blue" 
                                    v-if="item.isSample" 
                                    style="cursor: pointer;margin-left:10px;">示例</span>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
            <div class="add-wrap" style="padding-left: 0px;">
                <div >
                    <span class="title">房产证明</span>
                </div>
                <div @click="getId(7)">
                    <el-upload
                        :disabled="isFrist"
                        class="upload-demo"
                        :on-remove="removeMore"
                        multiple
                        :file-list="houseList"
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        :on-success="moreSuccess">     
                            <el-button size="small"  :disabled="isFrist">点击上传</el-button>
                    </el-upload>       
                    <div style="margin: 20px 0 0 0;display: flex">
                        <span class="red">*房产证或购房合同资料</span>
                        <span class="blue" style="cursor: pointer;margin-left:10px;" @click="showSample(isCompany, 7)">示例</span>
                    </div>        
                </div>
            </div>
            <div class="add-wrap" style="padding-left: 0px">
                <div>
                    <span class="title">其他个人补充增信资料</span>
                </div>
                <div @click="getId(0)" >
                    <el-upload
                        :disabled="isFrist"
                        class="upload-demo"
                        :on-remove="removeMore"
                        multiple
                        :action="baseUrl"
                        :with-credentials="true"
                        :headers="myHeaders"
                        :file-list="moreList"
                        :on-success="moreSuccess">     
                            <el-button size="small" :disabled="isFrist">点击上传</el-button>
                    </el-upload>             
                </div>
            </div>
            
        </div>
        <!-- 按钮 star -->
        <div style="text-align: center;margin: 80px 0;">
            <button 
                class="btn" 
                @click="isCompany = !isCompany" 
                style="margin-right: 10px;background: transparent;color: black;border: 1px solid #D9D6D5;"
                v-if="!isCompany">上一步</button>
            <button class="btn" @click="next"> {{isCompany ? '下一步' : '提交'}}</button>
        </div>
        <!-- 按钮 end -->
        <!-- 示例弹框 star -->
        <el-dialog
            title="示例"
            :visible.sync="sample"
            width="30%">
            <img :src="sampleImg" alt="" style="width:100%">
        </el-dialog>
        <!-- 示例弹框 end -->
        <!-- 点击查看大图 star -->
        <el-dialog
            title="查看"
            :visible.sync="isShowBigPic"
            width="30%">
            <img :src="`${showUrl}${bigPic}`" alt="" style="width:100%">
        </el-dialog>
        <!-- 点击查看大图 end -->
       
    </div>
</template>
<style scoped>
.upload-demo{
    display: inline;
    
}
.del-icon{
    position: absolute;
    top: -8px;
    right: -8px;
}
.wrap{
    width: 818px;
    border: 1px solid #E5E5E5;
}
.step{
    padding: 7px 10px;
    margin: 0 62px;
    position: relative;
    background: #EFEFEF;
    border-radius: 4px
}
.step img{
    margin-right: 5px;
}
.step:nth-child(1)::after {
    display: block;
    position: absolute;
    left: 108px;
    top: 16px;
    content: '';
    width: 52px;
    height: 1px;
    background: #EFEFEF;
}
.step:nth-child(2)::before {
    display: block;
    position: absolute;
    right: 108px;
    top: 16px;
    content: '';
    width: 52px;
    height: 1px;
    background: #EFEFEF;
}
.active:nth-child(1)::after, .active:nth-child(2)::before{
    background: #E51E5F;
}
.active{
    color: #fff;
    background: #E51E5F;
}

.wrap-step{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid #E5E5E5;;   
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: initial !important;
    /* overflow: hidden; */
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.add-wrap{
    display: flex;
    padding-left:90px; 
    margin-top: 20px;
}
.red{
    color: #FE3223;
}
.blue{
    color: #1F86FF
}
.title{
    display: inline-block;
    width: 260px;
    text-align: right;
    margin-right: 24px;
}
.btn{
    width: 200px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background: #E51E5F;
    color: #fff;
    border: 0;
    border-radius: 6px;
}
.line{
    border-bottom: 1px solid #e5e5e5;
    /* padding-left: 90px !important; */
}
</style>
<script>
import { BASE_URL, IMG_URL_show } from '@/utils/config'
import { getUser } from '@/utils/auth'
import { editCiCompanyDocument, getUserDataInfo } from '@/api/application'
export default {
    data() {
        return {
            myHeaders: {token: getUser().token},
            baseUrl:`${BASE_URL}/ci/upload`,
            showUrl: IMG_URL_show,
            sample: false,
            isCompany: true,
            company: require('../../assets/application/company.png'),
            companyActive: require('../../assets/application/companyActive.png'),
            personal: require('../../assets/application/personal.png'),
            personalActive: require('../../assets/application/personalActive.png'),
            picId: null,
            /*
                资料文档类型：
                0-其他补充资料，
                1-营业执照副本，
                2-开户许可证，
                3-最新公司章程，
               // 4-法定代表人、实际控制人及其配偶的身份证正反面和结婚证，
                5-企业国税纳税证明，
                6-2016-2018年度财务报告，最近一期资产负债表、利润表、现金流量表及主要会计科目明细，
                7-房产证明，
                8-最近12个月资金流水，包括但不限于能证明其销售的公账、私账，第三方支付账户对账单，
                9-企业征信报告、法人代表及配偶、实际控制人及配偶个人征信报告，
                10-实际控制人及所控制企业的担保书，法定代表人、实际控制人及配偶的担保书    
                11-法定代表人照身份证正反面
                12-配偶身份证正反面，
                13-法人结婚证，
                14-实际控制人身份证正反面，
                15-实际控制人配偶身份证正反面，
                16-实际控制人结婚证
            */ 
            newUpList: [],
            uploadList: [
                {   //营业执照
                    type: 1,
                    imagePath: '',
                },
                {   //开户许可证
                    type: 2,
                    imagePath: '', 
                },
                {   //最新公司章程
                    type: 3,
                    imagePath: [], 
                },
                {   //企业国税纳税证明
                    type: 5,
                    imagePath: [], 
                },
                {    //财务报告
                    type: 6,
                    imagePath: [], 
                },
                {   //资金流水
                    type: 8,
                    imagePath: '', 
                },
            ],
            personalList: [
                {   
                    id: 1,
                    title: '法定代表人身份证正、反面',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: true,
                    type: 11
                }, 
                {   
                    id: 2,
                    title: '配偶身份证正、反面',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: true,
                    type: 12
                }, 
                {   
                    id: 3,
                    title: '结婚证',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: false,
                    type: 13
                }, 
                {
                    id: 4,
                    title: '企业法人与实际控制人是否同一个人',
                    value: '1',
                },
                    {   
                    id: 5,
                    title: '实际控制人身份证正、反面',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: true,
                    type: 14
                }, 
                {   
                    id: 6,
                    title: '实际控制人配偶身份证正、反面',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: true,
                    type: 15
                }, 
                {   
                    id: 7,
                    title: '实际控制人结婚证',
                    imagePath: '',
                    requiredText: '*复印件加盖公章',
                    isSample: false,
                    type: 16
                }, 
            ],
            houseList:[],
            moreList:[],
            sampleImg: null,
            loading: true,
            isFrist: false,
            isShowBigPic: false,
            bigPic: null
        }
    },
    computed: {
        resetPersonalList: function() {
            if(this.personalList[3].value == '1') {
                return this.personalList.slice(0, 4)
            } else {
                return this.personalList
            }
        }

    },
    mounted() {
        getUserDataInfo().then(res => {
            this.loading = false
            /* 没有数据就是没有填过资料 */ 
            if(res.data <= 0) {
                this.$emit('getUpload', false)
                return
            }
            /* 有数据则把数据塞进对应字段 */ 
            this.$emit('getUpload', true)
            this.isFrist = true
            /* 处理图片 企业文件 */ 
            this.uploadList.map(item => {
                res.data.map(list => {
                    if((list.type == 3 || list.type == 5 || list.type == 6) && item.type == list.type) {
                        let arr = list.documentPath.split(',')
                        arr.map(item => {
                            switch(list.type) {
                                case 3:
                                    this.uploadList[2].imagePath.push({name: item.substring(item.lastIndexOf('/')+1)})  
                                    break;
                                case 5:
                                    this.uploadList[3].imagePath.push({name: item.substring(item.lastIndexOf('/')+1)})  
                                    break;
                                case 6:
                                    this.uploadList[4].imagePath.push({name: item.substring(item.lastIndexOf('/')+1)})  
                                    break;

                            }
                        })
                        return
                    }
                    if(item.type == list.type) {
                        item.imagePath = list.documentPath
                    }
                })
            })

            /* 个人文件 */ 
            this.personalList.map(item => {
                res.data.map(list => {
                    if(item.type == list.type) {
                        item.imagePath = list.documentPath
                        return
                    }
                    /* 这里处理的是 企业法人与实际控制人是否同一个人 */ 
                    if(list.type == 14) {
                        this.personalList[3].value = '2' 
                        // list.documentPath ? this.personalList[3].value = '2' : null
                    }
                })
            })
            /* 补充资料 */ 
            res.data.map(list => {
                if(list.documentPath) {
                    let arr = list.documentPath.split(',')
                    arr.map(item => {
                        if(list.type == 0) {
                            this.moreList.push({name: item.substring(item.lastIndexOf('/')+1)})
                            return
                        }
                        if(list.type == 7) {
                            this.houseList.push({name: item.substring(item.lastIndexOf('/')+1)})
                            return
                        }
                     })
                    
                }
            })
        })
    },
    methods: {
        next() {
            if(this.isCompany){
                if(!this.uploadList[0].imagePath) {
                    this.$message('请上传营业执照！');
                    return
                }
                if(!this.uploadList[1].imagePath) {
                    this.$message('请上传开户许可证！');
                    return
                }
                if(!this.uploadList[2].imagePath.length) {
                    this.$message('请上传最新公司章程！');
                    return
                }
                if(!this.uploadList[3].imagePath.length) {
                    this.$message('请上传企业国税纳税证明！');
                    return
                }
                if(!this.uploadList[4].imagePath.length) {
                    this.$message('请上传财务报告！');
                    return
                }
                if(!this.uploadList[5].imagePath) {
                    this.$message('请上传资金流水！');
                    return
                }
                this.isCompany = !this.isCompany
                return
            }
            if(!this.isCompany) {
                if(!this.personalList[0].imagePath) {
                    this.$message('请上传法定代表人身份证正、反面');
                    return
                }
                if(!this.personalList[1].imagePath) {
                    this.$message('请上传配偶身份证正、反面');
                    return
                }
                if(!this.personalList[2].imagePath) {
                    this.$message('请上传结婚证');
                    return
                }
                /* 如果企业法人与实际控制人不是同一个人*/ 
                if(this.personalList[3].value === '2') {
                    if(!this.personalList[4].imagePath) {
                        this.$message('请上传实际控制人身份证正、反面');
                        return
                    }
                    if(!this.personalList[5].imagePath) {
                        this.$message('请上传实际控制人配偶身份证正、反面');
                        return
                    }
                    if(!this.personalList[6].imagePath) {
                        this.$message('请上传实际控制人结婚证');
                        return
                    }
                }
                if(this.isFrist) {
                     this.$message('已经上传过资料，请勿重复上传！');
                     return
                }
                this.submit()
            }
        },
        submit() {
            this.uploadList.map(item => {
                let urlList = []
                if(item.type == 3 || item.type == 5 || item.type == 6) {
                    item.imagePath.map(item2 => {
                        urlList.push(item2.response.data.replace(/\\/g,"/"))
                    })
                    this.newUpList.push({type: item.type, imagePath: urlList.join(',')})
                    return
                }
                this.newUpList.push(item)
            })
            let houseList = this.newList(this.houseList, 7)
            let moreList = this.newList(this.moreList, 0)
            let arr = this.newUpList.concat(this.personalList, houseList, moreList)
            editCiCompanyDocument({imagePathList: arr}).then(res => {
                if(!res.code) {
                    this.$message({
                        message: res.msg,
                        type: 'success',
                        onClose: () => {
                            this.$emit('getActive', 4)
                            this.$emit('getUpload', true)
                        }
                    });
                }
            })
        },
        newList(list, type) {
            /* 资料url集合 */ 
            let imgList = [], objList = {}
            list.map(item => {
                if(item.imagePath) {
                    imgList.push(item.imagePath)
                    return
                }
            })
            objList.imagePath = imgList.join(',')
            objList.type = type
            return objList
        },
        /* 展示示例 */ 
        showSample(isCompany, id){
            this.sample = !this.sample
            if(isCompany) {
                switch(id) {
                    case 1:
                        this.sampleImg = require('../../assets/application/business2.jpg')
                        break;
                    case 2:
                        this.sampleImg = require('../../assets/application/account.jpg')
                        break;
                    case 5:
                        this.sampleImg = require('../../assets/application/tax.jpg')
                        break;
                }
            } else {
                switch(id) {
                    case 1:
                    case 2:
                    case 5:
                    case 6:
                        this.sampleImg = require('../../assets/application/Idcard.png')
                        break;
                    case 7:
                        this.sampleImg = require('../../assets/application/house.jpg')
                        break;
                }
            }
        },
        /* 房产和补充资料 */ 
        moreSuccess(response, file, fileList) {
            this.picId == 7 ?
            this.houseList.push({imagePath: response.data.replace(/\\/g,"/"), type: 0, name: file.name}):
            this.moreList.push({imagePath: response.data.replace(/\\/g,"/"), type: 0, name: file.name})
        },
        /* 删掉某一张图片 */ 
        delPic(id) {
            if(this.isFrist) return
            this.isCompany ? this.uploadList[id].imagePath = '' : this.personalList[id].imagePath = ''
        },
        /* 上传成功之后 */ 
        uploadSuccess(response, file, fileList) {
            if(!response.code) {
                /* 企业 */ 
                if(this.isCompany) { 
                    /* 最新公司章程  企业国税纳税证明  财务报告 */ 
                    if(this.picId == 2 || this.picId == 3 || this.picId == 4) {    
                        this.uploadList[this.picId].imagePath = fileList
                        return
                    }
                    this.uploadList[this.picId].imagePath =  response.data.replace(/\\/g,"/")
                    return
                }
                /* 个人 */ 
                if(!this.isCompany && this.picId) {
                     this.personalList[this.picId - 1].imagePath =  response.data.replace(/\\/g,"/")
                }
                return
            }
            this.$message('上传失败，请联系管理员。')
        },
        /* 保存点击 */
        getId(id) {
            this.picId = id
        },
        /* 删掉补充资料的其中一项 */ 
        removeMore(file, fileList) {
            this.picId == 0 ? this.moreList = fileList : this.houseList = fileList
        }, 
        showBigPic(url) {
            this.bigPic = url
            this.isShowBigPic = !this.isShowBigPic
        }, 
        remove(file, fileList) {
            this.uploadList[this.picId].imagePath = fileList
        }
    }
}
</script>