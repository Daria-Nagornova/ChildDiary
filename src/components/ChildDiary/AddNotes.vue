<template>

  <div v-if="!showWalk">
    <walk :walk="walk" @save-walk="saveWalk" @cancel="showWalk = true"></walk>
  </div>
  <div v-else class="container category">
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-info" @click="showWalk = !showWalk">Прогулка</button>
      </div>
      <div class="col">
        <button class="btn btn-outline-info" @click="showSleep = !showSleep">Сон</button>
      </div>
      <div class="col">
        <button class="btn btn-outline-info" @click="showFeeding = !showFeeding">Кормление</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-info" @click="showHeight = !showHeight">Рост и вес</button>
      </div>
      <div class="col">
        <button class="btn btn-outline-info" @click="showVaccination = !showWalk">Прививка</button>
      </div>
      <div class="col">
        <button class="btn btn-outline-info" @click="showTeeth = !showTeeth">Зубы</button>
      </div>
    </div>
  </div>
</template>

<script>
import Walk from '@/components/ChildDiary/Category/Walk'

export default {
  name: 'AddNotes',
  components: { Walk },
  props: {
    walk: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      showWalk: true,
      showSleep: true,
      showFeeding: true,
      showHeight: true,
      showVaccination: true,
      showTeeth: true
    }
  },
  methods: {
    saveWalk (walk) {
      this.$emit('save-walk', walk)
    }
  }
}
</script>

<style scoped>
.category button {
  width: 200px;
  height: 30px;
}
.category .row {
  margin: 20px;
}
</style>