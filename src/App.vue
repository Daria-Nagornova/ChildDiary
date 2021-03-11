<template>
  <header-diary><h1 class="headerDiary">ДНЕВНИК РЕБЕНКА</h1></header-diary>
  <router-view></router-view>
  <router-link to="/addNotes" class="btn btn-primary addNotes">+ Добавить запись</router-link>
  <!--<child-diary :age="-50" :child="child" @save-name="child = $event"></child-diary>-->
</template>

<script>
import AddNotes from "@/components/ChildDiary/AddNotes"
import NotesToday from "./components/ChildDiary/NotesToday";
import HeaderDiary from './components/ChildDiary/HeaderDiary.vue'
import ChildDiary from "./components/ChildDiary/ChildDiary";

export default {
  name: 'App',
  components: {
    ChildDiary,
    HeaderDiary,
    NotesToday,
    AddNotes
  },
  data () {
    return {
      showCategory: false,
      child: {
        name: '',
        age: 0
      },
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
  background:  url("assets/logo1.png") 15% 50% no-repeat,
  url("assets/logo2.png") 85% 50% no-repeat;
  color: navy;
}
.addNotes {
  margin: 200px 0 20px 550px;
}
.child {
  background:  url("assets/baby.png") 18% 50% no-repeat;
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
.error {
  color: red;
}
</style>
