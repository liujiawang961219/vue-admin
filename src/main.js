import { createApp } from "vue";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";



createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.mount("#app");
