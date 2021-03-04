<template>
  <p>{{ todayDate }}</p>
  <span> Начало прогулки: {{ walk.startWalk }} </span>
  <span> Конец прогулки: {{ walk.endWalk }} </span>
  <span> Длительность: {{ walk.durationWalk }}</span>
  <add-notes :walk="walk" @save-walk="walk = $event"></add-notes>
</template>

<script>
import AddNotes from "@/components/ChildDiary/AddNotes";
export default {
  name: "NotesToday",
  components: {AddNotes},
  data () {
    return {
      todayDate: '0' + (new Date()).getDate() + '-0' + (new Date()).getMonth() + '-' + (new Date()).getFullYear(),
      walk: {
        startWalk: '',
        endWalk: '',
        durationWalk: ''
      }
    }
  },
  methods: {

    //getNewDate () {
    //  return this.todayDate.getDate() + '-' + this.todayDate.getMonth() + '-' + this.todayDate.getFullYear()
  }
}
</script>

<style scoped>

</style>