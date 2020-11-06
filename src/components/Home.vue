<template>
  <div>
    <div id="nav">
      <router-link to="/ambassador">Ambassador</router-link> |
      <router-link to="/buddy">Buddy</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ambassador',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
</style>
