<template>
  <div>
    <p class="title">Кормление</p>
    <label for="timeFeeding">Время приема пищи</label>
    <input class="form-control" type="time" v-model="$store.state.timeFeeding">
    <label for="productsFeeding">Продукты</label>
    <input class="form-control" type="text" v-model="$store.state.productsFeeding">
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>

export default {
  name: "Feeding",
  props: {
    timeFeeding: {
      type: String,
      required: true
    },
    productsFeeding: {
      type: String,
      required: true,
        validator: function(value){
          if (
              value.length > 5
          )
          return value;
        }
    }
  },
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