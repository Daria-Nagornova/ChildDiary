<template>
  <header-diary><h1 class="headerDiary">Дневник ребенка</h1></header-diary>
  <router-view></router-view>
  <router-link to="/addNotes" class="btn btn-primary addNotes">+ Добавить запись</router-link>
</template>

<script>
import AddNotes from "@/components/ChildDiary/AddNotes"
import NotesToday from "./components/ChildDiary/NotesToday";
import HeaderDiary from './components/ChildDiary/HeaderDiary.vue'

export default {
  name: 'App',
  components: {
    HeaderDiary,
    NotesToday,
    AddNotes
  },
  data () {
    return {
      showCategory: false,
      prompt: 'Введите данные ребенка'
    }
  },
  provide () {
    return {
      prompt: this.prompt
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;

}
body {
  background-image: url("assets/fon2.jpg");
}
.headerDiary {
  padding: 20px;
  margin: 40px;
}
.addNotes {
  margin: 200px 0 20px 550px;
}
.child {
  background:  url("assets/baby.png") 10% 50% no-repeat;
}
.walk-icon {
  background:  url("assets/walk.png") 10% 50% no-repeat;
}
.sleep-icon {
  background:  url("assets/sleep.png") 10% 50% no-repeat;
}
.teeth-icon {
  background:  url("assets/teeth.png") 10% 50% no-repeat;
}
.vaccination-icon {
  background:  url("assets/vaccin.png") 10% 50% no-repeat;
}
.height-icon {
  background:  url("assets/height.png") 10% 50% no-repeat;
}
.feeding-icon {
  background:  url("assets/feeding.png") 10% 50% no-repeat;
}
.title {
  font-size: 24px;
  font-weight: 500;
  color: blue;
  border-bottom-width:2px;
  border-bottom-color: blue;
  border-bottom-style: solid;
  margin-top: 20px;
}
</style>
