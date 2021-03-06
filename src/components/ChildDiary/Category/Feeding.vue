<template>
  <div>
    <p>Кормление</p>
    <label for="timeFeeding">Время приема пищи</label>
    <input class="form-control" type="time" v-model="timeFeeding">
    <label for="productsFeeding">Продукты</label>
    <input class="form-control" type="text" v-model="productsFeeding">
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
  data () {
    return {
      timeFeeding: '',
      productsFeeding: ''
    }
  },
  methods: {
    save () {
      const timeFeeding = this.timeFeeding
      const productsFeeding = this.productsFeeding
      this.$emit('save-feeding', { timeFeeding, productsFeeding })
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