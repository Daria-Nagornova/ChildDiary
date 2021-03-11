import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Calendar from "./components/ChildDiary/Calendar"
import router from "./router"
import store from "./store"


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
