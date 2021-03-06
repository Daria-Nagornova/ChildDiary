<template>
  <div>
    <p>Рост и вес</p>
    <label for="childHeight">Рост ребенка, см</label>
    <input class="form-control" type="text" v-model="childHeight">
    <label for="childWeight">Вес ребенка, кг</label>
    <input class="form-control" type="text" v-model="childWeight">
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
  data () {
    return {
      childHeight: '',
      childWeight: ''
    }
  },
  methods: {
    save () {
      const childHeight = this.childHeight
      const childWeight = this.childWeight
      this.$emit('save-height', { childHeight, childWeight })
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