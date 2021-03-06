<template>
  <div class="container">
    <slot></slot>
    <div class="row">
      <div class="col">
          <router-link to="/addChild" class="btn btn-primary">Добавить ребенка</router-link>
          <span> {{ child.name }} </span>
          <span>{{ child.dateOfBirth }} </span>
          <span>{{ child.gender }}</span>
      </div>
      <div class="col">
        <calendar>Выбрать дату</calendar>
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