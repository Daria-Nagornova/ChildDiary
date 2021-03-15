<template>
  <div>
    <p class="title">Прививки</p>
    <label for="timeFeeding">Название вакцины</label>
    <input class="form-control" type="text" v-model="name">
    <div class="error">{{ errorName }}</div>
    <label for="productsFeeding">Комментарий(как перенес ребенок)</label>
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
  name: "Vaccination",
  data() {
    return {
      comment: '',
      name: '',
      errorComment: '',
      errorName: '',
      path: 'vaccination'
    }
  },
  created() {
    this.loadList()
  },
  methods: {
    loadList() {
      this.$store.dispatch('load')
    },
    save () {
      if(this.name == '') {
        this.errorName = "Введите наименование вакцины"
      }
      if(this.comment == '') {
        this.errorComment = "Заполните поле"
      }
      if(this.name != '' && this.comment != ''){
        this.$store.dispatch('addVaccination', {nameVaccination: this.name, commentVaccination: this.comment})
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