export default {
  name: "DishesSection",
  props: {
    search: { type: String, default: "" },
    filter: { type: String, default: "" },
    lang: { type: String, default: "ru" },
  },
  data() {
    return {
      dishes: [
        {
          name: { ru: "Бешбармак", kg: "Бешбармак", en: "Beshbarmak" },
          category: "Мясные",
          description: {
            ru: "Традиционное мясное блюдо с лапшой",
            kg: "Салттык эт тамагы",
            en: "Traditional meat with noodles",
          },
          image: "images/beshbarmak.jpg",
        },
        {
          name: { ru: "Курут", kg: "Курут", en: "Kurut" },
          category: "Молочные",
          description: {
            ru: "Сухой молочный продукт",
            kg: "Кургак сүт азыгы",
            en: "Dried dairy product",
          },
          image: "images/kurut.jpg",
        },
        {
          name: { ru: "Чак-чак", kg: "Чак-чак", en: "Chak-chak" },
          category: "Десерты",
          description: {
            ru: "Сладкая выпечка с медом",
            kg: "Бал менен таттуу",
            en: "Sweet pastry with honey",
          },
          image: "images/chakchak.jpg",
        },
        {
          name: { ru: "Сары май", kg: "Сары май", en: "Butter" },
          category: "Молочные",
          description: {
            ru: "Традиционное масло",
            kg: "Салттык май",
            en: "Traditional butter",
          },
          image: "images/butter.jpg",
        },
        {
          name: { ru: "Куурдак", kg: "Куурдак", en: "Kuurdak" },
          category: "Мясные",
          description: {
            ru: "Жареное мясо с луком",
            kg: "Пияз менен кыздырылган эт",
            en: "Fried meat with onions",
          },
          image: "images/kuurdak.jpg",
        },
        {
          name: { ru: "Бозо", kg: "Бозо", en: "Bozo" },
          category: "Напитки",
          description: {
            ru: "Традиционный квас",
            kg: "Салттык квас",
            en: "Traditional kvass",
          },
          image: "images/bozo.jpg",
        },
        {
          name: { ru: "Кымыз", kg: "Кымыз", en: "Kymyz" },
          category: "Напитки",
          description: {
            ru: "Ферментированное кобылье молоко",
            kg: "Ферменттелген жылкы сүтү",
            en: "Fermented mare milk",
          },
          image: "images/kymyz.jpg",
        },
      ],
      showAll: false,
      swiper: null,
    };
  },
  computed: {
    filteredDishes() {
      return this.dishes.filter(
        (d) =>
          (!this.filter ||
            d.category.toLowerCase() === this.filter.toLowerCase()) &&
          d.name[this.lang].toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  mounted() {
    // Инициализация Swiper
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
  template: `
    <section id="dishes" class="py-16 px-4 bg-white">
      <h2 class="text-3xl font-semibold mb-8 text-center">Каталог блюд Нарына</h2>
      
      <!-- Swiper карусель -->
      <div v-if="!showAll && filteredDishes.length > 6" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="dish in filteredDishes" :key="dish.name.ru">
            <div class="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition">
              <img :src="dish.image" :alt="dish.name[lang]" class="w-full h-48 object-cover"/>
              <div class="p-4">
                <h3 class="font-bold text-xl mb-2">{{ dish.name[lang] }}</h3>
                <p class="text-sm text-gray-600 mb-2">{{ dish.category }}</p>
                <p class="text-gray-700 text-sm">{{ dish.description[lang] }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопки навигации -->
        <div class="swiper-button-prev text-orange-500"></div>
        <div class="swiper-button-next text-orange-500"></div>
      </div>

      <!-- Показать все полный каталог -->
      <div v-if="showAll || filteredDishes.length <= 6" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div v-for="dish in filteredDishes" :key="dish.name.ru" class="bg-gray-100 shadow-md rounded-lg overflow-hidden w-72 hover:scale-105 transform transition">
          <img :src="dish.image" :alt="dish.name[lang]" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="font-bold text-xl mb-2">{{ dish.name[lang] }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ dish.category }}</p>
            <p class="text-gray-700 text-sm">{{ dish.description[lang] }}</p>
          </div>
        </div>
      </div>

      <!-- Кнопка показать все / скрыть -->
      <div class="text-center mt-6">
        <button @click="toggleShowAll" class="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
          {{ showAll ? "Скрыть" : "Показать все" }}
        </button>
      </div>
    </section>
  `,
};
