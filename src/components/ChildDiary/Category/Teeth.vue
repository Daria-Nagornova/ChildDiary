<template>
  <p>Прорезывание зубов</p>
  <div>
    <button class="btn btn-primary btn-teeth btn11" @click="nameTeeth='Центральный верхний резец'">+</button>
    <button class="btn btn-primary btn-teeth btn11" @click="nameTeeth='Центральный верхний резец'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn1" @click="nameTeeth='Боковой верхний резец'">+</button>
    <button class="btn btn-primary btn-teeth btn1" @click="nameTeeth='Боковой верхний резец'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn2" @click="nameTeeth='Верхний клык'">+</button>
    <button class="btn btn-primary btn-teeth btn2" @click="nameTeeth='Верхний клык'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn3" @click="nameTeeth='Верхний первый моляр'">+</button>
    <button class="btn btn-primary btn-teeth btn3" @click="nameTeeth='Верхний первый моляр'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn4" @click="nameTeeth='Верхний второй моляр'">+</button>
    <button class="btn btn-primary btn-teeth btn4" @click="nameTeeth='Верхний второй моляр'">+</button>
  </div>

  <div>
  <button class="btn btn-primary btn-teeth btn16" @click="nameTeeth='Нижний второй моляр'">+</button>
  <button class="btn btn-primary btn-teeth btn16" @click="nameTeeth='Нижний второй моляр'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn12" @click="nameTeeth='Нижний первый моляр'">+</button>
    <button class="btn btn-primary btn-teeth btn12" @click="nameTeeth='Нижний первый моляр'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn13" @click="nameTeeth='Нижний клык'">+</button>
    <button class="btn btn-primary btn-teeth btn13" @click="nameTeeth='Нижний клык'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn14" @click="nameTeeth='Боковой нижний резец'">+</button>
    <button class="btn btn-primary btn-teeth btn14" @click="nameTeeth='Боковой нижний резец'">+</button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn15" @click="nameTeeth='Центральный нижний резец'">+</button>
    <button class="btn btn-primary btn-teeth btn15" @click="nameTeeth='Центральный нижний резец'">+</button>
  </div>
  <label>{{ nameTeeth }} прорезался:</label>
  <input class="form-control" type="date" v-model="dateTeeth">
  <div></div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Teeth",
  props: ['teeth'],
  data () {
    return {
      nameTeeth: '',
      dateTeeth: ''
    }
  },
  methods: {
    save () {
      const nameTeeth = this.nameTeeth
      const dateTeeth = this.dateTeeth
      this.$emit('save-teeth', { nameTeeth, dateTeeth })
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
.btn-teeth {
  width: 15px;
  height: 15px;
}
.btn11 {
  margin: 0 2px 0 2px;
}
.btn1 {
  margin: -10px 25px 0 25px;
}
.btn2 {
  margin: -20px 35px 0 35px;
}
.btn3 {
  margin: -30px 45px 0 45px;
}
.btn4 {
  margin: -40px 55px 0 55px;
}

.btn16 {
  margin: 0 55px 0 55px;
}
.btn12 {
  margin: -10px 45px 0 45px;
}
.btn13 {
  margin: -20px 35px 0 35px;
}
.btn14 {
  margin: -30px 25px 0 25px;
}
.btn15 {
  margin: -40px 2px 0 2px;
}

</style>