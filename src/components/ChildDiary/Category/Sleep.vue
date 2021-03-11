<template>
  <div>
    <p class="title">Сон</p>
    <label for="startSleep">Начало сна</label>
    <input v-onclick:[direction]="{background: comment}" class="form-control" type="time" v-model="start">
    <div class="error">{{ errorStart }}</div>
    <label for="endSleep">Конец сна</label>
    <input class="form-control" type="time" v-model="end">
    <div class="error">{{ errorEnd }}</div>
    <label for="durationSleep">Длительность сна, минут</label>
    <input class="form-control" type="text" v-model="duration">
    <div class="error">{{ errorDuration }}</div>
    <label for="commentSleep">Комментарий</label>
    <input class="form-control" type="text" v-model="comment">
    <div class="error">{{ errorComment }}</div>
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Sleep",
  directives: {
    onclick: {
      updated(elem, binding) {
        const s = binding.arg
        elem.style[s] = binding.value.background;
      }
    }
  },
  props: ['sleep'],
  data () {
    return {
      direction: 'background',
      start: '',
      end: '',
      duration: '',
      comment: '',
      errorStart: '',
      errorEnd: '',
      errorDuration: '',
      errorComment: ''
    }
  },
  methods: {
    save () {
      if(this.start == '') {
        this.errorStart = "Укажите время начала сна"
      }
      if(this.end == '') {
        this.errorEnd = "Укажите время окончания сна"
      }
      if(this.duration == '') {
        this.errorDuration = "Поле должно быть заполнено"
      }
      if(this.comment == '') {
        this.errorComment = "Поле должно быть заполнено"
      }
      if(this.duration != '' && isNaN(Number(this.duration))) {
        this.errorDuration = "В это поле нужно ввести число"
      }
      if(this.start != '' && this.end != '' && this.duration != '' && this.comment != '' && !isNaN(Number(this.duration))) {
        this.$store.commit('saveSleep', {startSleep: this.start, endSleep: this.end, durationSleep: this.duration, commentSleep: this.comment})
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