<template>
  <div class="addChild">
    <p>{{ prompt }}</p>
    <div>
      <div class="form-group">
        <label for="name">Имя</label>
        <input class="form-control" type="text" v-model="name">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Дата рождения</label>
        <input class="form-control" type="date" v-model="dateOfBirth">
      </div>
      <div class="form-group">
        <label for="gender">Пол ребенка</label>
        <select class="form-control" v-model="gender">
          <option value="женский">Женский</option>
          <option value="мужской">Мужской</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" @click="save">Сохранить</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="cancel">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddChild',
  props: ['child'],
  data () {
    return {
      name: '',
      dateOfBirth: '',
      gender: ''
    }
  },
  inject: ['prompt'],
  methods: {
    save () {
      const name = this.name
      const dateOfBirth = this.dateOfBirth
      const gender = this.gender
      this.$emit('save-child', { name, dateOfBirth, gender })
      this.cancel()
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.addChild {
  padding: 20px;
}
</style>
