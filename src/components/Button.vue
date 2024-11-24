<template>
  <!-- <button @click="$emit('action')">
    {{ textButton }}
  </button> -->
  <button @click="actionSon">
    {{ textButton }}
  </button>
</template>

<script>
export default {
  props:['textButton'],
  setup(props, context) {
    const actionSon = () => {
      context.emit('action')
    }

    return {
      actionSon
    }
  }
}
</script>