<template>
  <Header />
  <div id="container">Welcome to Game Details page</div>
</template>

<script>
import Header from "@/components/GameDetails/Header.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GameDetails",
  computed: {
    ...mapGetters([]),
  },
  created() {},
  methods: {
    ...mapActions([]),
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
#container {
}
</style>
