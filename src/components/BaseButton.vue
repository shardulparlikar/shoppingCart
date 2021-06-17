<template>
  <button class="btn btn-primary" :type=type :class="mode">
      <slot></slot>
  </button>
</template>

<script>
export default {
props : ['type','mode']
}
</script>

<style scoped>

</style>