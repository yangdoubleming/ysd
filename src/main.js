import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  reset CSS
import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css"
import '@/styles/index.scss' // global css
import VueI18n from 'vue-i18n'
import '@/permission' // permission control
import './element-variables.scss'
Vue.use(VueI18n)
Vue.use(ElementUI);
Vue.config.productionTip = false;

const i18n = new VueI18n({ 
    locale: 'zh', // 定义默认语言为中文 
     messages: {   
        'zh': require('./assets/languages/zh.json'),   
        'en': require('./assets/languages/en.json') 
      }
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
