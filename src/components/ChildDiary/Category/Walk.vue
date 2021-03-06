<template>
  <div>
    <p>Прогулка</p>
    <label for="startWalk">Начало прогулки</label>
    <input class="form-control" type="time" v-model="startWalk">
    <label for="endWalk">Конец прогулки</label>
    <input class="form-control" type="time" v-model="endWalk">
    <label for="durationWalk">Длительность прогулки, минут</label>
    <input class="form-control" type="text" v-model="durationWalk">
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Walk",
  props: ['walk'],
  data () {
    return {
      startWalk: '',
      endWalk: '',
      durationWalk: ''
    }
  },
  methods: {
    save () {
      const startWalk = this.startWalk
      const endWalk = this.endWalk
      const durationWalk = this.durationWalk
      this.$emit('save-walk', { startWalk, endWalk, durationWalk })
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