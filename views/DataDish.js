import { apiFetch } from "../utils/api.js";

export default {
  name: "DishDetail",

  data() {
    return {
      dish: null,
      loading: true,
      error: null,
    };
  },

  watch: {
    "$route.params.id": {
      immediate: true,
      handler(newId) {
        this.fetchDish(newId);
      },
    },
  },

  methods: {
    async fetchDish(id) {
      this.loading = true;
      this.dish = null;
      this.error = null;

      try {
        this.dish = await apiFetch(`/dishes/${id}`);
      } catch (e) {
        console.error(e);
        this.error = "Ошибка загрузки данных";
      } finally {
        this.loading = false;
      }
    },
  },

  computed: {
    embedVideo() {
      if (!this.dish?.video) return "";
      return this.dish.video.replace("watch?v=", "embed/");
    },
  },

  template: `
    <section class="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">

        <!-- Loading & Error -->
        <div v-if="loading" class="text-center text-xl text-orange-600 animate-pulse">Загрузка...</div>
        <div v-if="error" class="text-center text-red-500 text-xl">{{ error }}</div>

        <div v-if="dish" class="bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-300">

          <!-- Dish Header -->
          <div class="relative">
            <img 
              :src="dish.image" 
              :alt="dish.name" 
              class="w-full h-[450px] sm:h-[500px] md:h-[550px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h1 class="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">{{ dish.name }}</h1>
              <span class="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">{{ dish.category }}</span>
            </div>
          </div>

          <!-- Dish Details -->
          <div class="p-8 sm:p-10 space-y-12">

            <!-- Description -->
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-orange-200 inline-block pb-1">Описание</h2>
              <p class="text-gray-700 leading-relaxed text-lg sm:text-base">{{ dish.description }}</p>
            </div>

            <!-- History -->
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-orange-200 inline-block pb-1">История блюда</h2>
              <p class="text-gray-600 leading-relaxed text-base sm:text-sm">{{ dish.history }}</p>
            </div>

            <!-- Recipe -->
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-orange-200 inline-block pb-1">Как готовят</h2>
              <div class="bg-orange-50 p-6 sm:p-8 rounded-2xl shadow-inner border border-orange-200">
                <p class="text-gray-700 leading-relaxed">{{ dish.recipe }}</p>
              </div>
            </div>

            <!-- Video -->
            <div v-if="dish.video">
              <h2 class="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-orange-200 inline-block pb-1">Видео приготовления</h2>
              <div class="aspect-video rounded-2xl overflow-hidden shadow-lg border border-orange-200">
                <iframe :src="embedVideo" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>

            <!-- Places -->
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-orange-200 inline-block pb-1">Где попробовать в Нарыне</h2>
              <div class="grid sm:grid-cols-2 gap-6">
                <div 
                  v-for="place in dish.places_in_naryn" 
                  :key="place.name" 
                  class="bg-white border border-orange-200 p-6 rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 class="text-lg font-semibold mb-2">📍 {{ place.name }}</h3>
                  <p class="text-gray-500 text-sm">Координаты: {{ place.coordinates[0] }}, {{ place.coordinates[1] }}</p>
                  <a 
                    :href="'https://www.google.com/maps?q=' + place.coordinates[0] + ',' + place.coordinates[1]" 
                    target="_blank" 
                    class="text-orange-500 hover:underline mt-2 inline-block text-sm"
                  >Открыть в Google Maps</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
};
