import MainLayout from "./layout/MainLayout.js";
import DataDish from "../views/DataDish.js";

const routes = [
  {
    path: "/",
    component: MainLayout,
    props: true,
    children: [
      {
        path: "dish/:id",
        component: DataDish,
        props: true,
        name: "DishDetail",
      }, // /dish/1
    ],
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
