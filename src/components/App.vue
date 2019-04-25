<template>
  <div class="example">
    <p class="example__title">
      {{ msg }}
    </p>
    <img
      :src="image"
      class="example__image"
    >
  </div>
</template>

<script>
import img from '../assets/images/webpack-logo.png'

export default {
  data() {
    return {
      msg: 'Hello world!',
      image: img,
    }
  },
}
</script>

<style lang="scss">
.example {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__title {
    color: #fff;
  }

  // check autoprefixer
  &__image {
    width: 100px;
    transform: rotate(90deg);
  }
}
</style>
