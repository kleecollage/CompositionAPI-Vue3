<template>
  <h1>Countries List</h1>
  <p v-for="(countrie, index) in arrayData" :key="index">
    {{ countrie.name.official }} -
    <router-link :to="`/countrie/${countrie.name.common}`">
    {{ countrie.name.common }}
    </router-link>
  </p>
</template>

<script>
import { useFetch } from '@/hooks/useFetch';

export default {
  setup(props) {
    return {...useFetch('api.json')}
  }
}
</script>