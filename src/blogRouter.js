import { createWebHistory, createRouter } from "vue-router";
import BlogList from "./BlogList.vue";
import BlogApp from "./BlogApp.vue";
import BlogDetail from "./BlogDetail.vue";
import Error from "./Error.vue";

const routes = [
  {
    path: "/",
    component: "",
  },
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail/:id",
    component: BlogDetail,
  },
  {
    path: "/:anything(.*)",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
