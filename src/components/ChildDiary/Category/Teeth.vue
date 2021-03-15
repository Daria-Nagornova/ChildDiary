<template>
  <p class="title">Прорезывание зубов</p>
  <div>
    <button class="btn btn-primary btn-teeth btn11" @click="name='Центральный верхний резец'"></button>
    <button class="btn btn-primary btn-teeth btn11" @click="name='Центральный верхний резец'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn1" @click="name='Боковой верхний резец'"></button>
    <button class="btn btn-primary btn-teeth btn1" @click="name='Боковой верхний резец'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn2" @click="name='Верхний клык'"></button>
    <button class="btn btn-primary btn-teeth btn2" @click="name='Верхний клык'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn3" @click="name='Верхний первый моляр'"></button>
    <button class="btn btn-primary btn-teeth btn3" @click="name='Верхний первый моляр'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn4" @click="name='Верхний второй моляр'"></button>
    <button class="btn btn-primary btn-teeth btn4" @click="name='Верхний второй моляр'"></button>
  </div>

  <div>
  <button class="btn btn-primary btn-teeth btn16" @click="name='Нижний второй моляр'"></button>
  <button class="btn btn-primary btn-teeth btn16" @click="name='Нижний второй моляр'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn12" @click="name='Нижний первый моляр'"></button>
    <button class="btn btn-primary btn-teeth btn12" @click="name='Нижний первый моляр'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn13" @click="name='Нижний клык'"></button>
    <button class="btn btn-primary btn-teeth btn13" @click="name='Нижний клык'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn14" @click="name='Боковой нижний резец'"></button>
    <button class="btn btn-primary btn-teeth btn14" @click="name='Боковой нижний резец'"></button>
  </div>
  <div>
    <button class="btn btn-primary btn-teeth btn15" @click="name='Центральный нижний резец'"></button>
    <button class="btn btn-primary btn-teeth btn15" @click="name='Центральный нижний резец'"></button>
  </div>
  <div class="error">{{ errorTeeth }}</div>
  <div>
    <label class="elem-margin">{{ name }} прорезался:</label>
    <input class="form-control elem-margin" type="date" v-model="date">
  </div>
  <div class="error">{{ errorDate }}</div>
  <div>
    <button class="btn btn-primary elem-margin" @click="save">Сохранить</button>
    <button class="btn btn-primary elem-margin" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Teeth",
  data() {
    return {
      date: '',
      name: '',
      errorDate: '',
      errorTeeth: ''
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
      if(this.name == '') {
        this.errorTeeth = "Нужно выбрать зуб!"
      }
      if(this.date == '') {
        this.errorDate = "Выберите дату"
      }
      if(this.name != '' && this.date != ''){
        this.$store.dispatch('addTeeth', {nameTeeth: this.name, dateTeeth: this.date})
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
.btn-teeth {
  width: 15px;
  height: 15px;
}
.btn11 {
  margin: 0 2px 0 2px;
  background: blueviolet;
}
.btn1 {
  margin: -10px 25px 0 25px;
  background: fuchsia;
}
.btn2 {
  margin: -20px 35px 0 35px;
  background: gold;
}
.btn3 {
  margin: -30px 45px 0 45px;
  background: lightsalmon;
}
.btn4 {
  margin: -40px 55px 0 55px;
  background: crimson;
}

.btn16 {
  margin: 0 55px 0 55px;
  background: crimson;
}
.btn12 {
  margin: -10px 45px 0 45px;
  background: lightsalmon;
}
.btn13 {
  margin: -20px 35px 0 35px;
  background: gold;
}
.btn14 {
  margin: -30px 25px 0 25px;
  background: fuchsia;
}
.btn15 {
  margin: -40px 2px 0 2px;
  background: blueviolet;
}
.elem-margin {
  margin: 10px;
}
</style>