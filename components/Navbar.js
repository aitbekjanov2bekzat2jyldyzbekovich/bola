export default {
  name: "Navbar",
  data() {
    return {
      open: false,
      searchQuery: "",
      filterCategory: "",
      selectedLang: "ru",
    };
  },
  template: `
    <nav class="bg-orange-500 text-white sticky top-0 z-50 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 font-bold text-xl">Нац.Кухня Нарына</div>

          <!-- Десктоп меню -->
          <div class="hidden md:flex items-center space-x-4">
            <router-link to="/" class="hover:underline">Главная</router-link>
            <router-link to="/about" class="hover:underline">О кухне</router-link>

            <select v-model="filterCategory" class="bg-orange-400 text-white rounded px-2 py-1 hover:bg-orange-600">
              <option value="">Все блюда</option>
              <option value="meat">Мясные</option>
              <option value="dairy">Молочные</option>
              <option value="dessert">Десерты</option>
            </select>

            <input v-model="searchQuery" type="text" placeholder="Поиск..." class="px-2 py-1 rounded text-black focus:outline-none"/>

            <select v-model="selectedLang" class="bg-orange-400 text-white rounded px-2 py-1 hover:bg-orange-600">
              <option value="ru">RU</option>
              <option value="kg">KG</option>
              <option value="en">EN</option>
            </select>
          </div>

          <!-- Мобильное меню -->
          <div class="md:hidden flex items-center">
            <button @click="open = !open" class="focus:outline-none">
              <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="open" class="md:hidden bg-orange-500 px-2 pt-2 pb-3 space-y-1">
        <router-link @click="open=false" to="/" class="block px-3 py-2 rounded hover:bg-orange-600">Главная</router-link>
        <router-link @click="open=false" to="/about" class="block px-3 py-2 rounded hover:bg-orange-600">О кухне</router-link>
        <select v-model="filterCategory" class="w-full px-2 py-1 rounded mt-2 text-black">
          <option value="">Все блюда</option>
          <option value="meat">Мясные</option>
          <option value="dairy">Молочные</option>
          <option value="dessert">Десерты</option>
        </select>
        <input v-model="searchQuery" type="text" placeholder="Поиск..." class="w-full px-2 py-1 rounded mt-2 text-black focus:outline-none"/>
        <select v-model="selectedLang" class="w-full px-2 py-1 rounded mt-2 text-black">
          <option value="ru">RU</option>
          <option value="kg">KG</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  `
};
