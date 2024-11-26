<template>
  <form @submit.prevent="addTask">
    <input type="text" placeholder="Enter task" class="form-control my-2" v-model.trim="text"/>
    <button class="btn btn-primary w-100 py-2">Add</button>
  </form>
</template>

<script>
import { inject, ref } from "vue";
export default {
  setup () {
    const text = ref('')
    const tasks = inject('tasks')

    const addTask = () => {
      if (text.value == '') {
        console.log('empty text')
      }
      const task = {
        id: Date.now(),
        state: false,
        text: text.value
      }

      tasks.value.push(task)

      text.value = ''
    }

    return {
      tasks,
      text,
      addTask
    }
  }
}
</script>