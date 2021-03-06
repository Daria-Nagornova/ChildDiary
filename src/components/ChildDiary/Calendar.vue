<template>
  <div v-if="!showCalendar">
  <button class="btn btn-outline-info" @click="switch">
    <slot></slot>
  </button>
  </div>
  <div v-else>
    <input class="form-control" type="date" v-model="dateNotes" @change="selectNotes">
  </div>

  <!--<span> {{ newSleep }}</span>
  <span> {{ newWalk }}</span>-->

</template>

<script>
import {switchButton} from '@/components/ChildDiary/mixins/SwitchButton'
export default {
  name: "Calendar",
  props: ['calendar'],
  mixins: [ switchButton ],
  data () {
    return {
      dateNotes: '',
      new: '',
      newSleep: '',
      newWalk: '',
      notesList: [
        {
          dateAdded: '2021-03-03',
          sleep: {
            startSleep: '14:15',
            endSleep: '15:15',
            durationSleep: '60 минут',
            commentSleep: 'Сон в коляске во время прогулки'
          },
          walk: {
            startWalk: '10:20',
            endWalk: '11:20',
            durationWalk: '60 минут'
          }
        },
        {
          dateAdded: '2021-03-13',
          sleep: {
            startSleep: '12:15',
            endSleep: '13:15',
            durationSleep: '60 минут',
            commentSleep: 'Сон в кроватке'
          },
          walk: {
            startWalk: '11:20',
            endWalk: '12:20',
            durationWalk: '60 минут'
          }
        }
      ]
    }
  },
  methods: {
    selectNotes() {
     for(let note in this.notesList) {
        if (String(this.dateNotes) == this.notesList[note].dateAdded) {
          this.new = this.notesList[note]
          this.newSleep = this.notesList[note].sleep
          this.newWalk = this.notesList[note].walk
        }
     }
    }
  }
}
</script>

<style scoped>

</style>