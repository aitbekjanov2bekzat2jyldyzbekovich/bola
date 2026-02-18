export default {
  name: "HomeHero",

  template: `
    <section class="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
              style="background-image: url('../images/bg.png') ;">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative z-10 max-w-3xl px-6 sm:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Добро пожаловать в Нарын!</h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 drop-shadow-md">Попробуйте аутентичную национальную кухню Нарына.</p>
        <a href="#dishes" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition transform hover:scale-105 text-sm sm:text-base md:text-lg">
          Узнать больше
        </a>
      </div>
    </section>
  `,
};
