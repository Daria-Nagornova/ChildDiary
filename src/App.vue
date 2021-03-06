<template>
  <header-diary class="headerDiary"><h1>Дневник ребенка</h1></header-diary>
  <notes-today></notes-today>
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
.headerDiary {
  padding: 20px;
}
.addNotes {
  margin-top: 350px;
  margin-left: 550px;
}


</style>
