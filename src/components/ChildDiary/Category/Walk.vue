<template>
  <div>
    <p class="title">Прогулка</p>
    <label for="startWalk">Начало прогулки</label>
    <input class="form-control" type="time" v-model="$store.state.startWalk">
    <label for="endWalk">Конец прогулки</label>
    <input class="form-control" type="time" v-model="$store.state.endWalk">
    <label for="durationWalk">Длительность прогулки, минут</label>
    <input class="form-control" type="text" v-model="$store.state.durationWalk">
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
  methods: {
    save () {
      this.cancel()
      this.$router.push({ path: 'notesToday' })
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