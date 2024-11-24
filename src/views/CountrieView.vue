<template>
  <!-- <h1>Countire Detail: {{ $route.params.name }}</h1> -->
  <h1>Countire Detail: {{ name }}</h1>
  <p v-for="(countrie, index) in arrayData" :key="index">
    {{ countrie.name.official }} - {{ countrie.region }}
  </p>
</template>

<script>
import { useFetch } from '@/hooks/useFetch';
import { useRoute } from 'vue-router';

export default {
  props: ['name'],
  setup(props) {
    //** GET PARAMS OP 1 **//
    console.log(props.name)
    //** GET PARAMS OP 2 **//
    const nameParams = useRoute();
    console.log(nameParams.params.name)

    const { arrayData } =  useFetch(`https://restcountries.com/v3.1/name/${nameParams.params.name}`)

    return {
      arrayData
    }
  }
}
</script>