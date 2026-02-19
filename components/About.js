export default {
  name: "AboutSection",

  template: `
    <section id="about" class="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <!-- Фото с анимацией -->
        <div 
          data-aos="fade-right" 
          class="relative w-full md:w-1/2 group"
        >
          <div class="absolute inset-0 bg-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          
          <img 
            src="https://www.centralasia-travel.com/uploads/gallery/1226/naryn-01.jpg" 
            alt="Национальная кухня Нарына"
            class="relative rounded-2xl shadow-2xl w-full object-cover h-80 md:h-[450px] transition duration-500 group-hover:scale-105"
          />
        </div>

        <!-- Текст с stagger-анимацией -->
        <div class="flex-1 text-center md:text-left">
          <h2 data-aos="fade-left" data-aos-delay="100"
              class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            Национальная кухня Нарына
          </h2>

          <p data-aos="fade-up" data-aos-delay="200"
             class="text-gray-600 text-lg md:text-xl leading-relaxed mb-4">
            Нарын славится своими традиционными блюдами, такими как 
            <span class="font-semibold text-orange-600">бешбармак</span>, 
            <span class="font-semibold text-orange-600">курут</span>, 
            <span class="font-semibold text-orange-600">чак-чак</span> 
            и другими.
          </p>

          <p data-aos="fade-up" data-aos-delay="350"
             class="text-gray-600 text-lg md:text-xl leading-relaxed">
            Попробуйте аутентичные рецепты, приготовленные местными мастерами, 
            и почувствуйте настоящий вкус высокогорного региона.
          </p>
        </div>

      </div>
    </section>
  `,
};
