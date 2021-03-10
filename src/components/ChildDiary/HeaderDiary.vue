<template>
  <div class="container">
    <slot></slot>
    <div class="row">
      <div class="col">
        <div v-if="!($store.state.showAddChild)">
          <router-link to="/addChild" class="btn btn-primary">Добавить ребенка</router-link>
        </div>
        <div class="child" v-else>
          <span> {{ $store.getters.name }} </span>
          <span>{{ $store.getters.dateOfBirth }} </span>
          <span>{{ $store.getters.gender }}</span>
        </div>
      </div>
      <div class="col">
        <calendar>Выбрать дату</calendar>
      </div>
    </div>

  </div>
</template>

<script>
import Calendar from '@/components/ChildDiary/Calendar'
export default {
name: "HeaderDiary",
  components: { Calendar }
}
</script>

<style scoped>
.child span {
  margin-right: 15px;
  border-right-width:2px;
  border-right-color: blue;
  border-right-style: solid;
  padding: 10px;
}

</style>