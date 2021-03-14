import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Calendar from "./components/ChildDiary/Calendar"
import router from "./router"
import store from "./stores/store"
import axios from "axios";
window.axios = axios

createApp(App)
    .directive('new', {
        created(elem) {
            elem.style.background = 'red'
        }
    })
    .component('calendar', Calendar)
    .use(router)
    .use(store)
    .mount('#app')
