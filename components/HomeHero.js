export default {
  name: "HomeHero",

  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: "Добро пожаловать в Нарын!",
          text: "Попробуйте аутентичную национальную кухню Нарына.",
          image: "../images/bg.png",
        },
        {
          title: "Традиции вкуса",
          text: "Настоящие рецепты, передающиеся поколениями.",
          image: "../images/bg2.jpg",
        },
        {
          title: "Уютная атмосфера",
          text: "Почувствуйте гостеприимство Нарына.",
          image: "../images/bg3.jpg",
        },
      ],
    };
  },

  mounted() {
    this.startSlider();
  },

  methods: {
    startSlider() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
  },

  template: `
    <section
      class="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <transition name="intro-fade">
        <div
          :key="currentSlide"
          class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: 'url(' + slides[currentSlide].image + ')' }"
        ></div>
      </transition>

      <div class="absolute inset-0 bg-black bg-opacity-40"></div>

      <transition name="intro-slide" mode="out-in">
        <div
          :key="'content-' + currentSlide"
          class="relative z-10 max-w-3xl px-6 sm:px-8"
        >
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {{ slides[currentSlide].title }}
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 drop-shadow-md">
            {{ slides[currentSlide].text }}
          </p>
          <router-link
            to="/#dishes"
            class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition transform hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            Узнать больше
          </router-link>
        </div>
      </transition>
    </section>
  `,
};
