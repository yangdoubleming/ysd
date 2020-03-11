<template>
    <div>
        <ul style="margin-top: 36px;">
            <li 
                v-for="(item, index) in list" 
                :key="item.id"
                v-text="`${index+1 + '.'}${$t(`sideBar.${item.title}`)}`"
                :class="{pink: item.id == sendActive}"
                @click="getActive(item.id)">
            </li>
        </ul>
    </div>
</template>
<style scoped>
div{
  background: #FFFFFF;
}
.cur{
    cursor: no-drop;
}
ul li{
    padding: 13.5px 31.5px;
    list-style: none;
    border-bottom: 1px solid #E5E5E5;
    cursor: pointer;
    
}
ul >>> {
    padding: 0 !important;
    border: 1px solid #E5E5E5;
    border-radius:1px;

}
ul li:nth-last-child(1){
    border-bottom: 0
}
.pink{
    color: #E51E5F
}
</style>
<script>
import { BASE_URL } from '@/utils/config'
export default {
     props: ['list', 'sendActive', 'secInfo', 'token', 'thrInfo'],   

     data() {
         return {
            //  active: 2
         }
     },
     methods: {
        getActive(id) {
            if(id == 8) {
                this.$confirm('确定退出吗？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        localStorage.removeItem('user')
                        window.location.href = `http://login.dowsure.com/login?href=${window.location.origin}${window.location.pathname}&api=${BASE_URL}/user/login`
                    }).catch(() => {
       
                });
                return    
            }
            // if(this.token && (id == 1 || id == 6)) {
            //    return 
            // }
            /* 假设2没填，除了2，7其他都不能点 id == 3 || id == 4 || id == 5 || id == 6 */ 
            if(!this.secInfo && id !=7 && id != 2) {
                this.$message('请先完善信息');
                return
            }
            // if(!this.thrInfo && (id == 5 || id == 6)) {
            //     this.$message('请先上传资料');
            //     return
            // }
          
            this.$emit('getActive', id)
        }
     }

}
</script>