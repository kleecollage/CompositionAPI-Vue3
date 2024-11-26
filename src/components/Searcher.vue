<template>
  <input type="text"
    placeholder="Enter country"
    class="form-control my-3"
    v-model="text"
    @keyup="onHandleInput"
  />
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(props) {
    const store = useStore()
    const text = ref('')

    const onHandleInput = () => {
      store.dispatch('filterName', text.value)
    }


    return {
      text,
      onHandleInput
    }
  }

}
</script>