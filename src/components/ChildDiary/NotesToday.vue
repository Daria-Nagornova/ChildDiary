<template>
  <p>{{ todayDate }}</p>
  <!--<div>
    <span>Прогулка</span>
    <span> Начало прогулки: {{ walk.startWalk }} </span>
    <span> Конец прогулки: {{ walk.endWalk }} </span>
    <span> Длительность: {{ walk.durationWalk }}</span>
    <add-notes :walk="walk" @save-walk="walk = $event"></add-notes>
  </div>
  <div>
    <span>Кормление</span>
    <span> Время приема пищи: {{ feeding.timeFeeding }} </span>
    <span> Продукты: {{ feeding.productsFeeding }} </span>
    <add-notes :feeding="feeding" @save-feeding="feeding = $event"></add-notes>
  </div>-->

</template>

<script>
import AddNotes from "@/components/ChildDiary/AddNotes";
export default {
  name: "NotesToday",
  components: {AddNotes},
  data () {
    return {
     todayDate: '0' + (new Date()).getDate() + '-0' + ((new Date()).getMonth()+1) + '-' + (new Date()).getFullYear(),
      walk: {
        startWalk: '',
        endWalk: '',
        durationWalk: ''
      },
      feeding: {
        timeFeeding: '',
        productsFeeding: ''
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