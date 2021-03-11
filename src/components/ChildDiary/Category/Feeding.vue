<template>
  <div>
    <p class="title">Кормление</p>
    <label for="timeFeeding">Время приема пищи</label>
    <input class="form-control" type="time" v-model="time">
    <div class="error">{{ errorTime }}</div>
    <label for="productsFeeding">Продукты</label>
    <input class="form-control" type="text" v-model="product">
    <div class="error">{{ errorProducts }}</div>
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>

export default {
  name: "Feeding",
  data() {
    return {
      time: '',
      product: '',
      errorTime: '',
      errorProducts: ''
    }
  },
  methods: {
    save () {
      if(this.product == '') {
        this.errorProducts = "Поле должно быть заполнено"
      }
      if(this.time == '') {
        this.errorTime = "Выберите время кормления"
      }
      if(this.time != '' && this.product != ''){
        this.$store.commit('saveFeeding', {timeFeeding: this.time, productsFeeding: this.product})
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