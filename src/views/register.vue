<template>
    <div class="login-container" v-loading="loading" element-loading-text="Loading">
       
    </div>
</template>

<script>
import { BASE_URL } from '@/utils/config'

export default {
    name: "login", 
    data() {
        return {
            loading:false
        };
    },
    mounted(){
        if(this.$route.query.token){
            this.handleLogin()
        }else{
            window.location.href = `http://login.dowsure.com/login?href=${window.location.origin}${window.location.pathname}&api=${BASE_URL}/user/login`
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$store.dispatch("Login", this.$route.query.token).then(() => {
                this.loading = false;
                this.$emit('getActive', 2)
            })
            .catch((err) => {
                this.loading = false;
                this.$message.error(err.msg);
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    .login-container{
        width: 100%;
        height: 100vh;
    }
</style>