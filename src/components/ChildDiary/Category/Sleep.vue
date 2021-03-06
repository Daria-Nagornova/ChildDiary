<template>
  <div>
    <p>Сон</p>
    <label for="startSleep">Начало сна</label>
    <input v-onclick:[direction]="{background: commentSleep}" class="form-control" type="time" v-model="startSleep">
    <label for="endSleep">Конец сна</label>
    <input class="form-control" type="time" v-model="endSleep">
    <label for="durationSleep">Длительность сна, минут</label>
    <input class="form-control" type="text" v-model="durationSleep">
    <label for="commentSleep">Комментарий</label>
    <input class="form-control" type="text" v-model="commentSleep">
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
      startSleep: '',
      endSleep: '',
      durationSleep: '',
      commentSleep: ''
    }
  },
  methods: {
    save () {
      const startSleep = this.startSleep
      const endSleep = this.endSleep
      const durationSleep = this.durationSleep
      const commentSleep = this.commentSleep
      this.$emit('save-sleep', { startSleep, endSleep, durationSleep, commentSleep })
      this.cancel()
      this.$router.push('/notesToday')
    },
    cancel () {
      this.$emit('cancel')
      this.$router.push('/notesToday')
    }
  }
}
</script>

<style scoped>

</style>