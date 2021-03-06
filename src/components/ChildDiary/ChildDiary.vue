<template>



    <add-child class="btn btn-primary" :child="child" @save-child="saveChild" @cancel="showForm = false"></add-child>


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