import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import EventsSection from "../components/EventsSection.js";

import Home from "../views/Home.js";
export default {
  components: {
    Navbar,
    Footer,
    Home,
    EventsSection,
  },
  data() {
    return {
      filters: { category: "" },
    };
  },
  template: `
    <Navbar @update-filters="filters = $event" />
    <Home :filters="filters"/>
    <router-view  />
    // <EventsSection/>
    <Footer />
  `,
};
