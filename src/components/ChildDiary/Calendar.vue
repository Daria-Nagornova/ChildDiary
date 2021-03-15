<template>
  <div v-if="!showCalendar">
    <button class="btn btn-outline-info" @click="switch">
      <slot></slot>
    </button>
  </div>
  <div v-else>
    <input class="form-control" type="date" v-model="date" @change="selectNotes">
  </div>

</template>

<script>
import {switchButton} from '@/components/ChildDiary/mixins/SwitchButton'
export default {
  name: "Calendar",
  mixins: [ switchButton ],
  data() {
    return {
      date: ''
    }
  },
  updated() {
    this.loadList()
  },
  methods: {
    loadList() {
      this.$store.dispatch('load')
    },
    selectNotes() {
      this.$store.commit('selectNotes', {dateNotes: this.date})
      this.$store.commit('getShowClose')
      this.$router.push('/notesToday')
    }
  }
}
</script>

<style scoped>

</style>