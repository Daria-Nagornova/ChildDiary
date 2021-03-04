<template>
  <div class="container">
    <h1>ДНЕВНИК РЕБЕНКА</h1>
    <div class="row">
      <div class="col">
        <child-diary :child="child" @save-child="child = $event"></child-diary>
      </div>
      <div class="col">
        <calendar></calendar>
      </div>
    </div>
  </div>
</template>

<script>
import ChildDiary from '@/components/ChildDiary/ChildDiary'
import Calendar from '@/components/ChildDiary/Calendar'
export default {
name: "HeaderDiary",
  components: { ChildDiary, Calendar },
  data() {
    return {
      child: {
        name: '',
        dateOfBirth: '',
        gender: ''
      }
    }
  }
}
</script>

<style scoped>

</style>