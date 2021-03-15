export default {
    state() {
        return {
            childName: '',
            childDateOfBirth: '',
            childGender: '',
            child: [],
            showAddChild: false
        }
    },
    mutations: {
        saveChild(state, childData) {
           state.child = childData
           state.showAddChild = true
        }
    },
    actions: {
        async loadChild({commit}) {
            const {data} = await axios.get('https://child-diary-default-rtdb.firebaseio.com/child.json')
            const childData = data
            console.log(childData)
            commit('saveChild', childData)
        },
        async addChild({context, commit}, child) {
            await axios.post('https://child-diary-default-rtdb.firebaseio.com/child.json',child)
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
        },
        child(state) {
            return state.child
        }
    }
}