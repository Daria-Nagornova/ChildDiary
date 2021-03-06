import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Calendar from "./components/ChildDiary/Calendar"
import router from "./router"


createApp(App)
    .use(router)
    .mount('#app')
App.component('calendar', Calendar)
App.directive('change', {
        mounted(elem) {
            elem.style.background = '#AFEEEE'
        }
    })