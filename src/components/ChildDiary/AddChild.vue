<template>
  <div class="addChild">
    <p>{{ prompt }}</p>

    <div>
      <div class="form-group">
        <label for="name">Имя</label>
        <input class="form-control" type="text" v-model="name">
      </div>
      <div class="error">{{ errorName }}</div>
      <div class="form-group">
        <label for="dateOfBirth">Дата рождения</label>
        <input class="form-control" type="date" v-model="dateOfBirth">
      </div>
      <div class="error">{{ errorDate }}</div>
      <div class="form-group">
        <label for="gender">Пол ребенка</label>
        <select class="form-control" v-model="gender">
          <option value="женский">Женский</option>
          <option value="мужской">Мужской</option>
        </select>
      </div>
      <div class="error">{{ errorGender }}</div>
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
  data() {
    return {
      name: '',
      dateOfBirth: '',
      gender: '',
      errorName: '',
      errorDate: '',
      errorGender: ''
    }
  },
  inject: ['prompt'],
  methods: {
    save () {
      /*const name = this.name
      this.$emit('save-name', {name})*/
      if(this.name == '') {
        this.errorName = "Заполните поле"
      }
      if(this.dateOfBirth == '') {
        this.errorDate = "Выберите дату"
      }
      if(this.gender == '') {
        this.errorGender = "Выберите пол"
      }
      if(this.name != '' && this.dateOfBirth != '' && this.gender != ''){
        this.$store.dispatch('addChild', {childName: this.name, childDateOfBirth: this.dateOfBirth, childGender: this.gender})
        this.$store.dispatch('loadChild')
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
.addChild {
  padding: 20px;
}
</style>
