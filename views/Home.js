import HomeHero from "../components/HomeHero.js";
import About from "../components/About.js";
import DishesSection from "../components/DishesSection.js";
import EventsSection from "../components/EventsSection.js";
import SearchResult from "../components/SearchResult.js"; // поправил название
import { apiFetch } from "../utils/api.js";

export default {
  name: "Home",
  components: { HomeHero, DishesSection, EventsSection, About, SearchResult },

  data() {
    return {
      dishes: [],
      searchQuery: "", // текст поиска
      fuse: null,
    };
  },

  props: ["filters"],

  computed: {
    filteredDishes() {
      // Сначала фильтр по категории
      let filtered = this.dishes.filter((dish) => {
        return (
          !this.filters.category || dish.category === this.filters.category
        );
      });

      // Если есть текст поиска — используем Fuse.js
      if (this.filters.searchQuery && this.fuse) {
        return this.fuse
          .search(this.filters.searchQuery)
          .map((result) => result.item)
          .filter((dish) => filtered.includes(dish)); // учитываем фильтр категории
      }

      return filtered;
    },
  },

  async mounted() {
    // Получаем данные
    this.dishes = await apiFetch("/dishes");

    // Настраиваем Fuse.js
    const options = {
      keys: [
        "name",
        "category",
        "description",
        "name_translations",
        "description_translations",
         "category_translations"
      ],
      threshold: 0.3,
      ignoreLocation: true,
    };
    this.fuse = new Fuse(this.dishes, options);
  },

  template: `
    <div>
      <HomeHero />
      <About id="about"/>
      <DishesSection :dishes="filteredDishes" id="dishes"/>
      <SearchResult :result="filteredDishes" :status="this.filters.searchQuery"/>
      <EventsSection />
    </div>
  `,
};
