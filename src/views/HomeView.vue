<template>
  <div class="home">
    <h1 :style="{'color': color}">
      Counter: {{ counter }}
    </h1>
    <br />
    <button @click="increment">+</button>
    &nbsp;
    <button @click="decrement">-</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter ++
    },
    decrement(){
      this.counter --
    }
  },
  computed: {
    color(){
      if(this.counter < 0) {
        return 'red'
      } else return 'blue'
    }
  }
}
</script>
