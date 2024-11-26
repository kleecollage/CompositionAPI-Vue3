<template>
  <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
    <p :class="{'crossed' : task.state}">{{ task.text }}</p>
    <div>
      <!--  UNDO TASK  -->
      <i
        v-if="task.state"
        class="fa-solid fa-rotate-left"
        role="button"
        @click="complete(task.id)"
      />
      <!--  MARK AS COMPLETED  -->
      <i
        v-else
        class="fa-regular fa-circle-check text-success"
        role="button"
        @click="complete(task.id)"
        />
        <!-- REMOVE TASK -->
        <i
        class="fa-regular fa-square-minus mx-2 text-danger"
        role="button"
        @click="remove(task.id)"
      />
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  setup () {
    const tasks = inject('tasks')

    const remove = id => {
      tasks.value = tasks.value.filter(item => item.id != id)
    }

    const complete = id => {
      tasks.value = tasks.value.map(item => {
        if (item.id == id) {
          item.state = !item.state
        }
        return item
      })
    }


    return {
      tasks,
      remove,
      complete
    }
  }
}
</script>

<style lang="css" scoped>
  .crossed {
    text-decoration: line-through;
  }
</style>