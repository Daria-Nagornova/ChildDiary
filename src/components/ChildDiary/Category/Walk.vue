<template>
  <div>
    <p class="title">Прогулка</p>
    <label for="startWalk">Начало прогулки</label>
    <input class="form-control" type="time" v-model="start">
    <div class="error">{{ errorStart }}</div>
    <label for="endWalk">Конец прогулки</label>
    <input class="form-control" type="time" v-model="end">
    <div class="error">{{ errorEnd }}</div>
    <label for="durationWalk">Длительность прогулки, минут</label>
    <input class="form-control" type="text" v-model="duration">

  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Walk",
  data() {
    return {
      start: '',
      end: '',
      duration: '',
      errorStart: '',
      errorEnd: '',
      errorDuration: '',
    }
  },
  methods: {
    save () {
      if(this.start == '') {
        this.errorStart = "Укажите время начала прогулки"
      }
      if(this.end == '') {
        this.errorEnd = "Укажите время окончания прогулки"
      }
      if(this.duration == '') {
        this.errorDuration = "Поле должно быть заполнено"
      }
      if(this.duration != '' && isNaN(Number(this.duration))) {
        this.errorDuration = "В это поле нужно ввести число"
      }
      if(this.start != '' && this.end != '' && this.duration != '' && !isNaN(Number(this.duration))) {
        this.$store.commit('saveWalk', {startWalk: this.start, endWalk: this.end, durationWalk: this.duration})
        this.cancel()
      }
    },
    cancel () {
      this.$router.push('/notesToday')
    }
  }
}
</script>

<style scoped>
* {
  margin: 10px;
}
</style>