<template>
  <div v-if="!showCalendar">
    <button class="btn btn-outline-info" @click="switch">
      <slot></slot>
    </button>
  </div>
  <div v-else>
    <input class="form-control" type="date" v-model="$store.state.dateNotes" @change="selectNotes">
  </div>

</template>

<script>
import {switchButton} from '@/components/ChildDiary/mixins/SwitchButton'
export default {
  name: "Calendar",
  props: ['calendar'],
  mixins: [ switchButton ],
  methods: {
    selectNotes() {
      this.$store.commit('selectNotes')
      this.$router.push('/notesToday')
    }
  }
}
</script>

<style scoped>

</style>