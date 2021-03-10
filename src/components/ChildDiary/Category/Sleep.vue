<template>
  <div>
    <p class="title">Сон</p>
    <label for="startSleep">Начало сна</label>
    <input v-onclick:[direction]="{background: $store.state.commentSleep}" class="form-control" type="time" v-model="$store.state.startSleep">
    <label for="endSleep">Конец сна</label>
    <input class="form-control" type="time" v-model="$store.state.endSleep">
    <label for="durationSleep">Длительность сна, минут</label>
    <input class="form-control" type="text" v-model="$store.state.durationSleep">
    <label for="commentSleep">Комментарий</label>
    <input class="form-control" type="text" v-model="$store.state.commentSleep">
  </div>
  <div>
    <button class="btn btn-primary" @click="save">Сохранить</button>
    <button class="btn btn-primary" @click="cancel">Отменить</button>
  </div>
</template>

<script>
export default {
  name: "Sleep",
  directives: {
    onclick: {
      updated(elem, binding) {
        const s = binding.arg
        elem.style[s] = binding.value.background;
      }
    }
  },
  props: ['sleep'],
  data () {
    return {
      direction: 'background'
    }
  },
  methods: {
    save () {
      this.cancel()
      this.$router.push('/notesToday')
    },
    cancel () {
      this.$router.push('/notesToday')
    }
  }
}
</script>

<style scoped>
* {
  margin: 10px;
}
</style>