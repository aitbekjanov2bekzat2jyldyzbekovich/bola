export default {
  name: "DishesSection",

  props: {
    dishes: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      swiper: null,
      showAll: false,
    };
  },

  mounted() {
    this.$nextTick(() => {
      if (!this.showAll) {
        this.initSwiper();
      }
    });
  },

  watch: {
    dishes() {
      this.$nextTick(() => {
        if (!this.showAll) {
          this.initSwiper();
        }
      });
    },
  },

  methods: {
    initSwiper() {
      // Безопасное уничтожение
      if (this.swiper && typeof this.swiper.destroy === "function") {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }

      this.$nextTick(() => {
        const el = document.querySelector(".dishes-swiper");

        if (!el) return; // если DOM ещё нет — выходим

        this.swiper = new Swiper(el, {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
        });
      });
    },
    toggleView() {
      this.showAll = !this.showAll;

      this.$nextTick(() => {
        if (!this.showAll) {
          this.initSwiper();
        }
      });
    },
  },

  template: `
  <section id="dishes" class="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
    <div class="max-w-7xl mx-auto">

      <h2 class="text-4xl font-bold text-center mb-14 text-gray-800">
        Каталог блюд Нарына
      </h2>

      <!-- КАРУСЕЛЬ -->
      <div v-if="!showAll" class="swiper dishes-swiper pb-14"   data-aos="zoom-in">
        <div class="swiper-wrapper">

          <div 
            class="swiper-slide cursor-pointer" 
            v-for="dish in dishes" 
            :key="dish.id"
           @click="$router.push({
  name: 'DishDetail',
  params: { id: dish.id },
  hash:   '#' + dish.id
})"
        
          >
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">

              <div class="overflow-hidden">
                <img 
                  :src="dish.image" 
                  :alt="dish.name"
                  class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">
                  {{ dish.name }}
                </h3>

                <span class="inline-block text-xs px-3 py-1 mb-3 bg-orange-100 text-orange-600 rounded-full">
                  {{ dish.category }}
                </span>

                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ dish.description }}
                </p>
              </div>

            </div>
          </div>

        </div>

        <div class="swiper-button-prev text-orange-500"></div>
        <div class="swiper-button-next text-orange-500"></div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- GRID -->
      <div 
        v-if="showAll"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
         data-aos="zoom-in"
      >
        <div 
          v-for="dish in dishes" 
          :key="dish.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group cursor-pointer"
           @click="$router.push({
  name: 'DishDetail',
  params: { id: dish.id },
  hash:   '#' + dish.id
})"
        >
          <div class="overflow-hidden">
            <img 
              :src="dish.image" 
              :alt="dish.name"
              class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">
              {{ dish.name }}
            </h3>

            <span class="inline-block text-xs px-3 py-1 mb-3 bg-orange-100 text-orange-600 rounded-full">
              {{ dish.category }}
            </span>

            <p class="text-gray-600 text-sm leading-relaxed">
              {{ dish.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- КНОПКА -->
      <div class="text-center mt-12">
        <button 
          @click="toggleView"
          class="px-8 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300"
        >
          {{ showAll ? "Скрыть" : "Смотреть все" }}
        </button>
      </div>

    </div>
  </section>
  `,
};
