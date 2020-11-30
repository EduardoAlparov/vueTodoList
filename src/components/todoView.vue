<template lang="pug">
  div
    h1 Компонент просмотра задания
    button(@click="goBack") Назад
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="postcss" scoped>

</style>