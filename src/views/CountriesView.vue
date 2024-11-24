<template>
  <h1>Countries List</h1>
  <p v-for="(countrie, index) in arrayData" :key="index">
    {{ countrie.name }}
  </p>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup(props) {
    const arrayData = ref([])
    //** AVOID CALLS WITH onMounted() METHOS **//
    onMounted( async() => {
      try {
        // const res = await fetch('https://restcountries.com/v3.1/all')
        const res = await fetch('api.json')
        arrayData.value = await res.json();
      } catch (error) {
        console.log(error)
      }
    })

    //** AVOID CALLS WITH onMounted() METHOS **//
    // const fetchData = async() => {
    //   try {
    //     // const res = await fetch('https://restcountries.com/v3.1/all')
    //     const res = await fetch('api.json')
    //     arrayData.value = await res.json();
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchData()

    return {
      arrayData
    }
  }
}
</script>