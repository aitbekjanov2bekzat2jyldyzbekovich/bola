export default {
  name: "SearchResult",
  props: {
    result: {
      type: Array,
      default: () => [],
    },
    status: {
      type: String,
      default: "",
    },
  },
  watch: {
    status(newVal) {
      if (newVal) {
        // Блокируем скролл страницы
        document.body.style.overflow = "hidden";
        this.$router.push("/");
      } else {
        // Разблокируем скролл
        document.body.style.overflow = "";
        this.$router.push("/");
      }
    },
  },
  beforeUnmount() {
    // На всякий случай разблокируем скролл при уничтожении компонента
    document.body.style.overflow = "";
  },
  template: `
    <div v-if="status" class="fixed inset-0 z-40 flex justify-center items-start bg-black/90 p-4 overflow-y-auto max-[760px]:pt-[250px]">
      <section 
        class="search-result bg-white border rounded-lg shadow-lg w-full max-w-md p-4 mt-20"
      >
        <h2 class="text-xl font-bold mb-3">Результаты поиска</h2>

        <div v-if="result.length === 0" class="text-gray-500">Ничего не найдено 😕</div>

        <div v-else class="flex flex-col gap-4">
          <div 
            v-for="dish in result" 
            :key="dish.id" 
            class="flex gap-3 items-start border-b pb-3 last:border-b-0 hover:bg-gray-50 transition"
          >
            <img :src="dish.image" :alt="dish.name" class="w-16 h-16 object-cover rounded"/>
            <div class="flex-1">
              <div class="font-semibold text-md">{{ dish.name }}</div>
              <div class="text-sm text-gray-500 mb-1">{{ dish.category }}</div>
              <div class="text-gray-700 text-sm">{{ dish.description }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};
