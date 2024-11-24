<template>
  <div class="about">
    <h1 :style="{'color': color}">
      Counter: {{ counter }}
    </h1>
    <br />
    <button @click="increment">+</button>
    &nbsp;
    <button @click="decrement">-</button>
    <hr />

    <input v-model="text" type="text" />
    <pre>{{ text }}</pre>
    <hr />

    <Title :counter="counter" :color="color"/>
    <Button :textButton="'Increment'" @action="increment" />
    &nbsp;
    <Button :textButton="'Decrement'" @action="decrement" />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue';
import Title from '@/components/Title.vue';
import { computed, ref } from 'vue';

export default {
  components: {
    Title,
    Button
  },
  setup() {
    const counter = ref(0);
    const text = ref('');

    const increment = () => {
      counter.value ++
    }
    const decrement = () => {
      counter .value --
    }

    const color = computed(() => {
      if (counter.value > 0) return 'green'
      return 'purple'
    })

    return {
      // properties //
      text,
      // methods //
      counter,
      increment,
      decrement,
      color,
    }
  }
}
</script>