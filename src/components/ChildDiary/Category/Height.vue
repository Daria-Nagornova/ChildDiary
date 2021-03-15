<template>
  <div>
    <p class="title">Рост и вес</p>
    <label for="childHeight">Рост ребенка, см</label>
    <input class="form-control" type="text" v-model="height">
    <div class="error">{{ errorHeight }}</div>
    <label for="childWeight">Вес ребенка, кг</label>
    <input class="form-control" type="text" v-model="weight">
    <div class="error">{{ errorWeight }}</div>
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Height",
  data(){
    return {
      height: '',
      weight: '',
      errorWeight: '',
      errorHeight: ''
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
      if(this.height == '') {
        this.errorHeight = "Поле должно быть заполнено"
      }
      if(this.weight == '') {
        this.errorWeight = "Поле должно быть заполнено"
      }
      if(this.weight != '' && isNaN(Number(this.weight))) {
        this.errorWeight = "В это поле нужно ввести число"
      }
      if(this.height != '' && isNaN(Number(this.height))) {
        this.errorHeight  = "В это поле нужно ввести число"
      }
      if(this.height != '' && this.weight != '' && !isNaN(Number(this.height)) &&!isNaN(Number(this.weight))) {
        this.$store.dispatch('addHeight', {childHeight: this.height, childWeight: this.weight})
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