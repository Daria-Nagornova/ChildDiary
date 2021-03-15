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
            showClose: '',
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
                    "vaccination": {"nameVaccination": "",
                    "commentVaccination": ""},
                    "teeth": {"nameTeeth": "",
                    "dateTeeth": ""}
                }
        }
    },
    mutations: {
        saveWalk(state, walk) {
            state.startWalk = walk.startWalk
            state.endWalk = walk.endWalk
            state.durationWalk = walk.durationWalk
        },
        saveFeeding(state, feeding) {
            state.timeFeeding = feeding.timeFeeding
            state.productsFeeding = feeding.productsFeeding
        },
        saveSleep(state, sleep) {
            state.startSleep = sleep.startSleep
            state.endSleep = sleep.endSleep
            state.durationSleep = sleep.durationSleep
            state.commentSleep = sleep.commentSleep
        },
        saveVaccination(state, vaccination) {
            state.nameVaccination = vaccination.nameVaccination
            state.commentVaccination = vaccination.commentVaccination
        },
        saveTeeth(state, teeth) {
            state.nameTeeth = teeth.nameTeeth
            state.dateTeeth = teeth.dateTeeth
        },
        saveHeight(state, height) {
            state.childHeight = height.childHeight
            state.childWeight = height.childWeight
        },
        new(state, notes) {
            state.notesList = notes
        },
        getDate(state) {
            state.date = ((new Date()).getFullYear() + '-0' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate())
        },
        getShowClose(state) {
            state.showClose = true
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
        async delete({state, commit, dispatch}) {
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.dateNotes) {
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${note}.json`)
                }
            }
            dispatch('load')
            commit('selectNotes', state.dateNotes)
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
        },
        async addTeeth({commit, state}, teeth) {
            commit('getDate')
            commit('saveTeeth', teeth)
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].teeth.nameTeeth = state.nameTeeth
                    state.notesList[note].teeth.dateTeeth = state.dateTeeth
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                    break
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.teeth.nameTeeth = state.nameTeeth
                state.empty.teeth.dateTeeth = state.dateTeeth
                await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.empty)
            }
        },
        async addWalk({commit, state}, walk) {
            commit('getDate')
            commit('saveWalk', walk)
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].walk.startWalk = walk.startWalk
                    state.notesList[note].walk.endWalk = walk.endWalk
                    state.notesList[note].walk.durationWalk = walk.durationWalk
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                    break
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.walk.startWalk = state.startWalk
                state.empty.walk.endWalk = state.endWalk
                state.empty.walk.durationWalk = state.durationWalk
                await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.empty)
            }
        },
        async addSleep({commit, state}, sleep) {
            commit('getDate')
            commit('saveSleep', sleep)
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].sleep.startSleep = sleep.startSleep
                    state.notesList[note].sleep.endSleep = sleep.endSleep
                    state.notesList[note].sleep.durationSleep = sleep.durationSleep
                    state.notesList[note].sleep.commentSleep = sleep.commentSleep
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                    break
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.sleep.startSleep = state.startSleep
                state.empty.sleep.endSleep = state.endSleep
                state.empty.sleep.durationSleep = state.durationSleep
                state.empty.sleep.commentSleep = state.commentSleep
                await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.empty)
            }
        },
        async addFeeding({commit, state}, feeding) {
            commit('getDate')
            commit('saveFeeding', feeding)
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].feeding.timeFeeding = state.timeFeeding
                    state.notesList[note].feeding.productsFeeding = state.productsFeeding
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.feeding.timeFeeding = state.timeFeeding
                state.empty.feeding.productsFeeding = state.productsFeeding
                await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.empty)
            }
        },
        async addHeight({commit, state}, height) {
            commit('getDate')
            commit('saveHeight', height)
            for (let note in state.notesList) {
                if (state.notesList[note].dateAdded == state.date) {
                    state.notesList[note].height.childHeight = state.childHeight
                    state.notesList[note].height.childWeight = state.childWeight
                    const key = note
                    await axios.post('https://child-diary-default-rtdb.firebaseio.com/notes.json', state.notesList[key])
                    await axios.delete(`https://child-diary-default-rtdb.firebaseio.com/notes/${key}.json`)
                }
                else {
                    state.n++
                }
            }
            if(state.n == Object.keys(state.notesList).length) {
                state.empty.height.childHeight = state.childHeight
                state.empty.height.childWeight = state.childWeight
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
        },
        showClose(state) {
            return state.showClose
        }
    }
}