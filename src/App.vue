<template>
  <div id="app">
    <dropdown :list="list"></dropdown>
  </div>
</template>

<script>
  import dropdown from '@/components/dropdown'
  import list from '@/components/dropdown/list'

  export default {
    data () {
      return {
        list
      }
    },
    components: {
      dropdown
    }
  }
</script>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95vh;
  }
</style>
