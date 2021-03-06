import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/global.css'



//Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import '@/assets/css/theme-dark.css'
Vue.use(MuseUI)
/* daoos 添加toast*/
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
/* daoos 添加vue2-ace*/
// import editor from "vue2-ace-editor-support-chinese";
// Vue.use(editor);

//为代码文本提供高亮、缩进
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
    //为代码文本格式化
import pretty from 'pretty'
Vue.prototype.$prettyDom = pretty

//云数据库
import lean from './utils/leancloud storage'
Vue.prototype.$lean=lean


Vue.config.productionTip = false
Vue.prototype.$compile = Vue.compile

window._Vue = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
