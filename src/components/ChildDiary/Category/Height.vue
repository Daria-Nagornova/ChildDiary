<template>
  <div>
    <p class="title">Рост и вес</p>
    <label for="childHeight">Рост ребенка, см</label>
    <input class="form-control" type="text" v-model="$store.state.childHeight">
    <label for="childWeight">Вес ребенка, кг</label>
    <input class="form-control" type="text" v-model="$store.state.childWeight">
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Height",
  props: ['height'],
  methods: {
    save () {
      this.cancel()
      this.$router.push('/notesToday')
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