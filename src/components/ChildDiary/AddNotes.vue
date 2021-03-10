<template>

  <!--<div v-if="!showWalk">
    <walk :walk="walk" @save-walk="saveWalk" @cancel="showWalk = true"></walk>
  </div>
  <div v-else-if="!showFeeding">
    <feeding :feeding="feeding" @save-feeding="saveFeeding" @cancel="showFeeding = true"></feeding>
  </div>
  <div v-else-if="!showHeight">
    <height :height="height" @save-height="saveHeight" @cancel="showHeight = true"></height>
  </div>
  <div v-else-if="!showSleep">
    <sleep :height="sleep" @save-sleep="saveSleep" @cancel="showSleep = true"></sleep>
  </div>
  <div v-else-if="!showTeeth">
    <teeth :teeth="teeth" @save-teeth="saveTeeth" @cancel="showTeeth = true"></teeth>
  </div>
  <div v-else-if="!showVaccination">
    <vaccination :vaccination="vaccination" @save-vaccination="vaccination" @cancel="showVaccination = true"></vaccination>
  </div>-->
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
  components: { Vaccination, Teeth, Walk, Feeding, Height, Sleep },
  props: {
    walk: {
      type: Object,
      required: false
    },
    feeding: {
      type: Object,
      required: false
    },
    height: {
      type: Object,
      required: false
    },
    sleep: {
      type: Object,
      required: false
    },
    teeth: {
      type: Object,
      required: false
    },
    vaccination: {
      type: Object,
      required: false
    }
  }
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