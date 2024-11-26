import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    countriesFiltered: []
  },
  getters: {
    topCountriesPopulation(state) {
      return state.countriesFiltered.sort((a, b) => (
        a.population < b.population ? 1 : -1
      ))
    }
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setCountriesFiltered(state, payload) {
      state.countriesFiltered = payload
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
        // const res = await fetch('https://restcountries.com/v3.1/all')
        const res = await fetch('api.json')
        const data = await res.json();
        // console.log(data)
        commit('setCountries', data)

      } catch (error) {
        console.log(error)
      }
    },

    filterRegion({ commit, state }, region) {
      const filterCountry = state.countries.filter(country =>
        country.region.includes(region)
      )
      commit( 'setCountriesFiltered', filterCountry )
    },

    filterName({ commit, state }, text) {
      const clientInput = text.toLowerCase()
      const filterCountry = state.countries.filter( country => {
        const ApiText = country.name.common.toLowerCase()
        console.log(ApiText)
        if (ApiText.includes(clientInput))
          return country
      })
      commit('setCountriesFiltered', filterCountry)
    }
  },
  modules: {
  }
})
