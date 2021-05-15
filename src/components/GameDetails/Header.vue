<template>
  <div class="flex w-full justify-between">
    <h1 class="font-bold text-green-400">BoardGameHub Icon</h1>
    <form id="container" class="flex" @submit.prevent="onSubmit">
      <input
        class="border border-solid border-black rounded-lg px-2 mr-2"
        placeholder="Search"
        v-model="query"
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  </div>
</template>

<script>
import SearchIcon from "@/assets/images/Search.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    onSubmit() {
      console.log(this.query);
    },
  },
  components: { SearchIcon },
};
</script>

<style scoped>
#container {
}
</style>
