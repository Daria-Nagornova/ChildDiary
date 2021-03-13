export default {
    state() {
        return {
            childName: '',
            childDateOfBirth: '',
            childGender: '',
            showAddChild: false
        }
    },
    mutations: {
        saveChild(state, payload) {
            state.childName = payload.childName
            state.childDateOfBirth = payload.childDateOfBirth
            state.childGender = payload.childGender
            state.showAddChild = true
        }
    },
    getters: {
        showAddChild(state) {
            return state.showAddChild
        },
        childName(state) {
            return state.childName
        },
        childDateOfBirth(state) {
            return state.childDateOfBirth
        },
        childGender(state) {
            return state.childGender
        }
    }
}