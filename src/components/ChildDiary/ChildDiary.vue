<template>



    <add-child class="btn btn-primary" :child="child" @save-name="saveName"></add-child>
    <div> Пропсы и валидация {{ child.name }}</div>
  <div> Пропсы и валидация {{ age }}</div>

</template>

<script>
import AddChild from "@/components/ChildDiary/AddChild"
export default {
  name: 'ChildDiary',
  components: { AddChild },
  props: {child: Object, age:
        {
          type: Number,
          required: true,
          validator: function(value){
            return value >= 0 && value < 100;
          }
        }
  },
  data () {
    return {
      showForm: false,
    }
  },
  methods: {
    saveName (child) {
      this.$emit('save-name', child)
    }
  }
}
</script>

<style scoped>
span {
  padding: 5px;
}
</style>