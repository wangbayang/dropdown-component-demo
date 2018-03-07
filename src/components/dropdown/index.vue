<script>
  export default {
    props: {
      list: Array
    },
    data () {
      return {
        isExpand: false
      }
    },
    methods: {
      handleTitleClick () {
        this.isExpand = !this.isExpand
      }
    }
  }
</script>

<template lang='pug' src='./index.pug'></template>
<style src='./index.css' scoped></style>
