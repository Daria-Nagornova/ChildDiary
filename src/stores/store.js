import { createStore } from "vuex"
import child from "./child";
import notes from "./notes";


export default createStore({
    modules: {
        notes,
        child
    },
    state() {
        return {

        }
    },
    mutations: {

    },
    getters: {

    },
    actions: {

    }
})