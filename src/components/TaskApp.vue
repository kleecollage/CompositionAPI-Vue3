<template>
  <h1>Tasks App</h1>
  <TaskForm />
  <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  <div class="alert alert-dark mt-3" v-if="tasks.length == 0">
    No pending task
  </div>
  <pre>{{ tasks }}</pre>
</template>

<script>
import { provide, ref, watchEffect } from 'vue';
import TaskForm from './TaskForm.vue';
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskForm,
    TaskItem
  },
  setup () {
    const tasks = ref([])

    provide("tasks", tasks)

    // get task from local storage
    if (localStorage.getItem('tasks')) {
      tasks.value = JSON.parse(localStorage.getItem('tasks'))
    }
    // add tasks to local storage
    watchEffect( () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value))
    })


    return {
      tasks,
    }
  }
}
</script>