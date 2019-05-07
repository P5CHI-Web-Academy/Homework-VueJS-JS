<template>
  <input v-model="value" class="count" placeholder="edit me">
</template>

<script>
export default {
  data() {
    return { value: 0 }
  },
}
</script>

<style lang="scss">
.count {
  width: 250px;
  padding: 7px 10px;
  margin: 20px;
  color: #fff;
  background-color: #243d4c;
  border: 0;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 8px 7px -8px #fe7f2d;
}
</style>

