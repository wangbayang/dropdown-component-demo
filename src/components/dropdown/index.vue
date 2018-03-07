<script>
  import collapseTransition from './collapse-transition'

  export default {
    props: {
      list: Array,
      divided: null
    },
    created () {
      if (typeof this.divided === 'string') {
        this.showDivide = true
      }
    },
    data () {
      return {
        title: '下拉菜单',
        isExpand: false,
        showDivide: false
      }
    },
    methods: {
      // 点击title的处理函数
      handleTitleClick () {
        this.isExpand = !this.isExpand
      },
      // 点击菜单项的处理函数
      handleClickItem (item) {
        console.log(item)
        this.isExpand = false
      }
    },
    components: {
      collapseTransition
    }
  }
</script>

<template lang='pug' src='./index.pug'></template>
<style src='./index.css' scoped></style>
