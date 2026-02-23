import { apiFetch } from "../utils/api.js";

export default {
  name: "DishDetail",

  data() {
    return {
      dish: null,
      loading: true,
      error: null,
      map: null,
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
        this.$nextTick(() => {
          this.initMap();
        });
      } catch (e) {
        console.error(e);
        this.error = "Ошибка загрузки данных";
      } finally {
        this.loading = false;
      }
    },

    initMap() {
      if (!this.dish?.places_in_naryn?.length) return;

      if (this.map) {
        this.map.remove();
      }

      const narynLat = 41.4287;
      const narynLng = 75.9911;

      this.map = L.map("narynMap").setView([narynLat, narynLng], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(this.map);

      this.dish.places_in_naryn.forEach((place) => {
        // Если есть info, добавляем в popup
        const popupContent = place.info
          ? `<b>${place.name}</b><br/><small>${place.info}</small>`
          : `<b>${place.name}</b>`;

        L.marker([place.coordinates[0], place.coordinates[1]])
          .addTo(this.map)
          .bindPopup(popupContent);
      });
    },
  },

  computed: {
    embedVideo() {
      if (!this.dish?.video) return "";
      return this.dish.video.replace("watch?v=", "embed/");
    },
    googleMapsUrl() {
      if (!this.dish?.places_in_naryn?.length) {
        // Если мест нет — просто Нарын
        return "https://www.google.com/maps/place/Naryn,+Kyrgyzstan";
      }

      // Собираем все координаты через |
      const markers = this.dish.places_in_naryn
        .map((p) => `${p.coordinates[0]},${p.coordinates[1]}`)
        .join("|");

      return `https://www.google.com/maps?q=${markers}`;
    },
  },

  template: `
    <section class="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">

        <div v-if="loading" class="text-center text-xl text-orange-600 animate-pulse">
          Загрузка...
        </div>

        <div v-if="error" class="text-center text-red-500 text-xl">
          {{ error }}
        </div>

        <div v-if="dish" class="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <!-- HEADER -->
          <div class="relative">
            <img 
              :src="dish.image" 
              :alt="dish.name" 
              class="w-full h-[450px] sm:h-[500px] md:h-[550px] object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h1 class="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
                {{ dish.name }}
              </h1>
              <span class="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
                {{ dish.category }}
              </span>
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-8 sm:p-12 space-y-16">

            <!-- DESCRIPTION -->
            <div class="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-orange-100 hover:shadow-lg transition">
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-orange-600">
                📝 Описание
              </h2>
              <p class="text-gray-700 leading-relaxed text-lg">
                {{ dish.description }}
              </p>
            </div>

            <!-- HISTORY -->
            <div class="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md p-6 sm:p-8 border border-orange-100 hover:shadow-lg transition">
              <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-orange-600">
                📜 История блюда
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ dish.history }}
              </p>
            </div>

            <!-- RECIPE -->
            <div class="bg-orange-50 rounded-2xl shadow-inner p-6 sm:p-8 border border-orange-200">
              <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-orange-700">
                👨‍🍳 Как готовят
              </h2>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <p class="text-gray-700 leading-relaxed">
                  {{ dish.recipe }}
                </p>
              </div>
            </div>

            <!-- VIDEO -->
            <div v-if="dish.video" class="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-orange-100">
              <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-orange-600">
                🎥 Видео приготовления
              </h2>
              <div class="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  :src="embedVideo"
                  class="w-full h-full"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <!-- КАРТА (НЕ ТРОГАЕМ) -->
            <div>
              <h2 class="text-2xl font-bold mb-6">
                Где попробовать в Нарыне
              </h2>
              <div id="narynMap" class="w-full h-[500px] rounded-2xl z-0">
              </div>
          <div class="mt-6 text-center">
  <a
    :href="googleMapsUrl"
    target="_blank"
    class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
  >
    📍 Открыть в Google Maps
  </a>
</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
};
