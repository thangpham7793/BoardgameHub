<template>
  <div id="container">
    <div class="row">
      <h2>{{ details?.name }}</h2>
      <span>#{{ details?.rank }}</span>
    </div>
    <div class="row">⭐⭐⭐⭐</div>
    <div class="row">
      <span>Num of Players: {{ details?.numOfPlayers }}</span
      ><span>Duration: {{ details?.duration }}</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      details: {
        name: "Monopoly (HK)",
        rank: 23,
        rating: 4,
        numOfPlayers: 5,
        duration: "1hr",
      },
    };
  },
};
</script>

<style scoped>
#container {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
