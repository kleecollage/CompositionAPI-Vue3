import { onMounted, ref } from "vue";

export function useFetch(url) {
  const arrayData = ref([])
  //** AVOID CALLS WITH onMounted() METHOD **//
  onMounted( async() => {
    try {
      // const res = await fetch('https://restcountries.com/v3.1/all')
      const res = await fetch(url)
      arrayData.value = await res.json();
    } catch (error) {
      console.log(error)
    }
  })

  //** AVOID CALLS WITH onMounted() METHOD **//
  // const fetchData = async() => {
  //   try {
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