<template>
  <h1 :style="{'color': color}">Counter: {{ dollarSymbol }}</h1>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['counter', 'color'],
  //** Options API **//
  // computed: {
  //   dollarSymbol() {
  //     return '$' + this.counter
  //   }
  // },
  setup(props) {
    const dollarSymbol = computed(() => {
      return '$' + props.counter
    })

    return {
      dollarSymbol,
    }
  }
}
</script>