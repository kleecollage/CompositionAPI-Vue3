<template>
  <div class="row">
    <div class="col-12" v-for="countrie in countries" :key="countrie.name">
      <Card :countrie="countrie" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CardList',
  components: {
    Card
  },

  setup(props) {
    const store = useStore()

    const countries = computed( () => {
      // return store.state.countries
      return store.getters.topCountriesPopulation
    })

    onMounted( async() => {
      // dispatch make the call to actions in the store
      await store.dispatch('getCountries')
      await store.dispatch('filterRegion', '')
    })

    return {
      countries,
    }
  }
}
</script>