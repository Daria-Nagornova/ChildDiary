import { createStore } from "vuex"
export default createStore({
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
            name: '',
            dateOfBirth: '',
            gender: '',
            showAddChild: false,
            notesList: [
                  {
                      dateAdded: '2021-03-03',
                      sleep: {
                          startSleep: '14:15',
                          endSleep: '15:15',
                          durationSleep: '60',
                          commentSleep: 'Сон в коляске во время прогулки'
                      },
                      walk: {
                          startWalk: '10:20',
                          endWalk: '11:20',
                          durationWalk: '60'
                      },
                      height: {
                          childHeight: '100',
                          childWeight: '15'
                      },
                      feeding: {
                          timeFeeding: '11:15',
                          productsFeeding: 'Омлет, банан'
                      },
                      vaccination: {
                          nameVaccination: 'Инфанрикс',
                          commentVaccination: 'Температура до 37.5'
                      },
                      teeth: {
                          nameTeeth: 'Нижний резец',
                          dateTeeth: '2021-03-03',
                      }
                  },
                  {
                      dateAdded: '2021-03-13',
                      sleep: {
                          startSleep: '12:15',
                          endSleep: '13:15',
                          durationSleep: '60',
                          commentSleep: 'Сон в кроватке'
                      },
                      vaccination: {
                          nameVaccination: '',
                          commentVaccination: ''
                      },
                      walk: {
                          startWalk: '09:40',
                          endWalk: '11:20',
                          durationWalk: '100'
                      },
                      height: {
                          childHeight: '',
                          childWeight: ''
                      },
                      feeding: {
                          timeFeeding: '16:20',
                          productsFeeding: 'Овсяка с ягодами'
                      },
                      teeth: {
                          nameTeeth: '',
                          dateTeeth: '',
                      }
                  },
                {
                    dateAdded: '2021-02-01',
                    walk: {
                        startWalk: '',
                        endWalk: '',
                        durationWalk: ''
                    },
                    vaccination: {
                        nameVaccination: '',
                        commentVaccination: ''
                    },
                    height: {
                        childHeight: '95',
                        childWeight: '14'
                    },
                    feeding: {
                        timeFeeding: '',
                        productsFeeding: ''
                    },
                    teeth: {
                        nameTeeth: '',
                        dateTeeth: '',
                    },
                    sleep: {
                        startSleep: '',
                        endSleep: '',
                        durationSleep: '',
                        commentSleep: ''
                    }
                }
              ]
          }
},
mutations: {
 selectNotes(state) {
     state.startWalk = ''
     state.endWalk = ''
     state.durationWalk = ''
     state.startSleep = ''
     state.endSleep = ''
     state.durationSleep = ''
     state.commentSleep = ''
     state.commentVaccination = ''
     state.nameVaccination = ''
     state.nameTeeth = ''
     state.dateTeeth = ''
     state.childHeight = ''
     state.childWeight = ''
     state.timeFeeding = ''
     state.productsFeeding = ''
     for (let note in state.notesList) {
         if (String(state.dateNotes) == state.notesList[note].dateAdded) {
             state.startWalk = state.notesList[note].walk.startWalk
             state.endWalk = state.notesList[note].walk.endWalk
             state.durationWalk = state.notesList[note].walk.durationWalk
             state.startSleep = state.notesList[note].sleep.startSleep
             state.endSleep = state.notesList[note].sleep.endSleep
             state.durationSleep = state.notesList[note].sleep.durationSleep
             state.commentSleep = state.notesList[note].sleep.commentSleep
             state.commentVaccination = state.notesList[note].vaccination.commentVaccination
             state.nameVaccination = state.notesList[note].vaccination.nameVaccination
             state.nameTeeth = state.notesList[note].teeth.nameTeeth
             state.dateTeeth = state.notesList[note].teeth.dateTeeth
             state.childHeight = state.notesList[note].height.childHeight
             state.childWeight = state.notesList[note].height.childWeight
             state.timeFeeding = state.notesList[note].feeding.timeFeeding
             state.productsFeeding = state.notesList[note].feeding.productsFeeding
         }
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
    name(state) {
        return state.name
    },
    dateOfBirth(state) {
        return state.dateOfBirth
    },
    gender(state) {
        return state.gender
    }
}

})