<template>
  <div class="text-center">
    <h3>Filter by continents</h3>
    <div class="btn-group mb-3">
      <button @click="filterRegion('Americas')" class="btn btn-dark">America</button>
      <button @click="filterRegion('Europe')" class="btn btn-dark">Europe</button>
      <button @click="filterRegion('Asia')" class="btn btn-dark">Asia</button>
      <button @click="filterRegion('Africa')" class="btn btn-dark">Africa</button>
      <button @click="filterRegion('Oceania')" class="btn btn-dark">Oceania</button>
      <button @click="filterRegion('')" class="btn btn-dark px-4">All</button>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';

export default {
  setup(props) {
    const store = useStore()
    const filterRegion =  (regionSelected) => {
      store.dispatch('filterRegion', regionSelected)
    }

    return {
      filterRegion
    }
  }
}
</script>