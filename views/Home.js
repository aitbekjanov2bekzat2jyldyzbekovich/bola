import HomeHero from "../components/HomeHero.js";
import About from "../components/About.js";
import DishesSection from "../components/DishesSection.js";
import EventsSection from "../components/EventsSection.js";

export default {
  name: "Home",
  components: { HomeHero, DishesSection, EventsSection, About },
  template: `
    <div>
       <Navbar />          <!-- Всегда сверху -->
      <HomeHero />
      <About/>
      <DishesSection />
      <EventsSection />
      <Footer/>
    </div>
  `,
};
