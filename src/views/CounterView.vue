<template>
  <h1>Counter: {{ counter }}</h1>
  <Button text-button="Add" @action="increment"/>
  &nbsp;
  <Button text-button="Substract" @action="decrement"/>
</template>

<script>
import Button from '@/components/Button.vue';
import { useCounter } from '@/hooks/useCounter';

export default {
  components: {
    Button,
  },
  setup(props) {
    // const { counter, increment, decrement} = useCounter()
    return  {...useCounter()}
  }
}
</script>