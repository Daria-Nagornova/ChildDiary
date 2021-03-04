<template>
  <header-diary class="headerDiary"></header-diary>
  <notes-today></notes-today>
  <div v-if="!showCategory" class="addNotes">
    <button class="btn btn-primary" @click="showCategory = !showCategory">+ Добавить запись</button>
  </div>
  <div v-else>
    <add-notes></add-notes>
  </div>


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
  margin-left: 500px;
}


</style>
