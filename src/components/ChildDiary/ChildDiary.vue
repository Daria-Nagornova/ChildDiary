<template>


  <div v-if="!showForm">
    <button class="btn btn-primary" @click="showForm = !showForm">Добавить ребенка</button>
    <span> {{ child.name }} </span>
    <span>{{ child.dateOfBirth }} </span>
    <span>{{ child.gender }}</span>
  </div>
  <div v-else>
    <add-child class="btn btn-primary" :child="child" @save-child="saveChild" @cancel="showForm = false"></add-child>
  </div>
</template>

<script>
import AddChild from "@/components/ChildDiary/AddChild"
export default {
  name: 'ChildDiary',
  components: { AddChild },
  props: {
    child: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    saveChild (child) {
      this.$emit('save-child', child)
    }
  }
}
</script>

<style scoped>
span {
  padding: 5px;
}
</style>