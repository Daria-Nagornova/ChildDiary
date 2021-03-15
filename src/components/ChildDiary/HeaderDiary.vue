<template>
  <div class="container">
    <slot></slot>
    <div class="row">
      <div class="col">
        <div v-if="!(showAddChild)">
          <router-link to="/addChild" class="btn btn-primary">Добавить ребенка</router-link>
        </div>
        <div v-for="children in child" class="child" v-else v-once>
          <span> {{ children.childName }} </span>
          <span>{{ children.childDateOfBirth }} </span>
          <span>{{ children.childGender }}</span>
        </div>
      </div>
      <div class="col">
        <calendar>Выбрать дату</calendar>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Calendar from '@/components/ChildDiary/Calendar'
export default {
name: "HeaderDiary",
  components: { Calendar },
  computed: {
    ...mapGetters([
        'child',
        'childName',
        'childDateOfBirth',
        'childGender',
        'showAddChild'
    ])
  }
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