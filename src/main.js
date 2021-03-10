import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Calendar from "./components/ChildDiary/Calendar"
import router from "./router"
import store from "./store"


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
App.component('calendar', Calendar)
App.directive('change', {
        mounted(elem) {
            elem.style.background = '#AFEEEE'
        }
    })