import { apiFetch } from "../utils/api.js";

export default {
  name: "EventsSection",
  data() {
    return {
      events: [],
      loading: true,
      error: null,
      showAll: false,
      previewCount: 6,
    };
  },
  async mounted() {
    try {
      this.events = await apiFetch("/events");
    } catch (err) {
      this.error = "Не удалось загрузить события";
    } finally {
      this.loading = false;
    }
  },
  methods: {
    toggleView() {
      this.showAll = !this.showAll;
    },
  },
  template: `
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Заголовок секции -->
        <div class="text-center mb-12 max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">События и фестивали</h2>
          <p class="text-gray-700 text-lg">Следите за гастрономическими фестивалями и мастер-классами в Нарыне.</p>
        </div>

        <!-- Сообщения загрузки / ошибки -->
        <div v-if="loading" class="text-center text-gray-500 text-lg">Загрузка...</div>
        <div v-else-if="error" class="text-center text-red-500 text-lg">{{ error }}</div>

        <!-- Карточки событий -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="event in showAll ? events : events.slice(0, previewCount)" 
            :key="event.id" 
            class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
             data-aos="zoom-in"
          >
            <h3 class="text-2xl font-semibold mb-3 text-gray-800">{{ event.title }}</h3>
            <p class="text-gray-500 mb-1"><span class="font-semibold">Дата:</span> {{ event.date }}</p>
            <p class="text-gray-500 mb-1"><span class="font-semibold">Время:</span> {{ event.time }}</p>
            <p class="text-gray-500 mb-2"><span class="font-semibold">Место:</span> {{ event.location }}</p>
            <p class="text-gray-700 mb-3">{{ event.description }}</p>
            <p class="text-gray-500 mb-1"><span class="font-semibold">Контакт:</span> {{ event.contactName }}</p>
            <p class="text-gray-500 mb-1"><span class="font-semibold">Телефон:</span> {{ event.contactPhone }}</p>
            <p v-if="event.website" class="mb-4">
              <a 
                :href="event.website" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-orange-600 hover:underline font-semibold"
              >
                Официальный сайт
              </a>
            </p>
            <span class="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm">{{ event.category }}</span>
          </div>
        </div>

        <!-- Кнопка показать/скрыть -->
        <div v-if="events.length > previewCount" class="text-center mt-12">
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
