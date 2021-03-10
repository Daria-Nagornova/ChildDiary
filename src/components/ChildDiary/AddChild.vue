<template>
  <div class="addChild">
    <p>{{ prompt }}</p>

    <div>
      <div class="form-group">
        <label for="name">Имя</label>
        <input class="form-control" type="text" v-model="$store.state.name">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Дата рождения</label>
        <input class="form-control" type="date" v-model="$store.state.dateOfBirth">
      </div>
      <div class="form-group">
        <label for="gender">Пол ребенка</label>
        <select class="form-control" v-model="$store.state.gender">
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
  inject: ['prompt'],
  methods: {
    save () {
      this.$store.state.showAddChild = true
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
.addChild {
  padding: 20px;
}
</style>
