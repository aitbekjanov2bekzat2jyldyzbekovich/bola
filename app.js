import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import router from "./router.js";

const app = Vue.createApp({
  data() {
    return {
      filters: { category: "" },
    };
  },
  template: `
    <Navbar @update-filters="filters = $event" />
    <router-view :filters="filters" />
    <Footer />
  `,
});

app.component("Navbar", Navbar);
app.component("Footer", Footer);

app.use(router);
app.mount("#app");
