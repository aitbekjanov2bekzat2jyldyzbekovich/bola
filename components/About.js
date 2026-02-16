export default {
  name: "AboutSection",
  template: `
    <section id="about" class="py-16 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        <!-- Фото -->
        <div class="flex-shrink-0 w-full md:w-1/2">
          <img src="https://www.centralasia-travel.com/uploads/gallery/1226/naryn-01.jpg" alt="Национальная кухня Нарына"
               class="rounded-lg shadow-lg w-full object-cover h-80 md:h-full" />
        </div>

        <!-- Текст и информация -->
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">О Национальной кухне Нарына</h2>
          <p class="text-gray-700 text-lg mb-6">
            Нарын славится своими традиционными блюдами, такими как <strong>бешбармак</strong>, <strong>курут</strong>, <strong>чак-чак</strong> и другими. 
            Попробуйте аутентичные рецепты, приготовленные местными мастерами.
          </p>

          <!-- Факты / иконки -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zM12 12v6m0 0H8m4 0h4" />
              </svg>
              <span>Традиционные блюда</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l1 10h14l1-10h1" />
              </svg>
              <span>Местные ингредиенты</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" />
              </svg>
              <span>Быстрое приготовление</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6h6v6" />
              </svg>
              <span>Аутентичные рецепты</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
};
