<template>
  <div id="app">
    <dropdown :list="list" divided></dropdown>
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
    align-items: flex-start;
    justify-content: center;
    height: 90vh;
    padding-top: 5vh;
  }
</style>
