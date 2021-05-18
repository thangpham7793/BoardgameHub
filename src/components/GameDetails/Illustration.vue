<template>
  <div id="container">
    <img :src="require('@/assets/images/' + imageName)" />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      imageName: "monopoly.jpg",
    };
  },
};
</script>

<style scoped>
#container {
  flex-basis: 50%;
}
</style>
