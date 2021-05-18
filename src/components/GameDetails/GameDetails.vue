<template>
  <Header />
  <div id="container">
    <Summary />
    <Illustration />
  </div>
</template>

<script>
import Header from "@/components/GameDetails/Header.vue";
import Summary from "@/components/GameDetails/Summary.vue";
import Illustration from "@/components/GameDetails/Illustration.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    Summary,
    Illustration,
  },
  computed: {
    ...mapGetters([]),
  },
  created() {},
  methods: {
    ...mapActions([]),
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
