<template>
  <div class="card">
    <div class="card-body">
      <h1>{{ countrie.name.common }}</h1>
      <p class="text-center">
        <img :src="countrie.flags.png" alt="flag" class="img-fluid w-50">
      </p>
      <p class="card-text">
        <span class="badge text-bg-dark d-block mb-1">
          nativeName: {{ Object.values(countrie.name?.nativeName || {})[0]?.official || 'No disponible' }}
        </span>
        <span class="badge text-bg-info p-3 d-block mb-1">population: {{ formatNumber(countrie.population) }}</span>
        <span class="badge text-bg-dark d-block mb-1">capital: {{ countrie.capital }}</span>
        <span class="badge text-bg-dark d-block mb-1">region: {{ countrie.region }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['countrie'],
  setup(props) {
    const formatNumber = (num) => {
      return new Intl.NumberFormat("de-DE").format(num)
    }

    return {
      formatNumber
    }
  }
}
</script>