import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./views/Home.js";

const routes = [{ path: "/", component: Home }];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.component("Navbar", Navbar);
app.component("Footer", Footer);

app.use(router);
app.mount("#app");
