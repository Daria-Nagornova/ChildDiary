import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Calendar from "./components/ChildDiary/Calendar"

createApp(App).mount('#app')
App.component('calendar', Calendar)