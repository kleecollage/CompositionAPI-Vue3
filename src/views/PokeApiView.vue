<template>
  <suspense>
    <template #default>
      <div>
        <h1>Pokemons</h1>
        <ul>
          <li v-for="pokemon in pokemons" :key="pokemon.name">
            {{ pokemon.name }} - <a :href="pokemon.url" target="_blank">Ver más</a>
          </li>
        </ul>
      </div>
    </template>
    <template #fallback>
      Loading ...
    </template>
  </suspense>
</template>

<script setup>
import { ref } from 'vue';

const pokemons = ref([]);
const isLoading = ref(true);

const fetchPokemons = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
    const data = await res.json();
    pokemons.value = data.results;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
  } finally {
    isLoading.value = false; // Termina el estado de carga
  }
};

fetchPokemons();
</script>
