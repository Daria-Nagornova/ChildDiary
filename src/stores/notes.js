export default {
    state() {
        return {
            startWalk: '',
            endWalk: '',
            durationWalk: '',
            nameVaccination: '',
            commentVaccination: '',
            nameTeeth: '',
            dateTeeth: '',
            startSleep: '',
            endSleep: '',
            durationSleep: '',
            commentSleep: '',
            childHeight: '',
            childWeight: '',
            timeFeeding: '',
            productsFeeding: '',
            dateNotes: '',
            notesList: '',
            date: '',
            n: 0,
            empty:
                {
                    "dateAdded": ((new Date()).getFullYear() + '-0' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate()),
                    "sleep": {"startSleep": "",
                    "endSleep": "",
                    "durationSleep": "",
                    "commentSleep": ""},
                    "walk": {"startWalk": "",
                    "endWalk": "",
                    "durationWalk": ""},
                    "height": {"childHeight": "",
                    "childWeight": ""},
                    "feeding": {"timeFeeding": "",
                    "productsFeeding": ""},
                    "vaccination": {"nameVaccination": "прапр",
                    "commentVaccination": "апар"},
                    "teeth": {"nameTeeth": "",
                    "dateTeeth": ""}
                }
        }
    },
    mutations: {
        saveWalk(state, payload) {
            state.startWalk = payload.startWalk
            state.endWalk = payload.endWalk
            state.durationWalk = payload.durationWalk
        },
        saveFeeding(state, payload) {
            state.timeFeeding = payload.timeFeeding
            state.productsFeeding = payload.productsFeeding
        },
        saveSleep(state, payload) {
            state.startSleep = payload.startSleep
            state.endSleep = payload.endSleep
            state.durationSleep = payload.durationSleep
            state.commentSleep = payload.commentSleep
        },
        saveVaccination(state, vaccination) {
            state.nameVaccination = vaccination.nameVaccination
            state.commentVaccination = vaccination.commentVaccination
        },
        saveTeeth(state, payload) {
            state.nameTeeth = payload.nameTeeth
            state.dateTeeth = payload.dateTeeth
        },
        saveHeight(state, payload) {
            state.childHeight = payload.childHeight
            state.childWeight = payload.childWeight
        },
        new(state, notes) {
            state.notesList = notes
        },
        getDate(state) {
            state.date = ((new Date()).getFullYear() + '-0' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate())
        },
        selectNotes(state, payload) {
            state.startWalk = ''
            state.endWalk = ''
            state.durationWalk = ''
            state.startSleep = ''
            state.endSleep = ''
            state.durationSleep = ''
            state.commentSleep = ''
            state.nameTeeth = ''
            state.dateTeeth = ''
            state.childHeight = ''
            state.childWeight = ''
            state.timeFeeding = ''
            state.productsFeeding = ''
            state.nameVaccination = ''
            state.commentVaccination = ''
            state.dateNotes = payload.dateNotes
            for (let note in state.notesList) {
                if (state.dateNotes == state.notesList[note].dateAdded) {
                    state.startWalk = state.notesList[note].walk.startWalk
                    state.endWalk = state.notesList[note].walk.endWalk
                    state.durationWalk = state.notesList[note].walk.durationWalk
                    state.startSleep = state.notesList[note].sleep.startSleep
                    state.endSleep = state.notesList[note].sleep.endSleep
                    state.durationSleep = state.notesList[note].sleep.durationSleep
                    state.commentSleep = state.notesList[note].sleep.commentSleep
                    state.nameTeeth = state.notesList[note].teeth.nameTeeth
                    state.dateTeeth = state.notesList[note].teeth.dateTeeth
                    state.childHeight = state.notesList[note].height.childHeight
                    state.childWeight = state.notesList[note].height.childWeight
                    state.timeFeeding = state.notesList[note].feeding.timeFeeding
                    state.productsFeeding = state.notesList[note].feeding.productsFeeding
                    state.nameVaccination = state.notesList[note].vaccination.nameVaccination
                    state.commentVaccination = state.notesList[note].vaccination.commentVaccination
                }
            }

        }
    },
    actions: {
        async load({commit}) {
            const {data} = await axios.get('https://child-diary-default-rtdb.firebaseio.com/notes.json')
            const notes = data
            commit('new', notes)
        },
        async delete({state}) {
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.dateNotes) {
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${note}.json`)
                }
            }
        },
        async addVaccination({commit, state}, vaccination) {
            commit('getDate')
            commit('saveVaccination', vaccination)

            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].vaccination.commentVaccination = state.commentVaccination
                    state.notesList[note].vaccination.nameVaccination = state.nameVaccination
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.vaccination.commentVaccination = state.commentVaccination
                state.empty.vaccination.nameVaccination = state.nameVaccination
                await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.empty)
            }
        }
    },
    getters: {
        dateNotes(state) {
            return state.dateNotes
        },
        startWalk(state) {
            return state.startWalk
        },
        endWalk(state) {
            return state.endWalk
        },
        durationWalk(state) {
            return state.durationWalk
        },
        startSleep(state) {
            return state.startSleep
        },
        endSleep(state) {
            return state.endSleep
        },
        durationSleep(state) {
            return state.durationSleep
        },
        commentSleep(state) {
            return state.commentSleep
        },
        commentVaccination(state) {
            return state.commentVaccination
        },
        nameVaccination(state) {
            return state.nameVaccination
        },
        nameTeeth(state) {
            return state.nameTeeth
        },
        dateTeeth(state) {
            return state.dateTeeth
        },
        childHeight(state) {
            return state.childHeight
        },
        childWeight(state) {
            return state.childWeight
        },
        timeFeeding(state) {
            return state.timeFeeding
        },
        productsFeeding(state) {
            return state.productsFeeding
        }
    }
}