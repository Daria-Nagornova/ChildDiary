<template>
    <div class="diary">
      <div class="date">
      <p v-if="dateNotes !== ''">{{ dateNotes }}</p>
      <p v-else>{{ todayDate }}</p>
      </div>
      <div v-show="startWalk !== ''" class="walk">
        <div>
          <span>Прогулка</span>
          <span> {{ startWalk }}-{{ endWalk }} </span>
          <span>Длительность: {{ durationWalk }}минут </span>
        </div>
      </div>
      <div v-show="nameVaccination !== ''" class="vaccination">
        <div>
          <span>Прививка</span>
          <span> Наименование вакцины: {{ nameVaccination }}</span>
          <span>Комментарий: {{ commentVaccination }}</span>
        </div>
      </div>
      <div v-show="startSleep !== ''" class="sleep">
        <div>
          <span>Cон</span>
          <span>{{ startSleep }}-{{ endSleep }}</span>
          <span>Длительность: {{ durationSleep }}минут </span>
          <span>{{ commentSleep }}</span>
        </div>
      </div>
      <div v-show="childHeight !== ''" class="height">
        <div>
          <span>Рост и вес</span>
          <span>{{ childHeight }}см {{ childWeight }}кг</span>
        </div>
      </div>
      <div v-show="timeFeeding !== ''" class="feeding">
        <div>
          <span>Кормление</span>
          <span>{{ timeFeeding }}</span>
          <span>Продукты: {{ productsFeeding }}</span>
        </div>
      </div>
      <div v-show="nameTeeth !== ''" class="teeth">
        <div>
          <span>Прорезывание зубов</span>
          <span>{{ nameTeeth }} прорезался: {{ dateTeeth }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import AddNotes from "@/components/ChildDiary/AddNotes";
export default {
  name: "NotesToday",
  components: {AddNotes},
  data () {
    return {
     todayDate: ''
    }
  },
  computed: {
    dateNotes() {
      return this.$store.getters.dateNotes
    },
    timeFeeding() {
      return this.$store.getters.timeFeeding
    },
    productsFeeding() {
      return this.$store.getters.productsFeeding
    },
    childHeight() {
      return this.$store.getters.childHeight
    },
    childWeight() {
      return this.$store.getters.childWeight
    },
    startSleep() {
      return this.$store.getters.startSleep
    },
    endSleep() {
      return this.$store.getters.endSleep
    },
    durationSleep() {
      return this.$store.getters.durationSleep
    },
    commentSleep() {
      return this.$store.getters.commentSleep
    },
    nameTeeth() {
      return this.$store.getters.nameTeeth
    },
    dateTeeth() {
      return this.$store.getters.dateTeeth
    },
    nameVaccination() {
      return this.$store.getters.nameVaccination
    },
    commentVaccination() {
      return this.$store.getters.commentVaccination
    },
    startWalk() {
      return this.$store.getters.startWalk
    },
    endWalk() {
      return this.$store.getters.endWalk
    },
    durationWalk() {
      return this.$store.getters.durationWalk
    },
    todayDate() {
      return ((new Date()).getDate() + '-0' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getFullYear())
    }
  }
}
</script>

<style scoped>

.diary {
  text-align: left;

}
.diary div {

}
.diary span {
  margin-right: 15px;
  border-right-width:2px;
  border-right-color: rgb(190,190,190);
  border-right-style: solid;
  padding: 10px;
}
.walk, .height, .teeth, .vaccination, .sleep, .feeding {
  background-color: lightblue;
  height: 60px;
  position: relative;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.walk div, .height div, .teeth div, .vaccination div, .sleep div, .feeding div {
  margin-left: 25%;
  margin-top: 20px;
  position: absolute;
}
.height {
  background-color: aquamarine;
}
.teeth {
  background-color: cornflowerblue;
}
.vaccination {
  background-color: plum;
}
.sleep{
  background-color: mediumpurple;
}
.feeding {
  background-color: skyblue;
}
.date {
  margin: 40px auto;
  width: 150px;
  align-items: center;
  border-bottom-width:2px;
  border-bottom-color: blue;
  border-bottom-style: solid;
  text-align: center;
}
</style>