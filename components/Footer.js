export default {
  name: "FooterSection",
  template: `
    <footer class="bg-orange-500 text-white py-10">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- О сайте -->
        <div>
          <h3 class="font-bold text-lg mb-4">Нац.Кухня Нарына</h3>
          <p class="text-gray-100 text-sm">
            Узнайте больше о традиционных блюдах Нарына, их истории и рецептах.
            Посетите наш каталог и откройте для себя вкусы Кыргызстана!
          </p>
        </div>

        <!-- Ссылки -->
        <div>
          <h3 class="font-bold text-lg mb-4">Навигация</h3>
          <ul class="space-y-2">
            <li><router-link to="/#about" class="hover:underline">О кухне</router-link></li>
            <li><router-link to="/#dishes" class="hover:underline">Каталог блюд</router-link></li>
            <li><router-link to="/#events" class="hover:underline">События</router-link></li>

          </ul>
        </div>


     
        </div>

      </div>

      <div class="text-center mt-6 text-sm text-gray-100">
        © 2026 Национальная кухня Нарына. Все права защищены.
      </div>
    </footer>
  `,
};
