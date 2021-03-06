<template>
  <div>
    <p>Привки</p>
    <label for="timeFeeding">Название вакцины</label>
    <input class="form-control" type="text" v-model="nameVaccination">
    <label for="productsFeeding">Комментарий(как перенес ребенок)</label>
    <input class="form-control" type="text" v-model="commentVaccination">
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
  data () {
    return {
      nameVaccination: '',
      commentVaccination: ''
    }
  },
  methods: {
    save () {
      const nameVaccination = this.nameVaccination
      const commentVaccination = this.commentVaccination
      this.$emit('save-vaccination', { nameVaccination, commentVaccination })
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