<template>
  <div>
    <p class="title">Привки</p>
    <label for="timeFeeding">Название вакцины</label>
    <input class="form-control" type="text" v-model="$store.state.nameVaccination">
    <label for="productsFeeding">Комментарий(как перенес ребенок)</label>
    <input class="form-control" type="text" v-model="$store.state.commentVaccination">
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>

export default {
  name: "Vaccination",
  props: ['vaccination'],
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