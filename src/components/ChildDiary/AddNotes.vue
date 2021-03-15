<template>
  <div class="category">
    <div class="row">
      <div class="col">
        <router-link to="/walk" class="btn btn-outline-info button-category walk-icon">Прогулка</router-link>
      </div>
      <div class="col">
        <router-link to="/sleep" class="btn btn-outline-info button-category sleep-icon">Сон</router-link>
      </div>
      <div class="col">
        <router-link to="/feeding" class="btn btn-outline-info button-category feeding-icon">Кормление</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/height" class="btn btn-outline-info button-category height-icon">Рост и вес</router-link>
      </div>
      <div class="col">
        <router-link to="/vaccination" class="btn btn-outline-info button-category vaccination-icon">Прививка</router-link>
      </div>
      <div class="col">
        <router-link to="/teeth" class="btn btn-outline-info button-category teeth-icon">Зубы</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Walk from '@/components/ChildDiary/Category/Walk'
import Feeding from '@/components/ChildDiary/Category/Feeding'
import Height from '@/components/ChildDiary/Category/Height'
import Sleep from '@/components/ChildDiary/Category/Sleep'
import Teeth from "@/components/ChildDiary/Category/Teeth"
import Vaccination from "./Category/Vaccination";

export default {
  name: 'AddNotes',
  components: { Vaccination, Teeth, Walk, Feeding, Height, Sleep }
}
</script>

<style scoped>
.button-category {
  width: 200px;
  height: 30px;
}
.category {
  margin: 50px;
}
.category .row {
  margin: 20px;
}
</style>