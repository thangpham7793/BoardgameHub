import { createRouter, createWebHistory } from "vue-router";
import GameDetails from "@/components/GameDetails/GameDetails.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/game-details",
    name: "GameDetails",
    component: GameDetails,
  },
  {
    path: "/",
    redirect: "/game-details",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
